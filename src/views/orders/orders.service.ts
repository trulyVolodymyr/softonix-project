class OrderService {
  getOrder (id: string | null) {
    return useHttp.get(`/rest/v1/orders?user_id=eq.${id}`)
  }
}

export const orderService = new OrderService()
