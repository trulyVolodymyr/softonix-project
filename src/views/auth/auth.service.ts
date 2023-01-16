class AuthService {
  login (payload: ILoginRequest) {
    return useHttp.post('auth/v1/token?grant_type=password', payload)
  }

  register (payload: ILoginRequest) {
    return useHttp.post('auth/v1/signup', payload)
  }

  refreshToken (refreshToken: string) {
    return useHttp.post('auth/v1/token?grant_type=refresh_token', { refresh_token: refreshToken })
  }

  errorModal = () => {
    ElNotification({
      title: 'Something went wrong!',
      message: h('i', { style: 'color: black' }, 'Your authentication has failed. Please try again later.')
    })
  }
}

export const authService = new AuthService()
