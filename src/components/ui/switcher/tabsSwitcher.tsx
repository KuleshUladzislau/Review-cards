import React, { FormEvent } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

type TabsProps = {
  tabsName: string[]
  disabled: boolean
}

export const TabsSwitcher: React.FC<TabsProps> = ({ tabsName, disabled }: TabsProps) => {
  const handleTabChange = (value: string) => {
    console.log('Selected value:', value)
    // Вы можете выполнить здесь любую логику, основанную на выбранном значении вкладки
  }
  const tabs = tabsName.map(t => <Tabs.Trigger key={t} value={t}>{t}</Tabs.Trigger>)

  return (
    <Tabs.Root defaultValue="account" onValueChange={handleTabChange}>
      <Tabs.List>
        {tabs}
      </Tabs.List>
    </Tabs.Root>
  )
}
