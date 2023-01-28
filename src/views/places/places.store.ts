const filtersStore = useFiltersStore()
const { max, min, priceRange, roomType, bedrooms, beds, bathrooms, propertyType, amenities } = storeToRefs(filtersStore)
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
  const priceSort = ref<number>(0)
  const filteredLength = ref<number>(0)

  const placesShowed = computed(() => {
    if (placesFiltered.value.length) {
      return placesFiltered.value
    }
    return places.value
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
  function getFilteredLength (http: string) {
    return placesService.getFilteredLength(http)
  }

  function getFiltered (http: string, range: string) {
    noPlaces.value = false

    if (url.value.length !== 64) {
      loading.value = true
      return placesService.getFiltered(http, range)
        .then(data => {
          placesFiltered.value.push(...data)
          loading.value = false
          if (!placesFiltered.value.length) {
            noPlaces.value = true
          }

          getFilteredLength(http.replace('*', 'id')).then(data => (filteredLength.value = data.length))
        }).finally(() => {
          startFiltered.value += 20
          endFiltered.value += 20
        })
    }
  }
  function sortByName () {
    if (priceSort.value === 1) {
      placesShowed.value.sort((a, b) => b.pricing - a.pricing)
    }
    if (priceSort.value === 2) {
      placesShowed.value.sort((a, b) => a.pricing - b.pricing)
    }
  }

  return {
    getChank,
    getLength,
    getFiltered,
    getPrices,
    places,
    placesFiltered,
    maxlength,
    startFiltered,
    endFiltered,
    url,
    filteredLength,
    noPlaces,
    start,
    end,
    priceSort,
    placesShowed,
    sortByName
  }
})
