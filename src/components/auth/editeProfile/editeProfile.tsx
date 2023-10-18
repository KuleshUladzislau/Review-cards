import { ChangeEvent, useState } from 'react'

import { ChangeName } from './changeNameForm/ChangeNameForm.tsx'
import s from './editeProfile.module.scss'
import { ProfileInfo } from './profileInfo/profileInfo'

import { Edit } from '@/assets'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { useUpdateProfileInfoMutation } from '@/services/auth/authService.ts'

type Props = {
  name?: string
  email?: string
  src?: string
  onLogOut?: () => void
}

export const EditeProfile = ({ name, email, src, onLogOut }: Props) => {
  const [editMode, setEditMode] = useState(false)
  const [uploadPhoto] = useUpdateProfileInfoMutation()

  const uploadPhotoHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const formData = new FormData()

      formData.append('avatar', event.target.files[0])
      uploadPhoto(formData)
    }
  }

  return (
    <Card className={s.container}>
      <Typography variant="h1" as="h1" className={s.title}>
        Personal Information
      </Typography>
      <div className={s.avatarContainer}>
        {src && <img src={src} alt={'img'} className={s.img} />}
        {!src && (
          <label htmlFor={'avatarId'} className={s.defaultAvatar}>
            <span>{name?.[0]}</span>
          </label>
        )}

        {!editMode && (
          <label htmlFor={'avatarId'} className={s.edit}>
            <Edit />
            <input
              id="avatarId"
              type={'file'}
              className={s.inputFile}
              onChange={uploadPhotoHandler}
            />
          </label>
        )}
      </div>
      {!editMode && (
        <ProfileInfo name={name} email={email} setEditeMode={setEditMode} onLogOut={onLogOut} />
      )}
      {editMode && <ChangeName name={name} setEditeMode={setEditMode} />}
    </Card>
  )
}
