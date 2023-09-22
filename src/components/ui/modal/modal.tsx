import { ComponentPropsWithoutRef } from 'react'

import closeCross from '../../../assets/icons/crossClose.png'

import s from './modal.module.scss'

export type ModalType = {
  open: boolean
  setOpen: (active: boolean) => void
  children?: React.ReactNode
  title?: string
} & ComponentPropsWithoutRef<'div'>

export const Modal = ({ open, setOpen, children, title }: ModalType) => {
  const transformStyle = open ? s.modalContainer : s.active

  return (
    <div className={transformStyle} onClick={() => setOpen(false)}>
      <div className={s.content} onClick={(e: any) => e.stopPropagation()}>
        <div className={s.contentContainer}>
          {title && (
            <div className={s.title}>
              <h4>{title}</h4>
              <img src={closeCross} onClick={() => setOpen(false)} />
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}
