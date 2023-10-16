import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { useNavigate } from 'react-router-dom'

import s from './header.module.scss'

import Logo from '@/assets/icons/Logo.tsx'
import { Button } from '@/components/ui/button'
import { HeaderMenu } from '@/components/ui/header/headerMenu/HeaderMenu.tsx'

export type HeaderProps = {
  userName?: string
  userPhoto?: string
  isLoggedIn?: boolean
  email?: string
  logout?: () => void
} & ComponentPropsWithoutRef<'header'>

export const Header = forwardRef<HTMLHeadElement, HeaderProps>(
  ({ children, isLoggedIn, email, className, userName, userPhoto, logout, ...restPros }, ref) => {
    const navigate = useNavigate()
    const logoHandler = () => {
      navigate('/')
    }

    return (
      <header ref={ref} className={`${s.header} ${className}`} {...restPros}>
        <div className={s.headerContent}>
          <Logo onClick={logoHandler} className={s.logo} />
          {!isLoggedIn && <Button>Sign In</Button>}
          {isLoggedIn && <HeaderMenu {...{ userName, userPhoto, email, logout }} />}
        </div>
      </header>
    )
  }
)
