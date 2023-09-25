import { ComponentPropsWithoutRef } from 'react'

import s from './avatar.module.scss'

type AvatarProps = {
  name?: string
  size?: ComponentPropsWithoutRef<'img'>['width']
  src?: ComponentPropsWithoutRef<'img'>['src']
}
export const Avatar = ({ src, size = 36, name }: AvatarProps) => {
  return <img src={src} className={s.avatar} width={size} height={size} alt={`${name} avatar`} />
}
