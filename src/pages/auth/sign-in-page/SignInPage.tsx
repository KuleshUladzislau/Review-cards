import { Navigate } from 'react-router-dom'

import { useGetMeQuery, useLoginMutation } from '@/services/auth/authService.ts'
import { SignIn } from '@/components/auth'
import { SignInValuesForm } from '@/components/auth/signIn/useSignInForm.ts'

export const SignInPage = () => {
  const [login] = useLoginMutation()

  const { data } = useGetMeQuery()

  const onSubmitHandler = (data: SignInValuesForm) => {
    login(data)
  }

  if (data) return <Navigate to={'/'} />

  return <SignIn onSubmit={onSubmitHandler} />
}
