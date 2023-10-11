import { Navigate } from 'react-router-dom'


import { SignIn } from '@/components/auth'
import { SignInValuesForm } from '@/components/auth/signIn/useSignInForm.ts'
import { useGetMeQuery, useLoginMutation } from '@/services/auth/authService.ts'
import 'react-toastify/dist/ReactToastify.css';
import {useResponseWithToast} from "@/assets/hooks/useResponseWithToast.ts";

export const SignInPage = () => {
  const [login] = useLoginMutation()

  const { data } = useGetMeQuery()
  const toastHook = useResponseWithToast()

  const onSubmitHandler = async (data: SignInValuesForm) => {
    await toastHook(login(data),'invalid email or password')
  }

  if (data) return <Navigate to={'/'} />

  return (
    <>
      <SignIn onSubmit={onSubmitHandler} />
    </>
  )
}
