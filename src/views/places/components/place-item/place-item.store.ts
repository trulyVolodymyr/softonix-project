
export const usePlaceItemStore = defineStore('PlaceItemStore', () => {
  const place = ref<IPlace>()

  const guests = ref<IGuests>({
    adults: 1,
    children: 0,
    infants: 0
  })

  return {
    place,
    guests
  }
})
