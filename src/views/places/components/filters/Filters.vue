<template>
  <div>
    <FiltersRange />

    <FiltersRoomType />

    <FiltersPropertyType />

    <FiltersBedsAndRooms />

    <FiltersAmenities />

    <el-button
      class="app-button border-[1px] mt-3 border-white hover:border-[1px] hover:border-black"
      @click="applyFilters"
    >
      Aplly filters
    </el-button>
  </div>
</template>

<script lang='ts' setup>
const placesStore = usePlacesStore()
const generalStore = useGeneralStore()
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

</script>
