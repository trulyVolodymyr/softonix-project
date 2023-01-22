class PlaceItemService {
  getPlaceItem (id: string) {
    return useHttp.get(`https://pcdokqjfsewijuqgscrk.supabase.co/rest/v1/places?id=eq.${id}`)
  }
}

export const placeItemService = new PlaceItemService()
