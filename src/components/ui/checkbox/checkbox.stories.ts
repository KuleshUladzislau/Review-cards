import type { Meta, StoryObj } from '@storybook/react'

import { SuperCheckbox } from './checkbox.tsx'

const meta = {
  title: 'Components/Checkbox',
  component: SuperCheckbox,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'withText'],
      control: { type: 'radio' },
    },
    onChange: { action: 'checked changes' },
  },
} satisfies Meta<typeof SuperCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const ShowCheckbox: Story = {
  args: {
    variant: 'default',
    checked: true,
  },
}

export const DisabledCheckbox: Story = {
  args: {
    checked: true,
    disabled: true,
    variant: 'default',
  },
}

export const CheckboxWithText: Story = {
  args: {
    checked: false,
    variant: 'withText',
    checkBoxText: 'Test',
  },
}

export const DisabledCheckboxWithText: Story = {
  args: {
    checked: false,
    variant: 'withText',
    disabled: true,
    checkBoxText: 'Test',
  },
}
