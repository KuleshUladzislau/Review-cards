import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './modal.tsx'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const ModalWithTitle: Story = {
  args: {
    open: true,
    children: 'HI!',
    title: 'Modal Title',
  },
}

export const ModalWithoutTitle: Story = {
  args: {
    open: true,
    children: 'HI!',
  },
}

export const ModalWithoutChildren: Story = {
  args: {
    open: true,
  },
}
