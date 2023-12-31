import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

import { Check } from '@/assets'
import { Typography } from '@/components/ui'

type PositionType = 'default' | 'left'

export type CheckboxProps = {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  id?: string
  label?: string
  position?: PositionType
} & Omit<ComponentPropsWithoutRef<typeof RadixCheckbox.Root>, 'asChild'>

export const SuperCheckbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  (
    {
      checked,
      onCheckedChange,
      disabled,
      name,
      label,
      id,
      position = 'default',
      className,
      ...restProps
    },
    ref
  ) => {
    const classNames = {
      label: clsx(s.label, disabled && s.disabled, className),
      root: clsx(s.root),
      checkboxWrapper: clsx(s.checkboxWrapper, disabled && s.disabled, s[position]),
      indicator: s.indicator,
    }

    return (
      <Typography className={classNames.label} variant={'body2'} as="label">
        <div className={classNames.checkboxWrapper}>
          <RadixCheckbox.Root
            ref={ref}
            className={classNames.root}
            id={id}
            name={name}
            checked={checked}
            onCheckedChange={onCheckedChange}
            disabled={disabled}
            required={restProps.required}
          >
            {checked && (
              <RadixCheckbox.Indicator className={classNames.indicator} forceMount>
                <Check size={1.8} />
              </RadixCheckbox.Indicator>
            )}
          </RadixCheckbox.Root>
        </div>
        {label}
      </Typography>
    )
  }
)