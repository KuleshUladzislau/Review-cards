import { useNavigate, useParams} from 'react-router-dom'
import CheckEmailIcon from '@/assets/icons/CheckEmailIcon.tsx'
import { Button, Card, Typography } from '@/components/ui'

import s from './check-email.module.scss'

export const CheckEmail = () => {
    const params = useParams()
    const navigate = useNavigate()
    const onLoginNavigateHandler = ()=>{
        navigate('/login')
    }
  return (
    <Card className={s.container}>
      <Typography as={'h1'} variant={'large'} className={s.title}>
        Check Email
      </Typography>
      <div className={s.iconContainer}>
        <CheckEmailIcon className={s.icon} />
      </div>
      <Typography variant={'body2'} className={s.description}>
        We’ve sent an {`${params.email}`} with instructions to
      </Typography>
      <Button onClick={onLoginNavigateHandler}>Back to Sign In</Button>
    </Card>
  )
}
