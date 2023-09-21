import React, { useState } from 'react'

import * as Select from '@radix-ui/react-select'
import s from './select.module.scss'

import layer from '../../../assets/icons/Layer2.svg'
export const SelectCustom = () => {
  const [selectedValue, setSelectedValue] = useState('')
  const [open, setOpen] = useState(false)

  const handleValueChange = (value: string) => {
    setSelectedValue(value)
  }

  const arrowClass = open ? 'red' : 'blue'
  const onOpenChange = (open: boolean) => {
    setOpen(open)
  }

  return (
    <Select.Root
      onValueChange={handleValueChange}
      value={selectedValue}
      onOpenChange={onOpenChange}

    >
      <Select.Trigger className={s.trigger}>
        <Select.Value className={s.selectedValue}>{selectedValue}</Select.Value>
        <Select.Icon>
          <img src={layer} className={open ? s.downArrow : ''} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Separator />
      <Select.Content position={'popper'} className={s.content}>

        <Select.Viewport className={s.viewport} >
          <Select.Item className={s.item} value={'one'}>
            <Select.ItemText className={s.itemText}>One</Select.ItemText>
          </Select.Item>

          <Select.Item className={s.item} value={'two'}>
            <Select.ItemText className={s.itemText} >Two</Select.ItemText>
          </Select.Item>

          <Select.Item className={s.item} value={'three'}>
            <Select.ItemText>Three</Select.ItemText>
          </Select.Item>

          <Select.Separator />
        </Select.Viewport>


      </Select.Content>
    </Select.Root>
  )
}
