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
    {{ vova }}
  </div>
</template>

<script lang='ts' setup>
const placesStore = usePlacesStore()
const filtersStore = useFiltersStore()

const { getFiltered } = usePlacesStore()
const { startFiltered, endFiltered, url, placesFiltered } = storeToRefs(placesStore)
const {
  max, min, priceRange, roomType, bedroms, beds, bathrooms, propertyType,
  filtersModalVisability, amenities
} = storeToRefs(filtersStore)

const vova = computed(() => {
  const urlArr = ['https://pcdokqjfsewijuqgscrk.supabase.co/rest/v1/places?select=*']

  /// pricing
  if (priceRange.value[0] !== min.value || priceRange.value[1] !== max.value) {
    urlArr.push(`&pricing=gt.${priceRange.value[0]}`)
    urlArr.push(`&pricing=lt.${priceRange.value[1]}`)
  }

  /// room type
  if (roomType.value) {
    urlArr.push(`&roomType=eq.${roomType.value}`)
  }

  /// bedrooms
  if (bedroms.value < 6 && bedroms.value !== 0) {
    urlArr.push(`&bedrooms=eq.${bedroms.value}`)
  }
  if (bedroms.value === 6) {
    urlArr.push(`&bedrooms=gt.${bedroms.value - 1}`)
  }

  /// beds
  if (beds.value < 6 && beds.value !== 0) {
    urlArr.push(`&beds=eq.${beds.value}`)
  }
  if (beds.value === 6) {
    urlArr.push(`&beds=gt.${beds.value - 1}`)
  }

  /// bathrooms
  if (bathrooms.value < 6 && bathrooms.value !== 0) {
    urlArr.push(`&bathrooms=eq.${bathrooms.value}`)
  }
  if (bathrooms.value === 6) {
    urlArr.push(`&bathrooms=gt.${bathrooms.value - 1}`)
  }

  /// property type
  if (propertyType.value) {
    urlArr.push(`&propertyType=eq.${propertyType.value.toLowerCase()}`)
  }

  /// amenities
  /// essentials
  if (amenities.value.essentials.length) {
    const addPlusToElems = computed(() => {
      return amenities.value.essentials.map((el: string) => el.replace(' ', '+'))
    })

    urlArr.push(`&essentials=ov.%7B${addPlusToElems.value.join('%2C')}%7D`)
  }
  /// features
  if (amenities.value.features.length) {
    const addPlusToElems = computed(() => {
      return amenities.value.features.map((el: string) => el.replace(' ', '+'))
    })

    urlArr.push(`&features=ov.%7B${addPlusToElems.value.join('%2C')}%7D`)
  }
  /// location
  if (amenities.value.location.length) {
    const addPlusToElems = computed(() => {
      return amenities.value.location.map((el: string) => el.replace(' ', '+'))
    })

    urlArr.push(`&amenities_location=ov.%7B${addPlusToElems.value.join('%2C')}%7D`)
  }
  /// safety
  if (amenities.value.safety.length) {
    const addPlusToElems = computed(() => {
      return amenities.value.safety.map((el: string) => el.replace(' ', '+'))
    })

    urlArr.push(`&safety=ov.%7B${addPlusToElems.value.join('%2C')}%7D`)
  }

  url.value = urlArr.join('')
})

function applyFilters () {
  placesFiltered.value.splice(0, placesFiltered.value.length)

  getFiltered(url.value, `${startFiltered.value}-${endFiltered.value}`)

  filtersModalVisability.value = false
}

onMounted(() => {
  startFiltered.value = 0
  endFiltered.value = 19
})
// https://pcdokqjfsewijuqgscrk.supabase.co/rest/v1/places?select=*&features=ov.%7BPool%7D&essentials=ov.%7BWifi%2CDryer%2CTV%2CHeating%2CDedicated+workspace%2CKitchen%2CAir+conditioning%2CDedicated+workspace%7D&pricing=gt.80000&pricing=lt.100000
</script>

<style lang='scss'>
.filter-item{
  @apply pb-4 mb-2 border-b-[1px] border-b-white
}
</style>
