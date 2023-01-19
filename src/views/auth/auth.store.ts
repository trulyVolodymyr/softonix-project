import { routeNames, router } from '@/router'
export const useAuthStore = defineStore('authStore', () => {
  const accessToken = ref(localStorage.getItem('si-token'))
  const refreshToken = ref(localStorage.getItem('ref-token'))

  function setToken (token: string) {
    accessToken.value = token
    localStorage.setItem('si-token', token)
  }

  function setRefreshToken (token: string) {
    refreshToken.value = token
    localStorage.setItem('ref-token', token)
  }

  function login (payload: ILoginRequest) {
    return authService.login(payload)
      .then((res) => {
        setToken(res.access_token)
        setRefreshToken(res.refresh_token)
      })
  }

  function register (payload: ILoginRequest) {
    return authService.register(payload)
      .then((res) => {
        console.log(res)
      })
  }

  function logout () {
    accessToken.value = null
    refreshToken.value = null
    localStorage.removeItem('si-token')
    localStorage.removeItem('ref-token')

    window.location.href = router.resolve(routeNames.home).href

    ElNotification({
      title: 'You are logged out.',
      type: 'success',
      duration: 1000
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
