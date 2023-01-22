
export const usePlaceItemStore = defineStore('PlaceItemStore', () => {
  const place = ref<IPlace>()

  const guests = ref<IGuests>({
    adults: 1,
    children: 0,
    infants: 0
  })

  const dates = ref('')

  const numberOfDays = computed(() => {
    if (dates.value) {
      return (new Date(dates.value[1]).getTime() - new Date(dates.value[0]).getTime()) / 1000 / 60 / 60 / 24
    }
  })

  return {
    place,
    guests,
    dates,
    numberOfDays
  }
})
