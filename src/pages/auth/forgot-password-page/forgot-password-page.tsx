import { ForgotPassword } from '@/components/auth'
import { useForgotPasswordEmailMutation } from '@/services/auth/authService.ts'


export const ForgotPasswordPage = () => {
  const [forgotPassword] = useForgotPasswordEmailMutation()
  const onSubmitHandler =  (email: string) => {
    forgotPassword({ email })


  }

  return <ForgotPassword onSubmit={onSubmitHandler} />
}
