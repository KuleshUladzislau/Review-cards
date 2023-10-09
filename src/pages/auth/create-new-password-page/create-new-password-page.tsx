import { CreateNewPassword } from '@/components/auth'
import { useResetPasswordMutation } from '@/services/auth/authService.ts'
import {useParams} from "react-router-dom";

export const CreateNewPasswordPage = () => {
  const [createNewPassword] = useResetPasswordMutation()
  const token = useParams()
  console.log(token)

  const onsubmitHandler = (password: string) => {
    console.log(password)
  }

  return <CreateNewPassword onSubmit={onsubmitHandler} />
}
