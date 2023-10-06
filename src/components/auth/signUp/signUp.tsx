import { FC } from 'react'

import { SubmitHandler } from 'react-hook-form'

import s from './signUp.module.scss'

import { SignUpData, useSignUp } from '@/components/auth/signUp/useSignUp.ts'
import { ControlledTextField } from '@/components/controlls'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

type SignUpTypes = {
  onSubmit: (data: SignUpData) => void
}
export const SignUp: FC<SignUpTypes> = ({ onSubmit }) => {
  const { handleSubmit, control, errors } = useSignUp()

  const onSubmitHandler: SubmitHandler<SignUpData> = data => {
    onSubmit(data)
  }


  return (
    <form className={s.formContainer} onSubmit={handleSubmit(onSubmitHandler)}>
      <Card className={s.cardWrapper}>
        <Typography variant={'h1'}>Sign Up</Typography>
        <div className={s.textFieldWrapper}>
          <ControlledTextField
            name="email"
            control={control}
            label="Email"
            errorMessage={errors.email?.message}
          ></ControlledTextField>
          <ControlledTextField
            name={'password'}
            control={control}
            label={'Password'}
            type={'password'}
            errorMessage={errors.password?.message}
          ></ControlledTextField>
          <ControlledTextField
            name={'confirmPassword'}
            control={control}
            label={'ConfirmPassword'}
            type={'password'}
            errorMessage={errors.confirmPassword?.message}
          ></ControlledTextField>
        </div>

        <div className={s.buttonWrapper}>
          <Button fullWidth={true}>Sign Up</Button>
          <a href={''}>
            <Typography variant={'link1'} className={s.description}>
              Already have an account?
            </Typography>
          </a>
          <Button as={'a'} variant={'link'}>
            Sign In
          </Button>
        </div>
      </Card>
    </form>
  )
}
