import { placesRouteNames } from '@/views/places/places.routes'
import { authRouteNames } from '@/views/auth/auth.routes'
import { ordersRouteNames } from '@/views/orders/orders.routes'

export const routeNames = {
  rootPage: 'rootPage',

  ...placesRouteNames,
  ...authRouteNames,
  ...ordersRouteNames

}
