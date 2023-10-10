import p from './profile.module.scss'

import { Edit, Logout } from '@/assets'
import { Button, Card, Typography } from '@/components/ui'
import { Avatar } from '@/components/ui/avatar/avatar.tsx'
import { useGetMeQuery } from '@/services/auth/authService.ts'

export const Profile = () => {
  const { data } = useGetMeQuery()

  return (
    <Card className={p.cardWrapper}>
      <Typography variant={'h1'}>Personal Information</Typography>
      <div className={p.avatarWrapper}>
        <Avatar src={data.avatar} size={96} showName={false} />
        <Button variant={'secondary'} className={p.buttonEdit}>
          <Edit />
        </Button>
      </div>
      <div>
        {data.name}
        <Button variant={'link'}>
          <Edit />
        </Button>
      </div>
      <div>{data.email}</div>
      <Button variant={'secondary'}>
        <Logout />
        Logout
      </Button>
    </Card>
  )
}
