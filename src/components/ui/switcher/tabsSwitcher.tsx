import { Tabs } from '@radix-ui/themes'
import s from 'tabsSwitcher.module.scss'

type TabsProps = {
  tabsName?: string[]
  disabled?: boolean
}

export const TabsSwitcher = ({ tabsName, disabled }: TabsProps) => {
  // const tabsTrigger = tabsName.map(t => (
  //   <Tabs.Trigger key={t} value={t}>
  //     {t}
  //   </Tabs.Trigger>
  // ))

  return (
    <Tabs.Root defaultValue="account">
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  )
}
