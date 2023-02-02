<template>
  <div
    class="laptop:w-[250px] w-full shadow-2xl laptop:shadow-none mb-5 laptop:mb-0 laptop:sticky  laptop:top-[23px]
    laptop:p-0 laptop:mr-6 laptop:max-h-[65vh] absolute top-[-33px] z-50 bg-white p-0"
  >
    <div class="laptop:max-h-[65vh] overflow-y-auto overflow-x-hidden shadow-2xl p-3 max-h-[fit-content]">
      <div class="flex justify-end laptop:hidden">
        <button
          @click="adaptiveFilters =false"
        >
          &#9587;
        </button>
      </div>
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
      <el-button aria-label="Reset filters" class="app-button w-[93px]" @click="resetFilters">Reset</el-button>
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
  noMoreFiltered.value = false
}

</script>
