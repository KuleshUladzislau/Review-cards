import {
  CreateNewAccount,
  createNewPassword,
  LoginType,
  ResponseCreateNewAccount,
} from '@/services/auth/authServise.types.ts'
import { baseApi } from '@/services/baseApi.ts'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<any, void>({
      async queryFn(_name, _api, _extraOptions, baseQuery) {
        const result = await baseQuery({
          url: `/v1/auth/me`,
          method: 'GET',
        })

        return { data: result.data }
      },
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
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          authService.util.updateQueryData('getMe', undefined, () => {
            return null
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
    }),
    forgotPasswordEmail: builder.mutation<void, createNewPassword>({
      query: () => ({
        url: '/v1/auth/recover-password',
        method: 'POST',
        body: {
          html: "<h1>Hi, ##name##</h1><p>Click <a href=\"##token##\">here</a> to recover your password</p>",
          email: "kulesh_uladzislau@mail.ru",
        },
      }),
    }),
  }),
})

export const {
  useGetMeQuery,
  useLoginMutation,
  useSignUpMutation,
  useLogoutMutation,
  useForgotPasswordEmailMutation,
} = authService
