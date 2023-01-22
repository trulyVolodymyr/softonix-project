
export const useFiltersStore = defineStore('filterStore', () => {
  const filtersModalVisability = ref<boolean>(false)

  const min = ref<number>(0)
  const max = ref<number>(0)

  const priceRange = ref<number[]>([])

  const typeEntire = ref<boolean>(false)
  const typePrivate = ref<boolean>(false)
  const typeShared = ref<boolean>(false)

  const bedroms = ref(1)
  const beds = ref(1)
  const bathrooms = ref(1)

  const propertyType = ref(['House'])
  const propertyTypes = ['House', 'Apartment', 'Guesthouse', 'Hotel']

  const amenities = ref({
    essentials: {
      wifi: false,
      washer: false,
      airConditioning: false,
      dedicatedWorkspace: false,
      hairDryer: false,
      kitchen: false,
      dryer: false,
      heating: false,
      tv: false,
      iron: false
    },
    features: {
      pool: false,
      freeParking: false,
      crib: false,
      bbqGrill: false,
      indoorFireplace: false,
      hotTub: false,
      evCharger: false,
      gym: false,
      breakfast: false,
      smokingAllowed: false
    },
    location: {
      beachfront: false,
      waterfront: false,
      skiOut: false
    },
    safety: {
      smokeAlarm: false,
      carbonMonoxideAlarm: false
    }

  })

  return {
    filtersModalVisability,
    priceRange,
    typeEntire,
    typePrivate,
    bedroms,
    beds,
    bathrooms,
    propertyType,
    propertyTypes,
    amenities,
    typeShared,
    min,
    max

  }
})
