import s from './profileInfo.module.scss'

import { Edit, Logout } from '@/assets'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

type Props = {
  name: string
  email: string
  setEditeMode: (value: boolean) => void
  onLogOut?: () => void
}

export const ProfileInfo = ({ name, email, setEditeMode, onLogOut }: Props) => {
  const logout = () => {}

  const onEditModHandler = () => setEditeMode(true)

  return (
    <>
      <Typography variant="h3" as="h3" className={s.nameContainer}>
        {name}
        <Edit onClick={onEditModHandler} />
      </Typography>
      <Typography variant="body2" className={s.email}>
        {email}
      </Typography>
      <Button variant="secondary" onClick={logout} className={s.button}>
        <Logout onClick={onLogOut} />
        Logout
      </Button>
    </>
  )
}
