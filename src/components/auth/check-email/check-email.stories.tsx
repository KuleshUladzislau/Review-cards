import type { Meta } from '@storybook/react'

import { CheckEmail } from './check-email.tsx'
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'auth/CheckEmail',
  component: CheckEmail,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: '/' },
    }),
  },
} satisfies Meta<typeof CheckEmail>

export default meta

export const DefaultCreateNewPassword = {
  args: {
    email: 'kulesh_uladzislau@mail.ru',
  },
}
