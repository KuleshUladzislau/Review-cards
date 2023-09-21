import c from './card.module.scss'

type cardProps = {
  children: React.ReactNode
}
export const Card = (props: cardProps) => {
  const { children } = props

  return <div className={c.cardWrapper}>{children}</div>
}
