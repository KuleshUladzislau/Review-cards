import { useNavigate } from 'react-router-dom'

import { EditeProfile } from '@/components/auth'
import { Page } from '@/components/ui'
import { useGetMeQuery, useLogoutMutation } from '@/services/auth/authService.ts'

export const Profile = () => {
  const { data } = useGetMeQuery()
  const [logout] = useLogoutMutation()
  const navigate = useNavigate()

  const onLogoutHandler = () => {
    logout()
      .unwrap()
      .then(() => navigate('/login'))
  }

  return (
    <Page>
      <EditeProfile
        src={data?.avatar}
        name={data?.name}
        email={data?.email}
        onLogOut={onLogoutHandler}
      />
    </Page>
  )
}
