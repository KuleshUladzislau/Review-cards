import { FC, useState } from 'react'

import * as Tabs from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './tabsSwitcher.module.scss'

type TabsProps = {
  tabs: string[]
  disabled?: boolean
  className?: string
  onChange: (value: string) => void
}

export const TabsSwitcher: FC<TabsProps> = ({
  tabs,
  disabled = false,
  className,
  onChange,
}: TabsProps) => {
  const [selectedValue, setSelectedValue] = useState(tabs[0])
  const handleTabChange = (value: string) => {
    setSelectedValue(value)
    onChange(value)
  }

  const mapedTabs = tabs.map(t => {
    const classNames = clsx(
      {
        [s.active]: selectedValue === t,
        [s.default]: selectedValue !== t,
      },
      className
    )

    return (
      <Tabs.Trigger key={t} value={t} className={classNames} disabled={disabled}>
        {t}
      </Tabs.Trigger>
    )
  })

  return (
    <Tabs.Root defaultValue={selectedValue} onValueChange={handleTabChange}>
      <Tabs.List>{mapedTabs}</Tabs.List>
    </Tabs.Root>
  )
}
