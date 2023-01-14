export const useAuthStore = defineStore('authStore', () => {
  const accessToken = ref(localStorage.getItem('si-token'))
  const refreshToken = ref(localStorage.getItem('ref-token'))
  const error = ref(false)

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
      }).catch(() => {
        error.value = true
      })
  }

  function register (payload: ILoginRequest) {
    return authService.register(payload)
      .then((res) => {
        console.log(res)
      }).catch(() => {
        error.value = true
      })
  }

  function logout () {
    accessToken.value = null
    refreshToken.value = null
    localStorage.removeItem('si-token')
    localStorage.removeItem('ref-token')
  }

  return {
    accessToken,
    refreshToken,
    error,
    login,
    register,
    logout,
    setRefreshToken,
    setToken
  }
})
