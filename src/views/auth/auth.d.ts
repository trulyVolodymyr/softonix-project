interface IAuthForm {
  email: string
  password: string
}
interface ILoginRequest {
  email: string
  password: string
}
interface IUserProfile{
  id: string
  updated_at: null
  username: null
  full_name: null
  is_admin: boolean|null
  email: string
}
