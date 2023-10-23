import { ComponentPropsWithoutRef, ElementType } from 'react'

import style from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
  as?: T
  onClick?: () => void
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {
    variant = 'primary',
    fullWidth,
    className,
    onClick,
    as: Component = 'button',
    ...rest
  } = props

  return (
    <Component
      onClick={onClick}
      className={`${style.button} ${style[variant]} ${
        fullWidth ? style.fullWidth : ''
      } ${className} ${Component === 'a' ? style.asLink : ''}`}
      {...rest}
    >
      <span className={style.valueBox}>{rest.children}</span>
    </Component>
  )
}
