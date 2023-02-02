import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { placesRouteNames } from '@/views/places/places.routes'

export const routeGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const { accessToken, userId, userProfile, setUserProfile } = useAuthStore()

  if (to.meta.isAuthGuarded && !accessToken) {
    return next({ name: placesRouteNames.places })
  }

  if (accessToken && userId && !userProfile) {
    await setUserProfile()
  }

  if (to.meta.isCreateGuarded && !userProfile?.is_admin) {
    return next({ name: placesRouteNames.places })
  }

  next()
}
