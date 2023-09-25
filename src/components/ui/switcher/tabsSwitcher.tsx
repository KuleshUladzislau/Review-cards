import { ComponentPropsWithoutRef, FC } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './tabsSwitcher.module.scss'

type TabsProps = {
  tabs: string[]
  disabled?: boolean
  className?: string
  onChange: (value: string) => void
} & ComponentPropsWithoutRef<typeof Tabs.Root>

export const TabsSwitcher: FC<TabsProps> = ({
  tabs,
  disabled = false,
  onChange,
  defaultValue,
}: TabsProps) => {
  const mapedTabs = tabs.map(t => {
    return (
      <Tabs.Trigger key={t} value={t} className={s.default} disabled={disabled}>
        {t}
      </Tabs.Trigger>
    )
  })

  return (
    <Tabs.Root defaultValue={defaultValue} onValueChange={onChange}>
      <Tabs.List>{mapedTabs}</Tabs.List>
    </Tabs.Root>
  )
}
