import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import s from './avatar.module.scss'

import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

type AvatarProps = {
  name?: string
  size?: ComponentPropsWithoutRef<'img'>['width']
  src?: ComponentPropsWithoutRef<'img'>['src']
  userName?: string
} & ComponentPropsWithoutRef<'div'>
export const Avatar = forwardRef<ElementRef<'div'>, AvatarProps>(
  ({ src, size = 36, name, userName, ...restProps }, ref) => {
    const classNames = {
      userName: clsx(s.userName),
      avatar: clsx(s.avatar),
      avatarContainer: clsx(s.avatarContainer),
      dontHaveAvatar: clsx(s.dontHaveAvatar),
    }
    return (
      <div ref={ref} {...restProps} className={classNames.avatarContainer}>
        <Typography variant={'subtitle1'} as={'span'} className={classNames.userName}>
          {userName}
        </Typography>
        {src && (
          <img
            src={src ? src : name?.[0]}
            className={classNames.avatar}
            width={size}
            height={size}
          />
        )}
        {!src && <span className={classNames.dontHaveAvatar}>{userName?.[0]}</span>}
      </div>
    )
  }
)
