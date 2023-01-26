<template>
  <div class="w-[250px]  sticky top-10">
    <div class=" h-[450px] px-1 overflow-y-auto overflow-x-hidden">
      <FiltersRange />

      <FiltersRoomType />

      <FiltersPropertyType />

      <FiltersBedsAndRooms />

      <FiltersAmenities />
    </div>
    <div class="ml-1 mt-3">
      <el-button
        class="app-button"
        @click="applyFilters"
      >
        Aplly filters
      </el-button>
      <el-button class="app-button w-[93px]" @click="resetFilters">Reset</el-button>
    </div>
  </div>
</template>

<script lang='ts' setup>

const placesStore = usePlacesStore()
const generalStore = useGeneralStore()
const filtersStore = useFiltersStore()
const { min, max, priceRange, roomType, propertyType, amenities, bedrooms, beds, bathrooms } = storeToRefs(filtersStore)
const { top } = storeToRefs(generalStore)
const { getFiltered } = usePlacesStore()
const { startFiltered, endFiltered, url, placesFiltered } = storeToRefs(placesStore)

function applyFilters () {
  placesFiltered.value.splice(0, placesFiltered.value.length)
  startFiltered.value = 0
  endFiltered.value = 19

  getFiltered(url.value, `${startFiltered.value}-${endFiltered.value}`)
    ?.then(() => {
      top.value?.scrollTo(0, 0)
    })
}

function resetFilters () {
  placesFiltered.value.splice(0, placesFiltered.value.length)
  priceRange.value[0] = min.value
  priceRange.value[1] = max.value
  roomType.value = propertyType.value = ''
  amenities.value.essentials = amenities.value.features = amenities.value.location = amenities.value.safety = []
  bedrooms.value = beds.value = bathrooms.value = 0
}

</script>
