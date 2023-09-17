import type { Meta, StoryObj } from '@storybook/react'

import { Textfield } from './textfield.tsx'

const meta = {
  title: 'Components/Textfield',
  component: Textfield,
  tags: ['autodocs'],
  argTypes: { onChange: { action: 'text changes' } },
} satisfies Meta<typeof Textfield>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Textfield',
    disabled: false,
  },
}
