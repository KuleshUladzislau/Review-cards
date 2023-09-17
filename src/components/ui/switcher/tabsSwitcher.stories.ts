import type { Meta, StoryObj } from '@storybook/react'

import { TabsSwitcher } from './tabsSwitcher.tsx'

const meta = {
  title: 'Components/TabsSwitcher',
  component: TabsSwitcher,
  tags: ['autodocs'],
} satisfies Meta<typeof TabsSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tabsName:['all','completed']
  },
}
