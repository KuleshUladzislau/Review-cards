import { CreateNewPassword } from '@/components/auth'
import { useResetPasswordMutation } from '@/services/auth/authService.ts'
import {useParams} from "react-router-dom";


export const CreateNewPasswordPage = () => {
  const [createNewPassword] = useResetPasswordMutation()
  const params = useParams()


  const onsubmitHandler = (password: string) => {
    console.log(password, params?.token)
    createNewPassword({ password, token: params?.token })
  }

  return <CreateNewPassword onSubmit={onsubmitHandler} />
}
