import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'

import c from './card.module.scss'

export type cardProps = {
  children?: ReactNode
} & ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, cardProps>((props, ref) => {
  const { children, className } = props

  return (
    <div ref={ref} className={`${c.cardWrapper} ${className}`}>
      {children}
    </div>
  )
})
