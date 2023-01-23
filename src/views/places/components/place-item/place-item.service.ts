class PlaceItemService {
  getPlaceItem (id: string) {
    return useHttp.get(`/rest/v1/places?id=eq.${id}`)
  }

  setOrder (payload: IOrder) {
    return useHttp.post('rest/v1/orders', payload)
  }
}

export const placeItemService = new PlaceItemService()
