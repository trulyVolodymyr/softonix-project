<template>
  <div
    class="w-[250px] shadow-2xl laptop:shadow-none mb-5 laptop:mb-0 sticky laptop:top-10 top-16
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

const { top } = storeToRefs(generalStore)
const { getFiltered } = usePlacesStore()
const {
  startFiltered, endFiltered, url, placesFiltered, noPlaces, adaptiveFilters, noMoreFiltered,
  min, max, allFilters
} = storeToRefs(placesStore)

function applyFilters () {
  placesFiltered.value = []
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
  placesFiltered.value = []
  allFilters.value.priceRange[0] = min.value
  allFilters.value.priceRange[1] = max.value
  allFilters.value.roomType = allFilters.value.propertyType = ''
  allFilters.value.essentials = allFilters.value.features = allFilters.value.location = allFilters.value.safety = []
  allFilters.value.bedrooms = allFilters.value.beds = allFilters.value.bathrooms = 0
  noPlaces.value = false
}

</script>
