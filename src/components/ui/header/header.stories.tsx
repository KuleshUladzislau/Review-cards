import { Meta, StoryObj } from '@storybook/react'

import Logo from '../../../assets/icons/Logo.tsx'
import { Header } from './header.tsx'
import { Button } from '../button'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {
    return (
      <div>
        <Header>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              padding: '10px',
            }}
          >
            <Logo />
            <Button onClick={() => {}} variant={'primary'} as={'button'}>
              Sign in
            </Button>
          </div>
        </Header>
        <div style={{ padding: '200px' }}>
          Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod temper ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor. Lorem
          ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod temper ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor. Lorem
          ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod temper ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor. Lorem
          ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod temper ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor.
        </div>
      </div>
    )
  },
}
