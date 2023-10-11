import { ForgotPassword } from '@/components/auth'
import { useForgotPasswordEmailMutation } from '@/services/auth/authService.ts'
import {useNavigate} from "react-router-dom";
import {useResponseWithToast} from "@/assets/hooks/useResponseWithToast.ts";



export const ForgotPasswordPage = () => {
  const [forgotPassword] = useForgotPasswordEmailMutation()
  const navigate = useNavigate()
  const responseWithToast = useResponseWithToast()
  const onSubmitHandler = async (email: string) => {
      let res = await responseWithToast(forgotPassword({email}))
      if(res?.success){
          return navigate(`/check-email/${email}`)
      }

  }

  return <ForgotPassword onSubmit={onSubmitHandler} />
}
