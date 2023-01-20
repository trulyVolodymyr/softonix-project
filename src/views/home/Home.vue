<template>
  <Modal v-if="filtersModalVisability">
    <Filters />
  </Modal>

  <div class="p-6">
    <Grid>
      <GridItem
        v-for="place in placesShowed"
        :key="place.id"
        :photos="place.photos"
        :address="place.address"
        :stars="place.stars || 0"
        :price="place.pricing.rate.amountFormatted"
      />
    </Grid>
    <div ref="trigger" class="more" />
  </div>
</template>

<script lang="ts" setup>
const { object } = useHomeStore()

const placesShowed = ref(object.slice(0, 12))

const start = ref(0)
const end = ref(12)
const trigger = ref<Element>()

const filterStore = useFiltersStore()
const { filtersModalVisability } = storeToRefs(filterStore)

function loadItems () {
  new Promise((resolve) => {
    start.value = start.value + 12
    end.value = end.value + 12
    resolve(object.slice(start.value, end.value))
  }).then((data: any) => {
    placesShowed.value.push(...data)
  })
}

const options = {
  root: null,
  rootMargin: '300px',
  threshold: 0
}
const observer = new IntersectionObserver(callBack, options)

function callBack (entries: any) {
  entries.forEach((entry: any) => {
    if (entry.isIntersecting) {
      loadItems()
    }
  })
}

onMounted(() => {
  if (trigger.value) {
    observer.observe(trigger.value)
  }
})

</script>

<style>
.infinite-list {
  @apply h-full p-4 m-0 list-none
}
.infinite-list .infinite-list-item {
  @apply flex items-center justify-center h-[50px] m-3
}
.infinite-list .infinite-list-item + .list-item {
  @apply mt-3
}
</style>
