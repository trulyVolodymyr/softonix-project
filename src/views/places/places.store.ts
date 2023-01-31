
const generalStore = useGeneralStore()
const { loading } = storeToRefs(generalStore)

export const usePlacesStore = defineStore('placesStore', () => {
  const places = ref<IPlace[]>([])
  const placesFiltered = ref<IPlace[]>([])
  const maxlength = ref<number>(0)
  const startFiltered = ref<number>(0)
  const endFiltered = ref<number>(19)
  const noPlaces = ref<boolean>(false)
  const start = ref<number>(0)
  const end = ref<number>(19)
  const priceSort = ref<string>('none')
  const adaptiveFilters = ref<boolean>(false)
  const noMoreFiltered = ref<boolean>(false)
  const min = ref<number>(0)
  const max = ref<number>(0)

  const addedPlacesPerLoad = 20
  const baseFilterUrl = `${import.meta.env.VITE_API_URL}/rest/v1/places?select=*`

  const allFilters = reactive<IFilters>({
    priceRange: [],
    roomType: '',
    propertyType: '',
    beds: 0,
    bedrooms: 0,
    bathrooms: 0,
    essentials: [],
    features: [],
    location: [],
    safety: []
  })

  const placesShowed = computed(() => {
    if (placesFiltered.value.length) {
      return placesFiltered.value
    }
    return places.value
  })

  const url = computed(() => {
    const filters: IFiltersItem[] = [
      {
        getQueryWithValue ({ bedrooms }) {
          const queryName = '&bedrooms'
          const modifier = bedrooms < 6 ? '=eq.' : '=gte.'

          if (bedrooms === 0) return ''

          return `${queryName}${modifier}${bedrooms}`
        }
      },

      {
        getQueryWithValue ({ beds }) {
          const queryName = '&beds'
          const modifier = beds < 6 ? '=eq.' : '=gte.'

          if (beds === 0) return ''

          return `${queryName}${modifier}${beds}`
        }
      },

      {
        getQueryWithValue ({ bathrooms }) {
          const queryName = '&bathrooms'
          const modifier = bathrooms < 6 ? '=eq.' : '=gte.'

          if (bathrooms === 0) return ''

          return `${queryName}${modifier}${bathrooms}`
        }
      },

      {
        getQueryWithValue ({ roomType }) {
          const queryName = '&roomType'
          const modifier = roomType ? '=eq.' : ''
          if (!roomType) return ''

          return `${queryName}${modifier}${roomType}`
        }
      },

      {
        getQueryWithValue ({ propertyType }) {
          const queryName = '&propertyType'
          const modifier = propertyType ? '=eq.' : ''

          if (!propertyType) return ''

          return `${queryName}${modifier}${propertyType}`
        }
      },

      {
        getQueryWithValue ({ priceRange }) {
          const queryName = '&pricing'
          const modifier = priceRange[0] ? '=gt.' : ''

          if (priceRange[0] === min.value) return ''

          return `${queryName}${modifier}${priceRange[0]}`
        }
      },

      {
        getQueryWithValue ({ priceRange }) {
          const queryName = '&pricing'
          const modifier = priceRange[1] ? '=lt.' : ''

          if (priceRange[1] === max.value) return ''

          return `${queryName}${modifier}${priceRange[1]}`
        }
      },

      {
        getQueryWithValue ({ essentials }) {
          const queryName = '&essentials'
          const modifier = essentials.length ? '=ov.' : ''

          if (!essentials.length) return ''

          const addPlusToElems = allFilters.essentials.map((el: string) => el.replace(' ', '+'))

          return `${queryName}${modifier}%7B${addPlusToElems.join('%2C')}%7D`
        }
      },

      {
        getQueryWithValue ({ features }) {
          const queryName = '&features'
          const modifier = features.length ? '=ov.' : ''

          if (!features.length) return ''

          const addPlusToElems = allFilters.features.map((el: string) => el.replace(' ', '+'))

          return `${queryName}${modifier}%7B${addPlusToElems.join('%2C')}%7D`
        }
      },

      {
        getQueryWithValue ({ location }) {
          const queryName = '&amenities_location'
          const modifier = location.length ? '=ov.' : ''

          if (!location.length) return ''

          const addPlusToElems = allFilters.location.map((el: string) => el.replace(' ', '+'))

          return `${queryName}${modifier}%7B${addPlusToElems.join('%2C')}%7D`
        }
      },

      {
        getQueryWithValue ({ safety }) {
          const queryName = '&safety'
          const modifier = safety.length ? '=ov.' : ''

          if (!safety.length) return ''

          const addPlusToElems = allFilters.safety.map((el: string) => el.replace(' ', '+'))

          return `${queryName}${modifier}%7B${addPlusToElems.join('%2C')}%7D`
        }
      }
    ]

    const finalUrl = filters.reduce((acc, { getQueryWithValue }) => {
      return acc + getQueryWithValue(allFilters)
    }, baseFilterUrl)

    return finalUrl
  })

  function getChank (range: string) {
    return placesService.getChank(range)
  }

  function getLength () {
    return placesService.getLength()
  }

  function getPrices () {
    return placesService.getPrice()
  }

  function getFiltered (http: string, range: string) {
    noPlaces.value = false

    if (url.value !== baseFilterUrl) {
      loading.value = true

      return placesService.getFiltered(http, range)
        .then(data => {
          if (!data.length) {
            noMoreFiltered.value = true
          }

          placesFiltered.value.push(...data)

          loading.value = false

          if (!placesFiltered.value.length) {
            noPlaces.value = true
          }
        })
        .finally(() => {
          startFiltered.value += addedPlacesPerLoad
          endFiltered.value += addedPlacesPerLoad
        })
    }
  }

  function sortByName () {
    if (priceSort.value === 'greaterToLower') {
      placesShowed.value.sort((a, b) => b.pricing - a.pricing)
    }
    if (priceSort.value === 'lowerToGreater') {
      placesShowed.value.sort((a, b) => a.pricing - b.pricing)
    }
  }

  return {
    getChank,
    getLength,
    getFiltered,
    getPrices,
    sortByName,
    places,
    placesFiltered,
    maxlength,
    startFiltered,
    endFiltered,
    url,
    noPlaces,
    start,
    end,
    priceSort,
    placesShowed,
    adaptiveFilters,
    noMoreFiltered,
    min,
    max,
    allFilters,
    addedPlacesPerLoad
  }
})
