import { baseApi } from '@/services/baseApi.ts'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<any, void>({
      query: () => '/v1/auth/me',
      providesTags: ['Auth'],
    }),
    signUp: builder.mutation<any, CreateNewAccount>({
      query: ({ email, password }) => ({
        url: '/v1/auth/sign-up',
        method: 'POST',
        body: { email, password },
      }),
    }),
    login: builder.mutation<ResponseCreateNewAccount, LoginType>({
      query: ({ email, password, rememberMe }) => ({
        url: '/v1/auth/login',
        method: 'POST',
        body: { email, password, rememberMe },
      }),
      invalidatesTags: ['Auth'],
    }),
    logout: builder.mutation<any, void>({
      query: () => ({
        url: '/v1/auth/logout',
        method: 'POST',
        body: {},
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
})

export const {
  useGetMeQuery,
  useLoginMutation,
  useSignUpMutation,
  useLogoutMutation
}
    = authService

type LoginType = {
  password: string
  email: string
  rememberMe: boolean
}

type CreateNewAccount = {
  email: string
  password: string
}
type ResponseCreateNewAccount = {
  avatar: string
  id: string
  email: string
  isEmailVerified: true
  name: string
  created: Date
  updated: Date
}
