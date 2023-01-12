import { router } from '@/router'
import { routeNames } from '@/router/route-names'

export const useAuthStore = defineStore('authStore', () => {
  const accessToken = ref(localStorage.getItem('si-token'))
  const refreshToken = ref(localStorage.getItem('ref-token'))

  function setToken (token: string) {
    console.log(token)
    accessToken.value = token
    localStorage.setItem('si-token', token)
  }

  function setRefreshToken (token: string) {
    console.log(token)
    refreshToken.value = token
    localStorage.setItem('ref-token', token)
  }

  function login (payload: ILoginRequest) {
    return authService.login(payload)
      .then((res) => {
        console.log(res)
        setToken(res.access_token)
        setRefreshToken(res.refresh_token)
      })
  }

  function logout () {
    localStorage.removeItem('si-token')
    window.location.href = router.resolve(routeNames.login).href
  }

  function register (payload: ILoginRequest) {
    return authService.register(payload)
      .then((res) => {
        console.log(res)
      })
  }

  return {
    accessToken,
    refreshToken,
    login,
    register,
    logout,
    setRefreshToken,
    setToken
  }
})
