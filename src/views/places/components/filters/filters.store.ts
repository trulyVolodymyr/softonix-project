
export const useFiltersStore = defineStore('filterStore', () => {
  const filtersModalVisability = ref<boolean>(false)

  const min = ref<number>(0)
  const max = ref<number>(0)

  const priceRange = ref<number[]>([])

  const roomType = ref<string>('')

  const bedroms = ref<number>(0)
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
    filtersModalVisability,
    priceRange,
    roomType,
    bedroms,
    beds,
    bathrooms,
    propertyType,
    amenities,
    min,
    max
  }
})
