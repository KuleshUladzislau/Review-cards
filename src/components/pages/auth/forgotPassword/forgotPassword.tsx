
import { SubmitHandler} from 'react-hook-form'


import { ControlledTextField } from '../../../controlls'
import { Button } from '../../../ui/button'
import { Card } from '../../../ui/card'
import { Typography } from '../../../ui/typography'

import s from './forgotPassword.module.scss'
import { useForgotPassword } from './useForgotPassword.ts'

export const ForgotPassword = () => {
  const { handleSubmit, control } = useForgotPassword()

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
          <Typography variant={'link1'}>Try logging in</Typography>
        </Button>
      </Card>
    </form>
  )
}
