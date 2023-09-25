import { ChangeEvent, ComponentProps, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { clsx } from 'clsx'

import EyeOff from '../../../assets/icons/EyeOff.tsx'
import EyeOn from '../../../assets/icons/EyeOn.tsx'
import Search from '../../../assets/icons/Search.tsx'
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
    const [showPassword, setShowPassword] = useState(false)

    const finalType = getFinalType(type, showPassword)

    const classNames = {
      root: clsx(s.root, containerProps?.className),
      fieldContainer: clsx(s.fieldContainer),
      field: clsx(s.field, !!errorMessage && s.error, search && s.hasFieldIcon, className),
      label: clsx(s.label, labelProps?.className),
      error: clsx(s.error),
      fieldIcon: clsx(s.fieldIcon),
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.target.value)
    }

    return (
      <div className={classNames.root}>
        {label && (
          <Typography variant={'body2'} as={'label'} className={classNames.label}>
            {label}
          </Typography>
        )}
        <div className={classNames.fieldContainer}>
          {search && <Search className={classNames.fieldIcon} />}
          <input
            onChange={handleChange}
            placeholder={placeholder}
            type={finalType}
            className={classNames.field}
            ref={ref}
            {...restProps}
          />

          {type === 'password' && (
            <button
              className={s.showPassword}
              onClick={() => setShowPassword(prev => !prev)}
              type={'button'}
            >
              {showPassword ? <EyeOff /> : <EyeOn />}
            </button>
          )}
        </div>
        <Typography variant="caption" className={classNames.error}>
          {errorMessage}
        </Typography>
      </div>
    )
  }
)

export const getFinalType = (type: ComponentProps<'input'>['type'], showPassword: boolean) => {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}

