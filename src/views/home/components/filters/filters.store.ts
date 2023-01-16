
export const useFiltersStore = defineStore('filterStore', () => {
  const filtersModalVisability = ref<boolean>(false)

  // min and max price from backend on store mounted
  const minPrice = 0
  const maxPrice = 5000

  const priceRange = ref([minPrice + 500, maxPrice - 500])

  const typeEntire = ref<boolean>(false)
  const typePrivate = ref<boolean>(false)

  const bedroms = ref(1)
  const beds = ref(1)
  const bathrooms = ref(1)

  const propertyType = ref(['House'])
  const propertyTypes = ['House', 'Apartment', 'Guesthouse', 'Hotel']

  return {
    filtersModalVisability,
    priceRange,
    minPrice,
    maxPrice,
    typeEntire,
    typePrivate,
    bedroms,
    beds,
    bathrooms,
    propertyType,
    propertyTypes

  }
})
