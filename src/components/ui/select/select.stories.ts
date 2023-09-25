import type { Meta, StoryObj } from '@storybook/react'

import { SelectCustom } from './select.tsx'

const meta = {
  title: 'Components/Select',
  component: SelectCustom,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SelectCustom>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSelect: Story = {
  args: {
    options: ['apple', 'banana', 'orange'],
    placeHolder: 'choose options...',
  },
}
