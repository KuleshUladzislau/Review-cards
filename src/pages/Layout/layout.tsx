import { Outlet, useNavigate } from 'react-router-dom'

import s from './layout.module.scss'

import { Toast } from '@/components/ui'
import { Header } from '@/components/ui/header'
import { useGetMeQuery, useLogoutMutation } from '@/services/auth/authService.ts'

export const Layout = () => {
  const { data } = useGetMeQuery()

  const navigate = useNavigate()
  const [logout] = useLogoutMutation()

  const onLogoutHandler = () => {
    logout()
      .unwrap()
      .then(() => navigate('/login'))
  }

  return (
    <>
      <Header
        isLoggedIn={!!data}
        logout={onLogoutHandler}
        email={data?.email}
        userName={data?.name}
        userPhoto={data?.avatar}
      />
      <div className={s.container}>
        <Outlet />
        <Toast />
      </div>
    </>
  )
}
