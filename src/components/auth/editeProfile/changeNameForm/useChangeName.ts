import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const nameValidation = z.object({
  profileName: z.string().min(3, 'the name must be more than 3 letters'),
})

export type ChangeNameValidation = z.infer<typeof nameValidation>
export const useChangeName = (name: string | undefined) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm<ChangeNameValidation>({
    resolver: zodResolver(nameValidation),
    defaultValues: { profileName: name },
  })

  return {
    handleSubmit,
    setError,
    control,
    errors,
  }
}
