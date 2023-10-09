import { Navigate } from 'react-router-dom'



import CheckEmailIcon from '@/assets/icons/CheckEmailIcon.tsx'
import { Button, Card, Typography } from '@/components/ui'

import s from './check-email.module.scss'

type CheckEmailProps = {
  email: string
}
export const CheckEmail = ({ email }: CheckEmailProps) => {
  return (
    <Card className={s.container}>
      <Typography as={'h1'} variant={'large'} className={s.title}>
        Check Email
      </Typography>
      <div className={s.iconContainer}>
        <CheckEmailIcon className={s.icon} />
      </div>
      <Typography variant={'body2'} className={s.description}>
        We’ve sent an {`${email}`} with instructions to
      </Typography>
      <Button onClick={() => <Navigate to={'/login'} />}>Back to Sign In</Button>
    </Card>
  )
}
