<template>
  <div class="flex justify-end mb-6 space-x-3">
    <div>
      <p class="text-xs">Sort by price</p>
      <el-select v-model="priceSort" class="w-[150px]">
        <el-option
          v-for="item in sortPriceOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
          @click="sortByName"
        />
      </el-select>
    </div>
  </div>

  <div class="flex">
    <div class="mr-6">
      <Filters />
    </div>

    <div v-if="noPlaces" class="w-full flex items-center">
      <h2 class="text-center w-full text-lg">No places found...</h2>
    </div>

    <div v-if="!noPlaces" class="w-full">
      <Grid>
        <GridItem
          v-for="place in placesShowed"
          :id="place.id"
          :key="place.id"
          :photos="place.photos"
          :address="place.address"
          :stars="place.stars || 0"
          :price="place.pricing"
        />
      </Grid>

      <div ref="trigger" class="trigger" />
      <div v-loading="loadingChunck" class="h-10 my-3" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const placesStore = usePlacesStore()
const filterStore = useFiltersStore()
const generalStore = useGeneralStore()

const { loading } = storeToRefs(generalStore)
const {
  places, maxlength, placesFiltered, startFiltered, endFiltered, url, filteredLength,
  noPlaces, start, end, priceSort
} = storeToRefs(placesStore)
const { max, min, priceRange } = storeToRefs(filterStore)
const { getChank, getLength, getFiltered, getPrices } = usePlacesStore()

const trigger = ref<Element>()
const loadingChunck = ref<boolean>(false)

const sortPriceOptions = [
  {
    value: 0,
    label: 'None',
    disabled: true
  },
  {
    value: 1,
    label: 'Greater price'
  },
  {
    value: 2,
    label: 'Lower price'
  }
]

const placesShowed = computed(() => {
  if (placesFiltered.value.length) {
    return placesFiltered.value
  }
  return places.value
})

function loadItems () {
  if (start.value !== 0 || startFiltered.value !== 0) loadingChunck.value = true

  if (placesFiltered.value.length) {
    return getFiltered(url.value, `${startFiltered.value}-${endFiltered.value}`)
      ?.then(() => {
        sortByName()
      })
      ?.finally(() => (loadingChunck.value = false))
  }

  getChank(`${start.value}-${end.value}`)

    .then((data: IPlace[]) => {
      places.value.push(...data)
      if (priceSort.value !== 0) {
        sortByName()
      }

      start.value = start.value + 20
      end.value = end.value + 20
    }).finally(() => {
      loadingChunck.value = false
      loading.value = false
    })
}

const observer = new IntersectionObserver(callBack, { rootMargin: '300px' })

function callBack (entries: any) {
  if (start.value >= maxlength.value) return
  if (filteredLength.value > 0 && startFiltered.value >= filteredLength.value) return (loadingChunck.value = false)
  entries.forEach((entry: any) => {
    if (entry.isIntersecting) {
      loadItems()
    }
  })
}

function sortByName () {
  if (priceSort.value === 1) {
    placesShowed.value.sort((a, b) => b.pricing - a.pricing)
  }
  if (priceSort.value === 2) {
    placesShowed.value.sort((a, b) => a.pricing - b.pricing)
  }
}

onMounted(async () => {
  loading.value = true

  if (maxlength.value === 0) {
    await getLength()
      .then((data: number[]) => (maxlength.value = data.length))
  }

  if (places.value.length) loading.value = false

  if (trigger.value) observer.observe(trigger.value)

  if (min.value === 0 || max.value === 0) {
    const prices = await getPrices()

    max.value = Math.max(...prices.map((item: any) => item.pricing)) + 1

    priceRange.value[0] = min.value
    priceRange.value[1] = max.value
  }
})

</script>
