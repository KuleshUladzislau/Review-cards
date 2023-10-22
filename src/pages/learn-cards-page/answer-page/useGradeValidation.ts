import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export type GradeAnswerType = z.infer<typeof gradeAnswerSchema>

const gradeAnswerSchema = z.object({
  grade: z.string().nonempty(),
})
export const useGradeValidation = () => {
  const { control, handleSubmit } = useForm<GradeAnswerType>({
    defaultValues: { grade: '' },
    resolver: zodResolver(gradeAnswerSchema),
  })
  return {
    control,
    handleSubmit,
  }
}
