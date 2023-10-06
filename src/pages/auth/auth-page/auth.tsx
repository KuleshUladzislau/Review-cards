import { useNavigate } from 'react-router-dom'

import { SignIn } from '@/components/auth/signIn'
import { SignInValuesForm } from '@/components/auth/signIn/useSignInForm.ts'
import {useGetMeQuery, useLoginMutation} from '@/services/auth/authService.ts'
import {Header} from "@/components/ui/header";

export const Auth = () => {
  const {data:me} = useGetMeQuery()
  const [login, { isError, isSuccess }] = useLoginMutation()
  const navigate = useNavigate()
  const onSubmitHandler = (data: SignInValuesForm) => {
    login(data)
  }

  if (me) {
     return navigate('/')
  }

  return (
    <div>
      <Header/>
      <SignIn onSubmit={onSubmitHandler} />
      <div>{isError && 'invalid email or password'}</div>
    </div>
  )
}
