<template>
  <Modal v-if="filtersModalVisability">
    <Filters />
  </Modal>

  <div class="p-6">
    <Grid>
      <GridItem
        v-for="(place) in placesShowed"
        :id="place.id"
        :key="place.id"
        :photos="JSON.parse(place.photos) "
        :address="place.address"
        :stars="place.stars || 0"
        :price="place.pricing"
      />
    </Grid>

    <div v-loading="loadingChunck" class="h-10 my-3" />

    <div ref="trigger" />
  </div>
</template>

<script lang="ts" setup>
const placesStore = usePlacesStore()
const filterStore = useFiltersStore()
const generalStore = useGeneralStore()

const { loading } = storeToRefs(generalStore)
const { places, maxlength, placesFiltered, startFiltered, endFiltered, url, filteredLength } = storeToRefs(placesStore)
const { filtersModalVisability } = storeToRefs(filterStore)
const { getChank, getLength, getFiltered } = usePlacesStore()

const start = ref<number>(0)
const end = ref<number>(19)

const trigger = ref<Element>()
const loadingChunck = ref<boolean>(false)

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
      ?.finally(() => (loadingChunck.value = false))
  }

  getChank(`${start.value}-${end.value}`)

    .then((data: IPlace[]) => {
      places.value.push(...data)

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

onMounted(async () => {
  loading.value = true

  if (maxlength.value === 0) {
    await getLength()
      .then((data: number[]) => (maxlength.value = data.length))
  }

  if (places.value.length) loading.value = false

  if (trigger.value) observer.observe(trigger.value)
})

</script>
