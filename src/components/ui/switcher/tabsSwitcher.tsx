import { FC, ReactNode, useState } from 'react'

import * as Tabs from '@radix-ui/react-tabs'
import { TabsContent } from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './tabsSwitcher.module.scss'

type TabType = {
  tabsName: string
  tabsChildren: ReactNode
}

type TabsProps = {
  tabs: TabType[]
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
  const [selectedValue, setSelectedValue] = useState(tabs[0].tabsName)
  const handleTabChange = (value: string) => {
    setSelectedValue(value)
    onChange(value)
  }

  const tabsButton = tabs.map(t => {
    const classNames = clsx(
      {
        [s.active]: selectedValue === t.tabsName,
        [s.default]: selectedValue !== t.tabsName,
      },
      className
    )

    return (
      <Tabs.Trigger key={t.tabsName} value={t.tabsName} className={classNames} disabled={disabled}>
        {t.tabsName}
      </Tabs.Trigger>
    )
  })

  const tabsContent = tabs.map(t => {
    return (
      <TabsContent key={t.tabsName} value={t.tabsName}>
        {t.tabsChildren}
      </TabsContent>
    )
  })

  return (
    <Tabs.Root defaultValue={selectedValue} onValueChange={handleTabChange}>
      <Tabs.List>{tabsButton}</Tabs.List>
      {tabsContent}
    </Tabs.Root>
  )
}
