import { ComponentPropsWithoutRef } from 'react'

import s from './input.module.scss'

export type InputProps = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
  as: any
} & ComponentPropsWithoutRef<'input'>

export const Input = ({
  variant = 'primary',
  fullWidth,
  className,
  as: Component = 'input',
  ...rest
}: InputProps) => {
  return (
    <input className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}
