import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledTextField } from '../../../controlls'
import { Button } from '../../../ui/button'
import { Card } from '../../../ui/card'
import { Typography } from '../../../ui/typography'

import s from './forgotPassword.module.scss'

export const ForgotPassword = () => {
  const forgotPasswordSchema = z.object({
    email: z.string().email(),
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<{ email: string }>({
    resolver: zodResolver(forgotPasswordSchema),
  })

  const onSubmit: SubmitHandler<{ email: string }> = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.formContainer}>
      <Card>
        <Typography variant="h1" as="h1">
          Forgot your password?
        </Typography>

        <ControlledTextField
          name="email"
          control={control}
          label="Email"
          errorMessage={errors.email?.message}
        />

        <Typography variant="overline" as={'label'} className={s.description}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button variant="primary" type={'submit'} fullWidth={true} className={s.submitButton}>
          SignIn
        </Button>
        <Typography variant="overline" as="div">
          Did you remember your password?
        </Typography>
        <Button variant={'link'} onClick={() => {}}>
          Try logging in
        </Button>
      </Card>
    </form>
  )
}
