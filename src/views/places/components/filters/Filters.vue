<template>
  <div class="text-right filter-item">
    <FiltersClose />
  </div>
  <div class="overflow-y-auto h-[600px] pr-3">
    <div class="filter-item">
      <FiltersRange />
    </div>
    <div class="filter-item">
      <FiltersPlaceType />
    </div>
    <div class="filter-item">
      <FiltersRadio />
    </div>
    <div class="filter-item">
      <FiltersPropertyType />
    </div>
    <div class="filter-item">
      <FiltersAmenities />
    </div>
  </div>
  <div class="flex justify-end mt-4">
    <el-button
      class="app-button border-[1px] border-white hover:border-[1px] hover:border-white"
      @click="applyFilters"
    >
      Aplly filters
    </el-button>
  </div>
</template>

<script lang='ts' setup>
const placesStore = usePlacesStore()
const filtersStore = useFiltersStore()

const { getFiltered } = usePlacesStore()
const { startFiltered, endFiltered, url, placesFiltered } = storeToRefs(placesStore)
const { filtersModalVisability } = storeToRefs(filtersStore)

function applyFilters () {
  placesFiltered.value.splice(0, placesFiltered.value.length)

  getFiltered(url.value, `${startFiltered.value}-${endFiltered.value}`)

  filtersModalVisability.value = false
}

onMounted(async () => {
  startFiltered.value = 0
  endFiltered.value = 19
})

</script>

<style lang='scss'>
.filter-item{
  @apply pb-4 mb-2 border-b-[1px] border-b-white
}
</style>
