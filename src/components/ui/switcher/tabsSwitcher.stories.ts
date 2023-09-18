import type { Meta, StoryObj } from '@storybook/react'

import { TabsSwitcher } from './tabsSwitcher.tsx'

const meta = {
  title: 'Components/TabsSwitcher',
  component: TabsSwitcher,
  tags: ['autodocs'],
  argTypes: {
    tabsName: ['all', 'completed'],
    onChange: () => {},
  },
} satisfies Meta<typeof TabsSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tabsName: ['one', 'two'],
  },
}

export const ThreeButton: Story = {
  args: {
    tabsName: ['one', 'two', 'three'],
  },
}

export const FourButton: Story = {
  args: {
    tabsName: ['one', 'two', 'three', 'four'],
  },
}
