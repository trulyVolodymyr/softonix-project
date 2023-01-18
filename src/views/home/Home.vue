<template>
  <Modal v-if="filtersModalVisability">
    <Filters />
  </Modal>
  <ul
    v-infinite-scroll="load"
    class="infinite-list"
    style="overflow: auto"
  >
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
  </ul>
</template>

<script lang="ts" setup>
const { object } = useHomeStore()

const placesShowed = ref(object.slice(0, 12))

const start = ref(0)
const end = ref(12)

const load = () => {
  start.value = start.value + 12
  end.value = end.value + 12
  const vova = object.slice(start.value, end.value)
  vova.forEach(el => placesShowed.value.push(el))
}

const filterStore = useFiltersStore()
const { filtersModalVisability } = storeToRefs(filterStore)

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
