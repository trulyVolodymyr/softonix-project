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
</template>

<style lang='scss'>
.filter-item{
  @apply pb-4 mb-2 border-b-[1px] border-b-white
}
</style>
