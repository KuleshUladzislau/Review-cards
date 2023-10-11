import {ComponentPropsWithoutRef, ElementRef, forwardRef} from 'react'

import s from './avatar.module.scss'

import { Typography } from '@/components/ui/typography'

type AvatarProps = {
  name?: string
  size?: ComponentPropsWithoutRef<'img'>['width']
  src?: ComponentPropsWithoutRef<'img'>['src']
  userName?: string
} & ComponentPropsWithoutRef<'div'>
export const Avatar = forwardRef <ElementRef<'div'>,AvatarProps>(
    ({ src, size = 36, name, userName,...restProps },ref) => {
        return (
            <div ref={ref} {...restProps}>
                <Typography variant={'subtitle1'} as={'span'} className={s.userName}>
                    {userName}
                </Typography>
                {src
                    ?<img src={src} className={s.avatar} width={size} height={size} alt={`${name} avatar`}/>
                    :<span className={s.avatar}>govnishe</span>
                }
            </div>
        )
    }
) 
