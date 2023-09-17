import { ElementType, ReactNode } from 'react'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType> = {
  as?: T
  variant?:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'subtitle1'
    | 'body2'
    | 'subtitle2'
    | 'caption'
    | 'overline'
    | 'link1'
    | 'link2'
  children?: ReactNode
  className?: string
}
export const Typography = <T extends ElementType>({
  as,
  variant = 'body1',
  children,
  className,
  ...restProps
}: TypographyProps<T>) => {
  const classNames = `${s[variant]} ${className}`
  const Component = as || 'p'

  return (
    <Component className={classNames} {...restProps}>
      {children}
    </Component>
  )
}
