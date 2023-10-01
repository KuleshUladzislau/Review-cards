import { useState } from 'react'

import { ChangeName } from './changeNameForm/ChangeNameForm.tsx'
import s from './editeProfile.module.scss'
import { ProfileInfo } from './profileInfo/profileInfo'

import { Edit } from '@/assets'

import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

type Props = {
  name: string
  email: string
  src: string
}

export const EditeProfile = ({ name, email, src }: Props) => {
  const [editeMode, setEditeMode] = useState(false)

  return (
    <Card className={s.container}>
      <Typography variant="h1" as="h1" className={s.title}>
        Personal Information
      </Typography>
      <div className={s.avatarContainer}>
        <img src={src} alt={'img'} className={s.img} />
        {!editeMode && <Edit className={s.edit} />}
      </div>
      {!editeMode && <ProfileInfo name={name} email={email} setEditeMode={setEditeMode} />}
      {editeMode && <ChangeName name={name} setEditeMode={setEditeMode} />}
    </Card>
  )
}
