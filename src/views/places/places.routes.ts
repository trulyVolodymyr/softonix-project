import type { RouteRecordRaw } from 'vue-router'

export const placesRouteNames = {
  places: 'places',
  place: 'place'

}

export const placesRoutes: Array<RouteRecordRaw> = [
  {
    path: 'places',
    name: placesRouteNames.places,
    component: () => import('./Places.vue')
  },
  {
    path: 'place/:id',
    name: placesRouteNames.place,
    component: () => import('@/views/places/components/place-item/PlaceItem.vue')
  }

]
