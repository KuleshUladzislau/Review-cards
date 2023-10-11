import { SignUp } from '@/components/auth/signUp/signUp.tsx'
import { SignUpData } from '@/components/auth/signUp/useSignUp.ts'
import { useSignUpMutation } from '@/services/auth/authService.ts'
import {useNavigate} from "react-router-dom";
import {useResponseWithToast} from "@/assets/hooks/useResponseWithToast.ts";


export const SignUpPage = () => {
  const [signUp] = useSignUpMutation()
  const navigate = useNavigate()
  const toastHook = useResponseWithToast()

  const onSubmitHandler = async ({ password, email }: SignUpData) => {
       let res = await toastHook(signUp({ password, email }))
      if(res?.success){
          navigate('/login')
      }
  }

  return <SignUp onSubmit={onSubmitHandler} />
}
