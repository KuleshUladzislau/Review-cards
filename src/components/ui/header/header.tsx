import { ComponentPropsWithoutRef, forwardRef } from 'react'

import s from './header.module.scss'

import Logo from '@/assets/icons/Logo.tsx'
import { Button } from '@/components/ui/button'
import { HeaderMenu } from '@/components/ui/header/headerMenu/HeaderMenu.tsx'

export type HeaderProps = {
  userName: string
  userPhoto: string
  isLoggedIn: boolean
  email?: string
} & ComponentPropsWithoutRef<'header'>

export const Header = forwardRef<HTMLHeadElement, HeaderProps>(
  ({
       children,
       isLoggedIn,
       email,
       className,
       userName,
       userPhoto,
       ...restPros
   },
   ref
  ) => {
    return (
      <header ref={ref} className={`${s.header} ${className}`} {...restPros}>
        <Logo />
        {!isLoggedIn && <Button>Sign In</Button>}
        {isLoggedIn && <HeaderMenu {...{ userName, userPhoto, email }} />}
      </header>
    )
  }
)
