class PlaceItemService {
  getPlace (id: string) {
    return useHttp.get(`/rest/v1/places?id=eq.${id}`)
  }

  postOrder (payload: IOrder) {
    return useHttp.post('rest/v1/orders', payload)
  }

  postPlace (payload: IPostPlace) {
    return useHttp.post('/rest/v1/places?', payload)
  }

  patchPlace (id: number, payload: IPostPlace) {
    return useHttp.patch(`/rest/v1/places?id=eq.${id}`, payload)
  }

  deletePlace (id: number) {
    return useHttp.delete(`/rest/v1/places?id=eq.${id}`)
  }
}

export const placeItemService = new PlaceItemService()
