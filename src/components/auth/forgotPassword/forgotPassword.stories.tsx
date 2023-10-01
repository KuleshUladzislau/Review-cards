import type { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'

import { ForgotPassword } from './forgotPassword.tsx'

const meta = {
  title: 'Auth/ForgotPassword',
  component: ForgotPassword,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {},
}
