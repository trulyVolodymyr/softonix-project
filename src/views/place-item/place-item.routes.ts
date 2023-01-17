import type { RouteRecordRaw } from 'vue-router'

export const placeItemRouteNames = {
  placeItem: 'placeItem'

}

export const placeItemRoutes: Array<RouteRecordRaw> = [
  {
    path: 'placeItem',
    name: placeItemRouteNames.placeItem,
    component: () => import('@/views/place-item/PlaceItem.vue')
  }
]
