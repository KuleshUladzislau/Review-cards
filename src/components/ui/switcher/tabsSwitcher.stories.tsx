import type { Meta, StoryObj } from '@storybook/react'

import { TabsSwitcher } from './tabsSwitcher.tsx'

const meta = {
  title: 'Components/TabsSwitcher',
  component: TabsSwitcher,
  tags: ['autodocs'],
  argTypes: {
    onChange: () => {},
  },
} satisfies Meta<typeof TabsSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tabs: [
      { label: 'one', value: '1' },
      { label: 'two', value: '2' },
    ],
    defaultValue: 'one',
  },
}
