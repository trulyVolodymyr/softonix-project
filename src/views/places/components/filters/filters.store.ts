
export const useFiltersStore = defineStore('filterStore', () => {
  const min = ref<number>(0)
  const max = ref<number>(0)

  const priceRange = ref<number[]>([])

  const roomType = ref<string>('')

  const bedrooms = ref<number>(0)
  const beds = ref<number>(0)
  const bathrooms = ref<number>(0)

  const propertyType = ref<string>('')

  const amenities = ref({
    essentials: [],
    features: [],
    location: [],
    safety: []

  })

  return {
    priceRange,
    roomType,
    bedrooms,
    beds,
    bathrooms,
    propertyType,
    amenities,
    min,
    max
  }
})
