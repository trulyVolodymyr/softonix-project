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
      @click="getFiltered(url, `${startFiltered}-${endFiltered}`)"
    >
      Aplly filters
    </el-button>
    {{ vova }}
  </div>
</template>

<script lang='ts' setup>
const placesStore = usePlacesStore()
const filtersStore = useFiltersStore()

const { getFiltered } = usePlacesStore()
const { startFiltered, endFiltered, url } = storeToRefs(placesStore)
const { max, min, priceRange } = storeToRefs(filtersStore)

const vova = computed(() => {
  const urlArr = ['https://pcdokqjfsewijuqgscrk.supabase.co/rest/v1/places?select=*']
  if (priceRange.value[0] !== min.value || priceRange.value[1] !== max.value) {
    urlArr.push(`&pricing=gt.${priceRange.value[0]}`)
    urlArr.push(`&pricing=lt.${priceRange.value[1]}`)
  }
  url.value = urlArr.join('')
})

onMounted(() => {
  startFiltered.value = 0
  endFiltered.value = 19
})

</script>

<style lang='scss'>
.filter-item{
  @apply pb-4 mb-2 border-b-[1px] border-b-white
}
</style>
