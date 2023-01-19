import type { RouteRecordRaw } from 'vue-router'

export const ordersRouteNames = {
  orders: 'orders'
}

export const ordersRoutes: Array<RouteRecordRaw> = [
  {
    path: 'orders',
    name: ordersRouteNames.orders,
    component: () => import('@/views/orders/orders.vue'),
    meta: { isAuthGuarded: true }
  }
]
