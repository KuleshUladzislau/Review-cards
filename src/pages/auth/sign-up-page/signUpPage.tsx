import { SignUp } from '@/components/auth/signUp/signUp.tsx'
import { SignUpData } from '@/components/auth/signUp/useSignUp.ts'
import { useSignUpMutation } from '@/services/auth/authService.ts'


export const SignUpPage = () => {
  const [signUp] = useSignUpMutation()

  const onSubmitHandler =    ({ password, email }: SignUpData) => {
       signUp({ password, email })
  }

  return <SignUp onSubmit={onSubmitHandler} />
}
