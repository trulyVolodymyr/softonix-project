import type { RouteRecordRaw } from 'vue-router'

import { routeNames } from './route-names'

import { authRoutes } from '@/views/auth/auth.routes'
import { homeRoutes } from '@/views/home/home.routes'
import { placeItemRoutes } from '@/views/place-item/place-item.routes'
import { ordersRoutes } from '@/views/orders/orders.routes'

import DefaultLayout from '@/layouts/DefaultLayout.vue'

const defaultLayoutRoutes: RouteRecordRaw = {
  path: '/',
  name: routeNames.rootPage,
  redirect: { name: routeNames.home },
  component: DefaultLayout,
  children: [
    ...homeRoutes,
    ...placeItemRoutes,
    ...ordersRoutes
  ]
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },

  authRoutes,
  defaultLayoutRoutes
]

export {
  routes,
  defaultLayoutRoutes
}
