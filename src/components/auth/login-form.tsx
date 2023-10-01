import { zodResolver } from '@hookform/resolvers/zod'
import { useController, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { SuperCheckbox } from '@/components/ui/checkbox'
import { Textfield } from '@/components/ui/textfield'

type FormValues = z.infer<typeof loginSchema>

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional().default(false),
})

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(loginSchema) })

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  const {
    field: { value, onChange },
  } = useController({
    name: 'rememberMe',
    control,
    defaultValue: false,
  })

  return (
    <form onSubmit={onSubmit}>
      <Textfield {...register('email')} errorMessage={errors.email?.message} label={'email'} />
      <Textfield {...register('password')} label={'password'} />
      <SuperCheckbox
        onChange={onChange}
        checked={value}
        checkBoxText={'remember me'}
        variant={'default'}
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}
