
export const usePlaceItemStore = defineStore('PlaceItemStore', () => {
  const place = ref<IPlace>()
  const edit = ref<boolean>(false)
  const create = ref<boolean>(false)
  const deliteDialogVisability = ref<boolean>(false)

  const guests = ref<IGuests>({
    adults: 1,
    children: 0,
    infants: 0
  })

  return {
    place,
    guests,
    edit,
    create,
    deliteDialogVisability
  }
})
