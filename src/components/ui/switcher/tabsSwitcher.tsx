import React, { FormEvent } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

type TabsProps = {
  tabsName: string
  disabled: boolean
}

export const TabsSwitcher: React.FC<TabsProps> = ({ tabsName, disabled }: TabsProps) => {
  const handleTabChange = (value: string) => {
    console.log('Selected value:', value)
    // Вы можете выполнить здесь любую логику, основанную на выбранном значении вкладки
  }

  return (
    <Tabs.Root defaultValue="account" onValueChange={handleTabChange}>
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  )
}
