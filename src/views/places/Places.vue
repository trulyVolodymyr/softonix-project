<template>
  <div class="flex justify-end mb-6 space-x-3 laptop:hidden">
    <div class="laptop:hidden self-end mr-auto mb-6 ">
      <div class="py-3 pr-3 bg-white z-50 fixed w-full mt-[-8px]">
        <el-button aria-label="Filters" class="app-button" @click="toggleFilters">Filters</el-button>
      </div>
    </div>
  </div>

  <div class="laptop:flex">
    <Transition>
      <Filters v-if="adaptiveFilters" class="" />
    </Transition>

    <Filters class="hidden laptop:block" />

    <div v-if="noPlaces" class="w-full flex items-center">
      <h2 class="text-center w-full text-lg">No places found...</h2>
    </div>

    <div v-if="!noPlaces" class="flex-grow">
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
const generalStore = useGeneralStore()

const { loading } = storeToRefs(generalStore)
const {
  places, maxlength, placesFiltered, startFiltered, endFiltered, url,
  noPlaces, start, end, priceSort, placesShowed, adaptiveFilters,
  noMoreFiltered, max, min, allFilters, addedPlacesPerLoad
} = storeToRefs(placesStore)
const { getFiltered, sortByPrice } = usePlacesStore()

const trigger = ref<Element>()
const loadingChunck = ref<boolean>(false)

function loadItems () {
  if (start.value !== 0 || startFiltered.value !== 0) loadingChunck.value = true

  if (placesFiltered.value.length) {
    return getFiltered(url.value, `${startFiltered.value}-${endFiltered.value}`)
      ?.then(() => {
        sortByPrice()
      })
      .catch((e) => {
        ElNotification({
          title: 'Error',
          message: e.error_description || 'Something went wrong.',
          type: 'error'
        })
      })
      ?.finally(() => (loadingChunck.value = false))
  }

  placesService.getChank(`${start.value}-${end.value}`)
    .then((data: IPlace[]) => {
      places.value.push(...data)
      if (priceSort.value !== 'none') {
        sortByPrice()
      }
      start.value = start.value + addedPlacesPerLoad.value
      end.value = end.value + addedPlacesPerLoad.value
    })
    .catch((e) => {
      ElNotification({
        title: 'Error',
        message: e.error_description || 'Something went wrong.',
        type: 'error'
      })
    })
    .finally(() => {
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

loadItems()

onMounted(() => {
  loading.value = true
  if (maxlength.value === 0) {
    placesService.getLength()
      .then((data: number[]) => (maxlength.value = data.length))
      .catch((e) => {
        ElNotification({
          title: 'Error',
          message: e.error_description || 'Something went wrong.',
          type: 'error'
        })
      })
      .finally(() => (loading.value = false))
  }

  if (trigger.value) observer.observe(trigger.value)

  if (max.value === 0) {
    placesService.getPrice()
      .then((prices) => {
        max.value = Math.max(...prices.map((item: any) => item.pricing)) + 1

        allFilters.value.priceRange[0] = min.value
        allFilters.value.priceRange[1] = max.value
      })
      .catch((e) => {
        ElNotification({
          title: 'Error',
          message: e.error_description || 'Something went wrong.',
          type: 'error'
        })
      })
      .finally(() => (loading.value = false))
  }
})

</script>
