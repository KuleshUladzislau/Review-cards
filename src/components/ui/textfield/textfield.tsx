import { ComponentProps, ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import { Typography } from '../typography'

import s from './textfield.module.scss'

type TextfieldProps = {
  onValueChange?: (value: string) => void
  errorMessage?: string
  containerProps?: ComponentProps<'div'>
  label?: string
  labelProps?: ComponentProps<'label'>
  search?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Textfield = forwardRef<HTMLInputElement, TextfieldProps>(
  (
    {
      className,
      errorMessage,
      placeholder,
      type,
      containerProps,
      label,
      labelProps,
      onChange,
      onValueChange,
      search,
      ...restProps
    },
    ref
  ) => {
    const finalType = type

    const classNames = {
      root: clsx(s.root, containerProps?.className),
      fieldContainer: clsx(s.fieldContainer),
      field: clsx(s.field, !!errorMessage && s.error, className),
      label: clsx(s.label, labelProps?.className),
      error: clsx(s.error),
    }

    return (
      <div className={classNames.root}>
        {label && (
          <Typography variant={'body2'} as={'label'} className={classNames.label}>
            {label}
          </Typography>
        )}
        <div className={classNames.fieldContainer}>
          <input
            placeholder={placeholder}
            type={finalType}
            className={classNames.field}
            ref={ref}
            {...restProps}
          />
        </div>

        <Typography variant="caption" className={classNames.error}>
          {errorMessage}
        </Typography>
      </div>
    )
  }
)
