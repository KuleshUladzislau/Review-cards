import type { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6'

import { SignIn } from './signIn.tsx'

const meta = {
  title: 'Auth/SignIn',
  component: SignIn,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: '/' },
    }),
  },
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>
export const SignInDef: Story = {
  args: {},
}
