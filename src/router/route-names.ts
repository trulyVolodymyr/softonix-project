import { homeRouteNames } from '@/views/home/home.routes'
import { authRouteNames } from '@/views/auth/auth.routes'
import { placeItemRouteNames } from '@/views/place-item/place-item.routes'
import { ordersRouteNames } from '@/views/orders/orders.routes'

export const routeNames = {
  rootPage: 'rootPage',

  ...homeRouteNames,
  ...authRouteNames,
  ...placeItemRouteNames,
  ...ordersRouteNames

}
