import type { RouteRecordRaw } from 'vue-router'

export const homeRouteNames = {
  home: 'home'

}

export const homeRoutes: Array<RouteRecordRaw> = [
  {
    path: 'home',
    name: homeRouteNames.home,
    component: () => import('./Home.vue')

  }
]
