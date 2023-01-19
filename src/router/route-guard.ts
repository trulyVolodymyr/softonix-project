import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { homeRouteNames } from '@/views/home/home.routes'

export const routeGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const { accessToken } = useAuthStore()

  if (to.meta.isAuthGuarded && !accessToken) {
    return next({ name: homeRouteNames.home })
  }
  next()
}
