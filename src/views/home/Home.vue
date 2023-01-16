<template>
  <Modal v-if="filtersModalVisability" wide>
    <Filters />
  </Modal>
  <Grid>
    <GridItem
      v-for="place in object"
      :key="place.id"
      :photos="place.photos"
      :address="place.address"
      :stars="place.stars"
      :price="place.pricing.rate.amountFormatted"
    />
  </Grid>
</template>

<script lang="ts" setup>

const { object } = useHomeStore()

const filterStore = useFiltersStore()
const { filtersModalVisability } = storeToRefs(filterStore)

</script>
