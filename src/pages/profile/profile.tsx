import { useNavigate } from 'react-router-dom'

import { EditeProfile } from '@/components/auth'
import { Page } from '@/components/ui'
import { useGetMeQuery, useLogoutMutation } from '@/services/auth/authService.ts'
import { baseApi } from '@/services/baseApi.ts'

export const Profile = () => {
  const { data } = useGetMeQuery()
  const [logout] = useLogoutMutation()
  const navigate = useNavigate()
  const [uploadPhoto] = useUpdateToDataMutation()
  const changePhoto = (file: FormData) => {
    console.log(file)
    uploadPhoto(file)
  }
  const onLogoutHandler = () => {
    logout()
      .unwrap()
      .then(() => navigate('/login'))
  }

  return (
    <Page>
      <EditeProfile
        src={data.avatar}
        name={data.name}
        email={data.email}
        changePhoto={uploadPhoto}
        onLogOut={onLogoutHandler}
      />
    </Page>
  )
}

export const profileService = baseApi.injectEndpoints({
  endpoints: builder => ({
    updateToData: builder.mutation<any, FormData>({
      query: FormData => ({
        url: '/v1/auth/me',
        method: 'PATCH',
        body: FormData,
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
})

export const { useUpdateToDataMutation } = profileService
