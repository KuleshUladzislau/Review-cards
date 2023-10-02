import type { Meta } from '@storybook/react'

import { CreateNewPassword } from './createNewPassword.tsx'

const meta = {
  title: 'auth/CreateNewPassword',
  component: CreateNewPassword,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CreateNewPassword>

export default meta

export const DefaultCreateNewPassword = {
  render: () => {
    return <CreateNewPassword />
  },
}
