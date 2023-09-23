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

export const TextfieldDefault: Story = {
  args: {
    type: 'text',
    label: 'Input',
    placeholder: 'Input',
    disabled: true,
  },
}

export const TextfieldWithError: Story = {
  args: {
    type: 'text',
    label: 'Input',
    placeholder: 'Input',
    errorMessage: 'Error!',
  },
}

export const TextfieldPassword: Story = {
  args: {
    type: 'password',
    label: 'Input',
    placeholder: 'Password',
  },
}

export const TextfieldPasswordWithError: Story = {
  args: {
    type: 'password',
    label: 'Input',
    placeholder: 'Password',
    errorMessage: 'Error!',
  },
}

export const TextfieldSearch: Story = {
  args: {
    type: 'search',
    placeholder: 'Input search',
    search: true,
  },
}

export const TextfieldSearchWithError: Story = {
  args: {
    type: 'search',
    placeholder: 'Input search',
    errorMessage: 'Error!',
    search: true,
  },
}
