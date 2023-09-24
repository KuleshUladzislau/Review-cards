import { ComponentPropsWithoutRef, ForwardedRef, forwardRef} from 'react'

import closeCross from '../../../assets/icons/crossClose.png'

import s from './modal.module.scss'

export type ModalType = {
  open: boolean
  setOpen: (active: boolean) => void
  children?: React.ReactNode
  title?: string
} & ComponentPropsWithoutRef<'div'>

export const Modal = forwardRef<ForwardedRef<HTMLDivElement>, ModalType>(
  (
    {
      open,
      setOpen,
      children,
      title
    },
    ref
  ) => {
    const transformStyle = open ? s.modalContainer : s.active

    return (
      <div
        ref={ref as ForwardedRef<HTMLDivElement>}
        className={transformStyle}
        onClick={() => setOpen(false)}
      >
        <div
          className={s.content}
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
        >
          <div className={s.contentContainer}>
            {title && (
              <div className={s.title}>
                <h4>{title}</h4>
                <img src={closeCross} onClick={() => setOpen(false)} />
              </div>
            )}
            <div>{children}</div>
          </div>
        </div>
      </div>
    )
  }
)
