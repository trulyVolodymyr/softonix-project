
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

  const placesShowed = computed(() => {
    if (placesFiltered.value.length) {
      return placesFiltered.value
    }
    return places.value
  })

  const url1 = computed(() => {
    const filters = [
      {
        queryName: '&bedrooms',
        model: bedrooms.value,
        getModifier (bedrooms: any) {
          return bedrooms < 6 ? '=eq.' : '=gte.'
        },
        getQueryWithValue (bedrooms: any) {
          if (bedrooms === 0) return ''

          return `${this.queryName}${this.getModifier(bedrooms)}${bedrooms}`
        }

      },

      {
        queryName: '&beds',
        model: beds.value,
        getModifier (beds: any) {
          return beds < 6 ? '=eq.' : '=gte.'
        },
        getQueryWithValue (beds: any) {
          if (beds === 0) return ''

          return `${this.queryName}${this.getModifier(beds)}${beds}`
        }
      },

      {
        queryName: '&bathrooms',
        model: bathrooms.value,
        getModifier (bathrooms: any) {
          return bathrooms < 6 ? '=eq.' : '=gte.'
        },
        getQueryWithValue (bathrooms: any) {
          if (bathrooms === 0) return ''

          return `${this.queryName}${this.getModifier(bathrooms)}${bathrooms}`
        }
      },

      {
        queryName: '&roomType',
        model: roomType.value,
        getModifier (roomType: any) {
          return roomType ? '=eq.' : ''
        },
        getQueryWithValue (roomType: any) {
          if (!roomType) return ''

          return `${this.queryName}${this.getModifier(roomType)}${roomType}`
        }
      },

      {
        queryName: '&propertyType',
        model: propertyType.value,
        getModifier (propertyType: any) {
          return propertyType ? '=eq.' : ''
        },
        getQueryWithValue (propertyType: any) {
          if (!propertyType) return ''

          return `${this.queryName}${this.getModifier(propertyType)}${propertyType}`
        }
      },

      {
        queryName: '&pricing',
        model: priceRange.value[0],
        getModifier (priceRange: any) {
          return priceRange ? '=gt.' : ''
        },
        getQueryWithValue (priceRange: any) {
          if (priceRange === min.value) return ''

          return `${this.queryName}${this.getModifier(roomType)}${priceRange}`
        }
      },

      {
        queryName: '&pricing',
        model: priceRange.value[1],
        getModifier (priceRange: any) {
          return priceRange ? '=lt.' : ''
        },
        getQueryWithValue (priceRange: any) {
          if (priceRange === max.value) return ''

          return `${this.queryName}${this.getModifier(roomType)}${priceRange}`
        }
      },

      {
        queryName: '&essentials',
        model: amenities.value.essentials,
        getModifier (essentials: any) {
          return essentials.length ? '=ov.' : ''
        },
        getQueryWithValue (essentials: any) {
          if (!essentials.length) return ''

          const addPlusToElems = amenities.value.essentials.map((el: string) => el.replace(' ', '+'))

          return `${this.queryName}${this.getModifier(essentials)}%7B${addPlusToElems.join('%2C')}%7D`
        }
      },

      {
        queryName: '&features',
        model: amenities.value.features,
        getModifier (features: any) {
          return features.length ? '=ov.' : ''
        },
        getQueryWithValue (features: any) {
          if (!features.length) return ''

          const addPlusToElems = amenities.value.features.map((el: string) => el.replace(' ', '+'))

          return `${this.queryName}${this.getModifier(features)}%7B${addPlusToElems.join('%2C')}%7D`
        }
      },
      {
        queryName: '&amenities_location',
        model: amenities.value.location,
        getModifier (location: any) {
          return location.length ? '=ov.' : ''
        },
        getQueryWithValue (location: any) {
          if (!location.length) return ''

          const addPlusToElems = amenities.value.location.map((el: string) => el.replace(' ', '+'))

          return `${this.queryName}${this.getModifier(location)}%7B${addPlusToElems.join('%2C')}%7D`
        }
      },

      {
        queryName: '&safety',
        model: amenities.value.safety,
        getModifier (safety: any) {
          return safety.length ? '=ov.' : ''
        },
        getQueryWithValue (safety: any) {
          if (!safety.length) return ''

          const addPlusToElems = amenities.value.safety.map((el: string) => el.replace(' ', '+'))

          return `${this.queryName}${this.getModifier(safety)}%7B${addPlusToElems.join('%2C')}%7D`
        }
      }

    ]

    const finalUrl = filters.reduce((acc, el) => {
      return acc + el.getQueryWithValue(el.model)
    }, `${import.meta.env.VITE_API_URL}/rest/v1/places?select=*`)

    return finalUrl
  })

  const url = computed(() => {
    let urlArr = `${import.meta.env.VITE_API_URL}/rest/v1/places?select=*`

    /// pricing
    if (priceRange.value[0] !== min.value || priceRange.value[1] !== max.value) {
      urlArr += `&pricing=gt.${priceRange.value[0]}`
      urlArr += `&pricing=lt.${priceRange.value[1]}`
    }

    /// room type
    if (roomType.value) {
      urlArr += `&roomType=eq.${roomType.value}`
    }

    /// bedrooms
    if (bedrooms.value < 6 && bedrooms.value !== 0) {
      urlArr += `&bedrooms=eq.${bedrooms.value}`
    }
    if (bedrooms.value === 6) {
      urlArr += `&bedrooms=gt.${bedrooms.value - 1}`
    }

    /// beds
    if (beds.value < 6 && beds.value !== 0) {
      urlArr += `&beds=eq.${beds.value}`
    }
    if (beds.value === 6) {
      urlArr += `&beds=gt.${beds.value - 1}`
    }

    /// bathrooms
    if (bathrooms.value < 6 && bathrooms.value !== 0) {
      urlArr += `&bathrooms=eq.${bathrooms.value}`
    }
    if (bathrooms.value === 6) {
      urlArr += `&bathrooms=gt.${bathrooms.value - 1}`
    }

    /// property type
    if (propertyType.value) {
      urlArr += `&propertyType=eq.${propertyType.value.toLowerCase()}`
    }

    /// amenities
    /// essentials
    if (amenities.value.essentials.length) {
      const addPlusToElems = computed(() => {
        return amenities.value.essentials.map((el: string) => el.replace(' ', '+'))
      })

      urlArr += `&essentials=ov.%7B${addPlusToElems.value.join('%2C')}%7D`
    }
    /// features
    if (amenities.value.features.length) {
      const addPlusToElems = computed(() => {
        return amenities.value.features.map((el: string) => el.replace(' ', '+'))
      })

      urlArr += `&features=ov.%7B${addPlusToElems.value.join('%2C')}%7D`
    }
    /// location
    if (amenities.value.location.length) {
      const addPlusToElems = computed(() => {
        return amenities.value.location.map((el: string) => el.replace(' ', '+'))
      })

      urlArr += `&amenities_location=ov.%7B${addPlusToElems.value.join('%2C')}%7D`
    }
    /// safety
    if (amenities.value.safety.length) {
      const addPlusToElems = computed(() => {
        return amenities.value.safety.map((el: string) => el.replace(' ', '+'))
      })

      urlArr += `&safety=ov.%7B${addPlusToElems.value.join('%2C')}%7D`
    }

    return urlArr
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

    if (url.value.length !== 64) {
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
          startFiltered.value += 20
          endFiltered.value += 20
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
    priceRange,
    roomType,
    bedrooms,
    beds,
    bathrooms,
    propertyType,
    amenities,
    min,
    max,
    url1
  }
})
