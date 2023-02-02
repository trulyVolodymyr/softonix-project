class AuthService {
  login (payload: ILoginRequest) {
    return useHttp.post('auth/v1/token?grant_type=password', payload)
  }

  register (payload: ILoginRequest) {
    return useHttp.post('auth/v1/signup?', payload, { params: { redirect_to: window.location.origin + '/auth/login' } })
  }

  refreshToken (refreshToken: string) {
    return useHttp.post('auth/v1/token?grant_type=refresh_token', { refresh_token: refreshToken })
  }

  getUserProfile (id: string | null) {
    return useHttp.get(`/rest/v1/profiles?select=*&id=eq.${id}`)
  }
}

export const authService = new AuthService()
