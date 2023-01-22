import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { placesRouteNames } from '@/views/places/places.routes'

export const routeGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const { accessToken } = useAuthStore()

  if (to.meta.isAuthGuarded && !accessToken) {
    return next({ name: placesRouteNames.places })
  }
  next()
}
