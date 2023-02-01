import type { RouteRecordRaw } from 'vue-router'

export const placesRouteNames = {
  places: 'places',
  place: 'place',
  placeEdit: 'placeEdit',
  placeCreate: 'placeCreate'

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
  },
  {
    path: 'place/:id/edit',
    name: placesRouteNames.placeEdit,
    component: () => import('@/views/places/components/place-item/PlaceEdit.vue')
  },
  {
    path: 'place/create',
    name: placesRouteNames.placeCreate,
    component: () => import('@/views/places/components/place-item/PlaceCreate.vue')
  }

]
