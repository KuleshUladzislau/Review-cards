import { SubmitHandler } from 'react-hook-form'

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
      <Card>
        <Typography variant="h1" as="h1">
          Forgot your password?
        </Typography>

        <ControlledTextField name="email" control={control} label="Email" errorMessage={errors.email?.message} />

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
          <Typography variant={'link1'}>Try logging in</Typography>
        </Button>
      </Card>
    </form>
  )
}
