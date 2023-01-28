import { routeNames, router } from '@/router'
export const useAuthStore = defineStore('authStore', () => {
  const accessToken = ref(localStorage.getItem('si-token'))
  const refreshToken = ref(localStorage.getItem('ref-token'))
  const userId = ref(localStorage.getItem('user-id'))
  const userProfile = ref<IUserProfile>()

  function setToken (token: string) {
    accessToken.value = token
    localStorage.setItem('si-token', token)
  }

  function setRefreshToken (token: string) {
    refreshToken.value = token
    localStorage.setItem('ref-token', token)
  }
  function setUserId (id: string) {
    userId.value = id
    localStorage.setItem('user-id', id)
  }

  function login (payload: ILoginRequest) {
    return authService.login(payload)
      .then((res) => {
        setToken(res.access_token)
        setRefreshToken(res.refresh_token)
        setUserId(res.user.id)

        setUserProfile()
        return res
      })
  }

  function setUserProfile () {
    return authService.getUserProfile(userId.value)
      .then(data => {
        userProfile.value = data[0]
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
    userId.value = null
    localStorage.removeItem('si-token')
    localStorage.removeItem('ref-token')
    localStorage.removeItem('user-id')

    router.push({ name: routeNames.places })

    ElNotification({
      title: 'You are logged out.',
      type: 'success',
      duration: 1000
    })
  }

  return {
    accessToken,
    refreshToken,
    userId,
    userProfile,
    login,
    register,
    logout,
    setRefreshToken,
    setToken,
    setUserProfile,
    setUserId
  }
})
