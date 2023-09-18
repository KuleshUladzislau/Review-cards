import s from './modal.module.scss'

type Modal = {
  open: boolean
  setOpen: (active: boolean) => void
  children?: React.ReactNode
  title?: string
}

export const Modal = ({ open, setOpen, children, title }: Modal) => {
  const transformStyle = open ? s.modalContainer : s.active

  return (
    <div className={transformStyle} onClick={() => setOpen(false)}>
      <div className={s.content} onClick={(e: any) => e.stopPropagation()}>
        <div className={s.contentContainer}>
          {title && (
            <div className={s.title}>
              <h4>{title}</h4>
              <button onClick={() => setOpen(false)}>x</button>
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}
