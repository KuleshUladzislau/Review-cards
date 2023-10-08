export type LoginType = {
  password: string
  email: string
  rememberMe: boolean
}

export type CreateNewAccount = {
  email: string
  password: string
}
export type ResponseCreateNewAccount = {
  avatar: string
  id: string
  email: string
  isEmailVerified: true
  name: string
  created: Date
  updated: Date
}
