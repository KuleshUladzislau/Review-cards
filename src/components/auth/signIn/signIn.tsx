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
    <Card className={s.formWrapper}>
      <Typography className={s.signIn} variant={'large'}>
        Sign In
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
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
        <ControlledCheckbox
          className={s.checkbox}
          control={control}
          name={'rememberMe'}
          position={'left'}
          label={'Remember me'}
        />
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
      </form>
      <Typography className={s.dontHaveAcc} variant={'body2'}>
        Don`t have an account?
      </Typography>
      <Typography as={Link} className={s.signUp} to={'/sign-up'} variant={'link2'}>
        <div className={s.Sign}>Sign Up</div>
      </Typography>
    </Card>
  )
}
