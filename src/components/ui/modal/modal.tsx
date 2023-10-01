import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

import { Cross } from '@/assets'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

export type ModalType = {
  children?: React.ReactNode
  title?: string
  className?: string
  setOpen: (value: boolean) => void
} & ComponentPropsWithoutRef<typeof Dialog.Root>

export const Modal = forwardRef<ElementRef<'div'>, ModalType>(
  ({ open, title, setOpen, children, ...restProps }, ref) => {
    return (
      <Dialog.Root open={open} onOpenChange={setOpen} {...restProps}>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay className={s.overlay} forceMount />
            <Dialog.Content>
              <div className={s.content} ref={ref}>
                <Card>
                  {title && (
                    <header className={s.title}>
                      <Typography variant={'h2'} as={'h2'}>
                        {title}
                      </Typography>
                      <Dialog.Close className={s.buttonClose}>
                        <Cross />
                      </Dialog.Close>
                    </header>
                  )}
                  <div>{children}</div>
                </Card>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </Dialog.Root>
    )
  }
)
