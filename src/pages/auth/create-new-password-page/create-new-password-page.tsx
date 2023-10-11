import { CreateNewPassword } from '@/components/auth'
import { useResetPasswordMutation } from '@/services/auth/authService.ts'
import { useNavigate, useParams } from 'react-router-dom'
import { useResponseWithToast } from '@/assets/hooks/useResponseWithToast.ts'
import {Page} from "@/components/ui";

export const CreateNewPasswordPage = () => {
  const [createNewPassword] = useResetPasswordMutation()
  const params = useParams()
  const navigate = useNavigate()
  const responseWithToast = useResponseWithToast()

  const onsubmitHandler = async (password: string) => {
    let res = await responseWithToast(createNewPassword({ password, token: params?.token }))
    if (res?.success) {
      return navigate('/login')
    }
  }

  return (
     <Page>
        <CreateNewPassword onSubmit={onsubmitHandler}/>
     </Page>
  )
}
