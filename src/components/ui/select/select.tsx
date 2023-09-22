// eslint-disable-next-line import/default
import React, { useState } from 'react'

import * as Select from '@radix-ui/react-select'

import layer from '../../../assets/icons/Layer2.svg'

import s from './select.module.scss'

type SelectProps = {
  options: string[]
  onChange: (value: string) => void
  className?: string
  disabled?: boolean
}

export const SelectCustom = (props: SelectProps) => {
  const { options, onChange, className, disabled, ...restProps } = props

  const [selectedValue, setSelectedValue] = useState(options[0])
  const [open, setOpen] = useState(false)

  const handleValueChange = (value: string) => {
    setSelectedValue(value)
    onChange(value)
  }

  const onOpenChange = (open: boolean) => {
    setOpen(open)
  }

  const mapedOptions = options?.map(o => (
    <Select.Item key={o} value={o} className={s.item}>
      <Select.ItemText className={s.itemText}>{o}</Select.ItemText>
    </Select.Item>
  ))

  return (
    <Select.Root
      onValueChange={handleValueChange}
      value={selectedValue}
      onOpenChange={onOpenChange}
      disabled={disabled}
      {...restProps}
    >
      <Select.Trigger className={`${s.trigger} ${className}`}>
        <Select.Value>{selectedValue}</Select.Value>
        <Select.Icon className={s.icon}>
          <img src={layer} className={open ? s.downArrow : ''} />
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
