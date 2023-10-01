import { FC, ReactNode } from 'react'

import { Button } from '../../../ui/button'
import { Card } from '../../../ui/card'
import { Textfield } from '../../../ui/textfield'
import { Typography } from '../../../ui/typography'

type signUpTypes = {
  children?: ReactNode
}
export const SignUp: FC<signUpTypes> = () => {
  return (
    <Card>
      <Typography variant={'h1'}>Sign Up</Typography>
      <Textfield label={'Email'} type={'email'}></Textfield>
      <Textfield label={'Password'} type={'password'}></Textfield>
      <Textfield label={'Confirm Password'} type={'password'}></Textfield>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '60px',
          width: '80%',
        }}
      >
        <Button onClick={() => {}} fullWidth={true} style={{ marginBottom: '20px' }}>
          Sign Up
        </Button>
        <a href={''}>
          <Typography variant={'link1'}>Already have an account?</Typography>
        </a>
        <Button onClick={() => {}} as={'a'} variant={'link'}>
          Sign In
        </Button>
      </div>
    </Card>
  )
}
