import type { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card/card.tsx'
import { Typography } from '@/components/ui/typography'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const LoginInCard: Story = {
  args: {
    children: (
      <>
        <Typography variant={'h2'}>Login In</Typography>
        <Button variant={'primary'} fullWidth={false} onClick={() => {}}>
          Button
        </Button>
      </>
    ),
  },
}
