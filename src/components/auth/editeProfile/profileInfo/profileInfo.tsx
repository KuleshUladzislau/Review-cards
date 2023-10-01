import s from '../editeProfile.module.scss'

import { Edit, Logout } from '@/assets'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

type Props = {
  name: string
  email: string
  setEditeMode: (value: boolean) => void
}

export const ProfileInfo = ({ name, email, setEditeMode }: Props) => {
  const logout = () => {}

  return (
    <>
      <Typography variant="h3" as="div" className={s.nameContainer}>
        {name}
        <Edit onClick={() => setEditeMode(true)} />
      </Typography>
      <Typography variant="overline" className={s.email}>
        {email}
      </Typography>
      <Button variant="secondary" onClick={logout}>
        <Logout />
        Logout
      </Button>
    </>
  )
}
