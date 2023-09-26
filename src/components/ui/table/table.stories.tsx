import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Tables } from './tables.tsx'

const meta = {
  title: 'Components/Tables',
  component: Tables,
  tags: ['autodocs'],
} satisfies Meta<typeof Tables>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
