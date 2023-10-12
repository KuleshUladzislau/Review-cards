import { SubmitHandler } from 'react-hook-form'

import c from './createNewPassword.module.scss'

import { useCreateNewPassword } from '@/components/auth/createNewPassword/useCreateNewPassword.ts'
import { ControlledTextField } from '@/components/controlls'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

type CreateNewPasswordProps = {
  onSubmit: (password: string) => void
}
export const CreateNewPassword = ({ onSubmit }: CreateNewPasswordProps) => {
  const { handleSubmit, control, errors } = useCreateNewPassword()

  const onSubmitHandler: SubmitHandler<{ password: string }> = data => {
    onSubmit(data.password)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className={c.formContainer}>
      <Card className={c.cardWrapper}>
        <Typography variant={'large'} as={'h1'} className={c.title}>
          Create new password
        </Typography>
        <ControlledTextField
          name="password"
          control={control}
          label={'Password'}
          type={'password'}
          errorMessage={errors.password?.message}
        />
        <Typography variant={'body2'} className={c.description}>
          Create new password and we will send you further instructions to email
        </Typography>
        <div className={c.buttonWrapper}>
          <Button fullWidth={true}>Create New Password</Button>
        </div>
      </Card>
    </form>
  )
}
