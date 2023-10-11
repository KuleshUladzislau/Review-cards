


import { ComponentPropsWithoutRef, forwardRef } from 'react'

import Logo from '@/assets/icons/Logo.tsx'
import { Button } from '@/components/ui/button'
import { HeaderMenu } from '@/components/ui/header/headerMenu/HeaderMenu.tsx'
import s from './header.module.scss'


export type HeaderProps = {
  userName?: string
  userPhoto?: string
  isLoggedIn?: boolean
  email?: string
  logout?: () => void
} & ComponentPropsWithoutRef<'header'>

export const Header = forwardRef<HTMLHeadElement, HeaderProps>(
  ({ children, isLoggedIn, email, className, userName, userPhoto, logout, ...restPros }, ref) => {
    return (
      <header ref={ref} className={`${s.header} ${className}`} {...restPros}>

          <div className={s.headerContent}>
              <Logo />
              {!isLoggedIn && <Button>Sign In</Button>}
              {isLoggedIn && <HeaderMenu {...{userName, userPhoto, email, logout}} />}</div>

      </header>
    )
  }
)
