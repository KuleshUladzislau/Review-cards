import c from './card.module.scss'

export type cardProps = {
  children?: React.ReactNode
}
export const Card = (props: cardProps) => {
  const { children } = props

  return <div className={c.cardWrapper}>{children}</div>
}
