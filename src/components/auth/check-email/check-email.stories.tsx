import type { Meta } from '@storybook/react'

import { CheckEmail } from './check-email.tsx'

const meta = {
  title: 'auth/CheckEmail',
  component: CheckEmail,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CheckEmail>

export default meta

export const DefaultCreateNewPassword = {
  args: {
    email: 'kulesh_uladzislau@mail.ru'
  }  ,
}
