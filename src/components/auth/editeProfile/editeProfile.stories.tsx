import type { Meta, StoryObj } from '@storybook/react'

import { EditeProfile } from './editeProfile.tsx'

const meta = {
  title: 'Auth/EditeProfile',
  component: EditeProfile,
  tags: ['autodocs'],
} satisfies Meta<typeof EditeProfile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'Alexander',
    email: 'alexanders@mail.ru',
    src:'https://imgv3.fotor.com/images/gallery/american-anime-stule-naked-man-avatar.jpg'
  },
}
