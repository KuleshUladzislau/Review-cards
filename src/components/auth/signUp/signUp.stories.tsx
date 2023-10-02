import type { Meta } from '@storybook/react'

import { SignUp } from './signUp.tsx'

const meta = {
  title: 'auth/signUp',
  component: SignUp,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SignUp>

export default meta

export const DefaultSignUp = {
  render: () => {
    return <SignUp></SignUp>
  },
}
