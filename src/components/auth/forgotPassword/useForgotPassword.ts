import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const forgotPasswordSchema = z.object({
  email: z.string().email(),
})

type FormValue = z.infer<typeof forgotPasswordSchema>
export const useForgotPassword = () => {
  const { handleSubmit, control } = useForm<FormValue>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  })

  return { handleSubmit, control }
}
