import { Link } from 'react-router-dom'

import { ControlledTextField } from '../../controlls/'

import s from './signIn.module.scss'
import { SignInValuesForm, useSignInForm } from './useSignInForm'

import { ControlledCheckbox } from '@/components/controlls/controlled-checkbox/controlled-checkbox.tsx'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

type SignInProps = {
  onSubmit: (data: SignInValuesForm) => void
}

export const SignIn = ({ onSubmit }: SignInProps) => {
  const { handleSubmit, control, errors } = useSignInForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className={s.card}>
        <Typography className={s.signIn} variant={'large'}>
          Sign In
        </Typography>
        <div className={s.form}>
          <ControlledTextField
            name={'email'}
            control={control}
            label={'Email'}
            errorMessage={errors.email?.message}
          />
          <ControlledTextField
            type={'password'}
            name={'password'}
            control={control}
            label={'Password'}
            errorMessage={errors.password?.message}
          />
        </div>
        <ControlledCheckbox control={control} name={'rememberMe'} label={'Remember me'} />
        <Typography
          className={s.forgotPassword}
          as={Link}
          to={'/forgot-password'}
          variant={'body2'}
        >
          Forgot Password?
        </Typography>
        <Button className={s.signInBtn} variant={'primary'}>
          Sign In
        </Button>

        <Typography className={s.dontHaveAcc} variant={'body2'}>
          Don`t have an account?
        </Typography>
        <Typography className={s.signUp} as={Link} to={'/sign-up'} variant={'link1'}>
          Sign Up
        </Typography>
      </Card>
    </form>
  )
}
