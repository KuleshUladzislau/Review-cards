import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './tabsSwitcher.module.scss'

type TabsProps = {
  tabs: string[]
  disabled?: boolean
  className?: string
  onChange: (value: string) => void
} & ComponentPropsWithoutRef<typeof Tabs.Root>

export const TabsSwitcher = forwardRef<ElementRef<typeof Tabs.Root>, TabsProps>(
  ({ tabs, disabled = false, onChange, className, defaultValue }, ref) => {
    const mapedTabs = tabs.map(t => {
      return (
        <Tabs.Trigger key={t} value={t} className={`${s.default} ${className}`} disabled={disabled}>
          {t}
        </Tabs.Trigger>
      )
    })

    return (
      <Tabs.Root defaultValue={defaultValue} ref={ref} onValueChange={onChange}>
        <Tabs.List>{mapedTabs}</Tabs.List>
      </Tabs.Root>
    )
  }
)
