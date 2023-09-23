import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
  as?: T
  icon?: ReactNode
  onClick: () => void
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    variant = 'primary',
    fullWidth,
    className,
    icon,
    onClick,
    as: Component = 'button',
    ...rest
  } = props

  return (
    <Component
      onClick={onClick}
      className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className} ${
        Component === 'a' ? s.asLink : ''
      }`}
      {...rest}
    >
      <span
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {icon}
        {rest.children}
      </span>
    </Component>
  )
}
