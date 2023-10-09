import { ForgotPassword } from '@/components/auth'
import { useForgotPasswordEmailMutation } from '@/services/auth/authService.ts'

export const ForgotPasswordPage = () => {
  const [forgotPassword] = useForgotPasswordEmailMutation()
  const onSubmitHandler = async (email: string) => {
    let res = await forgotPassword({ email })

    console.log(res)
  }

  return <ForgotPassword onSubmit={onSubmitHandler} />
}
