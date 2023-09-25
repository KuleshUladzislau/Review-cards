import { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './avatar.tsx'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'John Doe',
    src: '',
  },
}

export const DefaultWithImage: Story = {
  args: {
    name: 'John Doe',
    src: 'https://placehold.co/36',
  },
}
