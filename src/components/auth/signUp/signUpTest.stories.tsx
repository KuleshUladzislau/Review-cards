import type { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6'

import { SignUp } from '@/components/auth'

const meta = {
  title: 'Auth/SignUp',
  component: SignUp,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: '/' },
    }),
  },
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>
export const SignUpDef: Story = {
  args: {},
}
