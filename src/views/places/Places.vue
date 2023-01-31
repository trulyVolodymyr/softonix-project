<template>
  <div class="flex justify-end mb-6 space-x-3">
    <div class="laptop:hidden self-end mr-auto mb-6 ">
      <div class="py-3 pr-3 bg-white z-50 fixed w-full mt-[-8px]">
        <el-button aria-label="Filters" class="app-button" @click="toggleFilters">Filters</el-button>
      </div>
    </div>
  </div>

  <div class="laptop:flex">
    <Transition>
      <Filters v-if="adaptiveFilters" class=" overflow-hidden z-50 bg-white mb-10" />
    </Transition>

    <Filters class="hidden laptop:block" />

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
          :beds="place.beds"
          :guests="place.numberOfGuests"
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
  places, maxlength, placesFiltered, startFiltered, endFiltered, url,
  noPlaces, start, end, priceSort, placesShowed, adaptiveFilters,
  noMoreFiltered
} = storeToRefs(placesStore)
const { max, min, priceRange } = storeToRefs(filterStore)
const { getChank, getLength, getFiltered, getPrices, sortByName } = usePlacesStore()

const trigger = ref<Element>()
const loadingChunck = ref<boolean>(false)

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

const observer = new IntersectionObserver((entries: any) => {
  if (start.value >= maxlength.value) return

  if (noMoreFiltered.value === true) return (loadingChunck.value = false)

  entries.forEach((entry: any) => {
    if (entry.isIntersecting) {
      loadItems()
    }
  })
}, { rootMargin: '300px' })

function toggleFilters () {
  adaptiveFilters.value = !adaptiveFilters.value
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

<style lang='scss'>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}

.v-enter-from,
.v-leave-to {
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}
</style>
