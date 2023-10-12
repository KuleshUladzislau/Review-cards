import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export type createNewPasswordForm = z.infer<typeof createNewPasswordSchema>

const createNewPasswordSchema = z.object({
  password: z.string().min(6),
})

export const useCreateNewPassword = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<createNewPasswordForm>({
    resolver: zodResolver(createNewPasswordSchema),
    defaultValues: { password: '' },
  })

  return {
    handleSubmit,
    control,
    errors,
  }
}
