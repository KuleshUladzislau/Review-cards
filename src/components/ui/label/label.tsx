import { ComponentPropsWithoutRef, CSSProperties, forwardRef, ReactNode } from 'react'

import * as CustomLabel from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './label.module.scss'

type LabelProps = {
  label?: ReactNode
  className?: string
  style?: CSSProperties
  children?: ReactNode
} & ComponentPropsWithoutRef<'label'>

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props: LabelProps, ref) => {
  const { children, className, label, style, ...restProps } = props

  const classNames = {
    label: clsx(s.label, className),
  }

  return (
    <CustomLabel.Root className={classNames.label} style={style} ref={ref} {...restProps}>
      {label}
      {children}
    </CustomLabel.Root>
  )
})
