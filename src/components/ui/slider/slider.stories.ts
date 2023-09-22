import type { Meta, StoryObj } from '@storybook/react'

import { SliderCustom } from '../slider/slider'

const meta = {
  title: 'Components/Slider',
  component: SliderCustom,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SliderCustom>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    disable: false,
    min: 0,
    max: 15,
    step: 1,
  },
}

//storyDocs, args: OnChange
