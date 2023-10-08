import { ForgotPassword } from '@/components/auth'
import { useForgotPasswordEmailMutation} from '@/services/auth/authService.ts'

export const ForgotPasswordPage = () => {
  const [forgotPassword] = useForgotPasswordEmailMutation()
  const onSubmitHandler = (data: any) => {
    console.log(data)
    forgotPassword(data)
  }

  return <ForgotPassword onSubmit={onSubmitHandler} />
}
