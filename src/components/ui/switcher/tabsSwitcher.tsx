import { FC } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './tabsSwitcher.module.scss'

type TabsProps = {
  tabsName: string[]
  disabled?: boolean
  className?: string
}

export const TabsSwitcher: FC<TabsProps> = ({ tabsName, disabled, className }: TabsProps) => {
  const handleTabChange = (value: string) => {
    console.log('Selected value:', value)
    // Вы можете выполнить здесь любую логику, основанную на выбранном значении вкладки
  }

  const classNames = s.default

  const tabs = tabsName.map(t => (
    <Tabs.Trigger key={t} value={t} className={classNames} >
      {t}
    </Tabs.Trigger>
  ))

  return (
    <Tabs.Root defaultValue="account" onValueChange={handleTabChange}>
      <Tabs.List>{tabs}</Tabs.List>
    </Tabs.Root>
  )
}
