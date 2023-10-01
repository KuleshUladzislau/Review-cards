import s from '../avatar.module.scss'

import { Typography } from '@/components/ui/typography'

type AvatarInfoProps = {
  userName?: string
  email?: string
}

export const AvatarInfo = ({ userName = 'anonymus', email }: AvatarInfoProps) => {
  return (
    <div className={s.infoWrap}>
      <Typography className={s.userName} as={'span'} variant={'subtitle1'}>
        {userName}
      </Typography>
      <Typography className={s.email} as={'span'} variant={'caption'}>
        {email}
      </Typography>
    </div>
  )
}
