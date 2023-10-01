import { DevTool } from '@hookform/devtools'

import { ControlledTextField } from '../../controlls/'

import s from './signIn.module.scss'
import { SignInValuesForm, useSignInForm } from './useSignInForm'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { SuperCheckbox } from '@/components/ui/checkbox'
import { Typography } from '@/components/ui/typography'
import { Link } from 'react-router-dom'

type SignInProps = {
  onSubmit: (data: SignInValuesForm) => void
}

export const SignIn = ({ onSubmit }: SignInProps) => {
  const { handleSubmit, control, errors } = useSignInForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
      <Card style={{ alignItems: 'stretch' }}>
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
        <SuperCheckbox variant={'withText'} checkBoxText={'Remember me'} checked />
        <Typography
          className={s.forgotPassword}
          as={Link}
          to={'/recover-password'}
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
