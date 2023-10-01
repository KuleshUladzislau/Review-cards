import { useState } from 'react'

import { ChangeName } from './changeNameForm/ChangeNameForm.tsx'
import s from './editeProfile.module.scss'
import { ProfileInfo } from './profileInfo/profileInfo'

import { Edit } from '@/assets'
import { Avatar } from '@/components/ui/avatar/avatar.tsx'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

type Props = {
  name: string
  email: string
}

export const EditeProfile = ({ name, email }: Props) => {
  const [editeMode, setEditeMode] = useState(false)

  return (
    <Card>
      <Typography variant="h1" as="h1">
        Personal Information
      </Typography>
      <div className={s.avatarContainer}>
        <Avatar />
        {!editeMode && <Edit className={s.edit} />}
      </div>
      {!editeMode && <ProfileInfo name={name} email={email} setEditeMode={setEditeMode} />}
      {editeMode && <ChangeName name={name} setEditeMode={setEditeMode} />}
    </Card>
  )
}
