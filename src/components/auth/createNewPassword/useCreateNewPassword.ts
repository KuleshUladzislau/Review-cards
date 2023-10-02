import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const createNewPasswordSchema = z.object({
  password: z.string().min(6),
})

type FormValue = z.infer<typeof createNewPasswordSchema>
export const useCreateNewPassword = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: zodResolver(createNewPasswordSchema),
    defaultValues: { password: '' },
  })

  return {
    handleSubmit,
    control,
    errors,
  }
}
