import type { Meta, StoryObj } from '@storybook/react'
import { LearnCardsPage } from '@/pages/learn-cards-page/learn-cards-page.tsx'


const meta = {
  title: 'Page/LearnCardsPage',
  component: LearnCardsPage,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'link'],
      control: { type: 'radio' },
    },
  },

} satisfies Meta<typeof LearnCardsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
