const filtersStore = useFiltersStore()

const { max, min, priceRange, roomType, bedroms, beds, bathrooms, propertyType, amenities } = storeToRefs(filtersStore)
export const usePlacesStore = defineStore('placesStore', () => {
  const places = ref<IPlace[]>([])
  const placesFiltered = ref<IPlace[]>([])
  const maxlength = ref<number>(0)
  const startFiltered = ref<number>(0)
  const endFiltered = ref<number>(19)

  const url = computed(() => {
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

    return urlArr.join('')
  })

  const filteredLength = ref<number>(0)

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
    if (url.value.length !== 64) {
      return placesService.getFiltered(http, range)
        .then(data => {
          placesFiltered.value.push(...data)

          startFiltered.value += 20
          endFiltered.value += 20

          getFilteredLength(http.replace('*', 'id')).then(data => (filteredLength.value = data.length))
        })
    }
  }

  return {
    places,
    placesFiltered,
    getChank,
    getLength,
    getFiltered,
    getPrices,
    maxlength,
    startFiltered,
    endFiltered,
    url,
    filteredLength
  }
})
