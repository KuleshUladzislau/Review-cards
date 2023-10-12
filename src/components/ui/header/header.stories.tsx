import { Meta, StoryObj } from '@storybook/react'

import { Header } from './header.tsx'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const AuthorizedUserHeader: Story = {
  args: {
    userName: 'Alexander',
    isLoggedIn: true,
    userPhoto: 'https://imgv3.fotor.com/images/gallery/american-anime-stule-naked-man-avatar.jpg',
    email: 'alexander@mail.ru',
  },
}

export const AnAuthorizedUser: Story = {
  args: {
    userName: 'Alexander',
    isLoggedIn: false,
  },
}
