import { SubmitHandler, useForm } from 'react-hook-form'

import { ControlledTextField } from '../../../controlls'
import { Button } from '../../../ui/button'
import { Card } from '../../../ui/card'
import { Typography } from '../../../ui/typography'

export const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<{ email: string }>()

  const onSubmit: SubmitHandler<{ email: string }> = data => {
    console.log(data.email)
  }

  return (
    <div>
      <Card>
        <Typography variant="h1" as="h1">
          Forgot your password?
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ControlledTextField name="email" required={true} control={control} />
          <Button variant="primary" type={'submit'} fullWidth={true}>
            SignIn
          </Button>
        </form>
      </Card>
    </div>
  )
}
