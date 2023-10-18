import {
  CreateNewAccount,
  createNewPassword,
  LoginType,
  MeResponse,
} from '@/services/auth/authServise.types.ts'
import { baseApi } from '@/services/baseApi.ts'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<MeResponse, void>({
      async queryFn(_name, _api, _extraOptions, baseQuery) {
        const result = await baseQuery({
          url: `/v1/auth/me`,
          method: 'GET',
        })

        return { data: result.data as MeResponse }
      },
      providesTags: ['Auth'],
      extraOptions: { maxRetries: 1 },
    }),
    signUp: builder.mutation<any, CreateNewAccount>({
      query: ({ email, password }) => ({
        url: '/v1/auth/sign-up',
        method: 'POST',
        body: { email, password },
      }),
    }),
    login: builder.mutation<MeResponse, LoginType>({
      query: ({ email, password, rememberMe }) => ({
        url: '/v1/auth/login',
        method: 'POST',
        body: { email, password, rememberMe },
      }),
      invalidatesTags: ['Auth'],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/v1/auth/logout',
        method: 'POST',
        body: {},
      }),
      invalidatesTags: ['Auth'],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          authService.util.updateQueryData('getMe', undefined, () => {
            return {} as MeResponse
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
      query: ({ email }) => ({
        url: '/v1/auth/recover-password',
        method: 'POST',
        body: {
          email,
          html: `<h1>Hi, ##name##</h1><p>Click <a href="https://team-cards-h4mu.vercel.app/reset-password/##token##">here</a> to recover your password</p>`,
        },
      }),
    }),
    resetPassword: builder.mutation<void, { password: string; token?: string }>({
      query: ({ password, token }) => ({
        url: `/v1/auth/reset-password/${token}`,
        method: 'POST',
        body: { password },
      }),
    }),
    updateProfileInfo: builder.mutation<any, FormData>({
      query: FormData => ({
        url: '/v1/auth/me',
        method: 'PATCH',
        body: FormData,
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
})

export const {
  useGetMeQuery,
  useLoginMutation,
  useSignUpMutation,
  useLogoutMutation,
  useForgotPasswordEmailMutation,
  useResetPasswordMutation,
  useUpdateProfileInfoMutation,
} = authService
