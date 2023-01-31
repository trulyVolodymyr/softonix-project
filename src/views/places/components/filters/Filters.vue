<template>
  <div
    class="laptop:w-[350px] shadow-2xl laptop:shadow-none mb-5 laptop:mb-0 sticky laptop:top-10 top-16
    laptop:p-0 p-4 laptop:mr-6 h-[450px]"
  >
    <div class="h-[450px] px-1 overflow-y-auto overflow-x-hidden">
      <PlacesSort />

      <FiltersRange />

      <FiltersRoomType />

      <FiltersPropertyType />

      <FiltersBedsAndRooms />

      <FiltersAmenities />
      <div class="ml-1 mb-10 mt-6 flex justify-between laptop:hidden ">
        <el-button aria-label="Apply filters" class="app-button" @click="applyFilters">Aplly filters</el-button>
        <el-button aria-label="Reset filters" class="app-button w-[93px] mr-4" @click="resetFilters">Reset</el-button>
      </div>
    </div>
    <div class="ml-1 mb-10 mt-6 hidden justify-between laptop:flex">
      <el-button aria-label="Apply filters" class="app-button" @click="applyFilters">Aplly filters</el-button>
      <el-button aria-label="Reset filters" class="app-button w-[93px] mr-4" @click="resetFilters">Reset</el-button>
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
const {
  startFiltered, endFiltered, url, placesFiltered, noPlaces, adaptiveFilters, noMoreFiltered
} = storeToRefs(placesStore)

function applyFilters () {
  placesFiltered.value.splice(0, placesFiltered.value.length)
  startFiltered.value = 0
  endFiltered.value = 19
  top.value?.scrollTo(0, 0)
  adaptiveFilters.value = false
  getFiltered(url.value, `${startFiltered.value}-${endFiltered.value}`)
  noMoreFiltered.value = false
}

function resetFilters () {
  top.value?.scrollTo(0, 0)
  adaptiveFilters.value = false
  placesFiltered.value.splice(0, placesFiltered.value.length)
  priceRange.value[0] = min.value
  priceRange.value[1] = max.value
  roomType.value = propertyType.value = ''
  amenities.value.essentials = amenities.value.features = amenities.value.location = amenities.value.safety = []
  bedrooms.value = beds.value = bathrooms.value = 0
  noPlaces.value = false
}

</script>
