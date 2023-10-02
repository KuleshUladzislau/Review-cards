import { ComponentPropsWithoutRef } from 'react'

import s from './avatar.module.scss'

import { Typography } from '@/components/ui/typography'

type AvatarProps = {
  name?: string
  size?: ComponentPropsWithoutRef<'img'>['width']
  src?: ComponentPropsWithoutRef<'img'>['src']
  userName?: string
}
export const Avatar = ({ src, size = 36, name, userName }: AvatarProps) => {
  return (
    <>
      <Typography variant={'subtitle1'} as={'span'} className={s.userName}>
        {userName}
      </Typography>
      <img src={src} className={s.avatar} width={size} height={size} alt={`${name} avatar`} />
    </>
  )
}
