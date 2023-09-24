import { ComponentPropsWithoutRef, ElementRef , forwardRef } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './tabsSwitcher.module.scss'

type Props = {
  tabs: string[]
  disabled?: boolean
  className?: string
  onChange: (value: string) => void
} & ComponentPropsWithoutRef<typeof Tabs.Root>

export const TabsSwitcher = forwardRef<ElementRef<typeof Tabs.Root>, Props>(
  (
    {
      tabs,
        disabled = false,
        onChange,
        defaultValue
    },
    ref
  ) => {
    const mapedTabs = tabs.map(t => {
      return (
        <Tabs.Trigger key={t} value={t} className={s.default} disabled={disabled}>
          {t}
        </Tabs.Trigger>
      )
    })

    return (
      <Tabs.Root defaultValue={defaultValue} onValueChange={onChange} ref={ref}>
        <Tabs.List>{mapedTabs}</Tabs.List>
      </Tabs.Root>
    )
  }
)
