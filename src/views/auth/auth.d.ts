interface IAuthForm {
  email: string
  password: string
}

interface ILoginRequest {
  email: string
  password: string
}

interface IUserProfile {
  email: string
  full_name: null
  id: string
  is_admin: boolean | null
  updated_at: null
  username: null
}
