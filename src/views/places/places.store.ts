export const usePlacesStore = defineStore('placesStore', () => {
  const places = ref<IPlace[]>([])
  const placesFiltered = ref<IPlace[]>([])
  const maxlength = ref<number>(0)
  const startFiltered = ref<number>(0)
  const endFiltered = ref<number>(19)
  const url = ref('')
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

          getFilteredLength(http).then(data => (filteredLength.value = data.length))
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
