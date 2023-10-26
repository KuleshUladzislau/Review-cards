import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxProps, SuperCheckbox } from '@/components/ui'

const meta = {
  title: 'Components/Checkbox',
  component: SuperCheckbox,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'checked changes' },
  },
} satisfies Meta<typeof SuperCheckbox>

export default meta
type Story = StoryObj<typeof meta>

const CheckboxWithHooks = (args: CheckboxProps) => {
  const [checked, setChecked] = useState(false)
  const onCheckedChange = () => {
    setChecked(!checked)
  }

  return <SuperCheckbox {...args} checked={checked} onChange={onCheckedChange} />
}

export const ControlledWithLabel: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'Click here',
  },
  render: (args: CheckboxProps) => <CheckboxWithHooks {...args} />,
}
