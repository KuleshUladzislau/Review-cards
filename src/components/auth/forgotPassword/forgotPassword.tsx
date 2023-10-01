import { SubmitHandler } from 'react-hook-form'
import { Link } from 'react-router-dom'

import s from './forgotPassword.module.scss'
import { useForgotPassword } from './useForgotPassword.ts'

import { ControlledTextField } from '@/components/controlls'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

export const ForgotPassword = () => {
  const { handleSubmit, control, errors } = useForgotPassword()

  const onSubmit: SubmitHandler<{ email: string }> = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.formContainer}>
      <Card className={s.contentWrapper}>
        <Typography variant="large" as="h1" className={s.title}>
          Forgot your password?
        </Typography>

        <div className={s.containerInput}>
          <ControlledTextField
            name="email"
            control={control}
            label="Email"
            errorMessage={errors.email?.message}
            className={s.input}
          />
        </div>

        <Typography variant="body2" as={'label'} className={s.description}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button variant="primary" className={s.submitButton}>
          Send Instructions
        </Button>
        <Typography variant="body2" className={s.rememberPassword}>
          Did you remember your password?
        </Typography>

        <Typography variant={'link1'} className={s.link}>
          <Link to={'/'}>Try logging in</Link>
        </Typography>
      </Card>
    </form>
  )
}
