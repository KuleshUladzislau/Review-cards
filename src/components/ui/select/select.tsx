import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as Select from '@radix-ui/react-select'

import layer from '../../../assets/icons/Layer2.svg'

import s from './select.module.scss'

type SelectProps = {
  options: string[]
  className?: string
  placeHolder?: string
} & ComponentPropsWithoutRef<typeof Select.Root>

export const SelectCustom = forwardRef<ElementRef<typeof Select.Root>, SelectProps>(
  (
    {
      options,
      defaultValue,
      placeHolder,
      onValueChange,
      value,
      className,
      disabled,
      ...restProps
    },
    ref
  ) => {
    const mapedOptions = options?.map(o => (
      <Select.Item key={o} value={o} className={s.item}>
        <Select.ItemText className={s.itemText}>{o}</Select.ItemText>
      </Select.Item>
    ))

    return (
      <Select.Root
        onValueChange={onValueChange}
        defaultValue={defaultValue}
        disabled={disabled}
        value={value}
        {...restProps}
      >
        <Select.Trigger ref={ref} className={`${s.trigger} ${className}`}>
          <Select.Value placeholder={placeHolder} />
          <Select.Icon className={s.icon}>
            <img src={layer} />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={s.content} position="popper">
            <Select.Viewport>
              <Select.Group>{mapedOptions}</Select.Group>
              <Select.Separator />
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    )
  }
)
