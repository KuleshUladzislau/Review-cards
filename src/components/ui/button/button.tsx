import { ComponentPropsWithoutRef } from 'react'

import s from './button.module.scss'

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
  as: any
} & ComponentPropsWithoutRef<'button'>

export const Button = ({
  variant = 'primary',
  fullWidth,
  className,
  as: Component = 'button',
  ...rest
}: ButtonProps) => {
  return (
    <button className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}
