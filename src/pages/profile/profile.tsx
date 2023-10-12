import { useNavigate } from 'react-router-dom'

import { EditeProfile } from '@/components/auth'
import { Page } from '@/components/ui'
import { useGetMeQuery, useLogoutMutation } from '@/services/auth/authService.ts'
import { baseApi } from '@/services/baseApi.ts'

export const Profile = () => {
  const { data } = useGetMeQuery()
  const [logout] = useLogoutMutation()
  const navigate = useNavigate()
  const changePhoto = (photo: string | ArrayBuffer) => {
    useUpdateToDataMutation({ avatar: photo, email: data.email, name: data.name })
  }
  const onLogoutHandler = () => {
    logout()
      .unwrap()
      .then(() => navigate('/login'))
  }

  return (
    <Page>
      <EditeProfile
        src={data.src}
        name={data.name}
        email={data.email}
        changePhoto={changePhoto}
        onLogOut={onLogoutHandler}
      />
    </Page>
  )
}

export const profileService = baseApi.injectEndpoints({
  endpoints: builder => ({
    updateToData: builder.mutation<any, any>({
      query: ({ avatar, name, email }) => ({
        url: '/v1/auth/me',
        method: 'PATCH',
        body: { avatar, name, email },
        headers: { 'Content-Type': 'multipart/form-data' },
      }),
    }),
  }),
})

export const { useUpdateToDataMutation } = profileService
