import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as Select from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

import Layer2 from '@/assets/icons/Layer2.tsx'

//Изменил типы также как и в свитчере
export type OptionsType = {
  label: string
  value: string
}

type SelectProps = {
  options: OptionsType[]
  className?: string
  placeHolder?: string
} & ComponentPropsWithoutRef<typeof Select.Root>

export const SelectCustom = forwardRef<ElementRef<typeof Select.Trigger>, SelectProps>(
  (
    { options, defaultValue, placeHolder, onValueChange, value, className, disabled, ...restProps },
    ref
  ) => {
    //Добавил toString на случай если number, нужен для запроса пагинации
    const mappedOptions = options?.map(o => (
      <SelectItem key={o.value} value={o.value}>
        {o.label}
      </SelectItem>
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
            <Layer2 />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={s.content} position="popper">
            <Select.Viewport>
              <Select.Group>{mappedOptions}</Select.Group>
              <Select.Separator />
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    )
  }
)

type ItemProps = ComponentPropsWithoutRef<typeof Select.Item>

export const SelectItem = forwardRef<ElementRef<typeof Select.Item>, ItemProps>(
  ({ children, className, ...restProps }, ref) => {
    const classNames = {
      item: clsx(s.item, className),
      itemText: clsx(s.itemText),
    }

    return (
      <Select.Item {...restProps} className={classNames.item} ref={ref}>
        <Select.ItemText className={classNames.itemText}>{children}</Select.ItemText>
      </Select.Item>
    )
  }
)
