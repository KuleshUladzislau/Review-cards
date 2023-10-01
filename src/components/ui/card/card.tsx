import { CSSProperties, ReactNode} from 'react'

import { clsx } from 'clsx'

import c from './card.module.scss'

export type cardProps = {
  children?: ReactNode
  className?: string
  style?: CSSProperties
}
export const Card = (props: cardProps) => {
  const { children, style, className } = props

  const classNames = { card: clsx(c.cardWrapper, className) }

  return (
    <div style={style} className={classNames.card}>
      {children}
    </div>
  )
}
