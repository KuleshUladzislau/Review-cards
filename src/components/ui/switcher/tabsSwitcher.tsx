import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './tabsSwitcher.module.scss'

//Добавил типы для options, так как нужен обьект для Slice и key нежелательно чтобы совпадал c value, поэтому нужен id
export type SwitcherOptions = {
  id: string
  value: string
}

//Тут изменил onChange на onValueChange так как ругался TS когда передавал в onChange свою функцию
type TabsProps = {
  tabs: SwitcherOptions[]
  disabled?: boolean
  className?: string
} & ComponentPropsWithoutRef<typeof Tabs.Root>

export const TabsSwitcher = forwardRef<ElementRef<typeof Tabs.Root>, TabsProps>(
  ({ tabs, disabled = false, onValueChange, className, defaultValue }, ref) => {
    const mappedTabs = tabs.map(t => {
      return (
        <Tabs.Trigger
          key={t.id}
          value={t.value}
          className={`${s.default} ${className}`}
          disabled={disabled}
        >
          {t.value}
        </Tabs.Trigger>
      )
    })

    return (
      <Tabs.Root defaultValue={defaultValue} ref={ref} onValueChange={onValueChange}>
        <Tabs.List>{mappedTabs}</Tabs.List>
      </Tabs.Root>
    )
  }
)
