import { Meta, StoryObj } from '@storybook/react'

import { RadioButton } from './radioButton.tsx'

const meta = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    onChange: (value: string) => {},
  },
} satisfies Meta<typeof RadioButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    buttons: ['one', 'two', 'three'],
  },
}
