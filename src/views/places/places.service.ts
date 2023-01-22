class PlacesService {
  getChank (range: string) {
    return useHttp.get('https://pcdokqjfsewijuqgscrk.supabase.co/rest/v1/places', { headers: { Range: range } })
  }

  getLength () {
    return useHttp.get('https://pcdokqjfsewijuqgscrk.supabase.co/rest/v1/places?select=id')
  }

  getFiltered (http: string, range: string) {
    return useHttp.get(http, { headers: { Range: range } })
  }

  getFilteredLength (http: string) {
    return useHttp.get(http)
  }

  getPrice () {
    return useHttp.get('https://pcdokqjfsewijuqgscrk.supabase.co/rest/v1/places?select=pricing')
  }
}

export const placesService = new PlacesService()
