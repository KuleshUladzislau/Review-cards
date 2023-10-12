import { ReactNode } from 'react'
import s from './page.module.scss'

export type PageProps = {
  children: ReactNode
}
export const Page = ({ children }: PageProps) => {
  return <div className={s.container}>{children}</div>
}
