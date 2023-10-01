import { ComponentPropsWithoutRef, forwardRef } from 'react'

import s from './header.module.scss'

export const Header = forwardRef<HTMLHeadElement, ComponentPropsWithoutRef<'header'>>(
  ({ children, className, ...restPros }, ref) => {
    return (
      <header ref={ref} className={`${s.header} ${className}`} {...restPros}>
        {children}
      </header>
    )
  }
)
