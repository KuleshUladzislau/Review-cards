import type { Meta } from '@storybook/react'

import { Button } from '../button/button'
import { Card, cardProps } from '../card/card'
import { Typography } from '../typography/typography'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Card>

export default meta

export const CardWithLoginIn = {
  render: (args: cardProps) => {
    return (
      <Card>
        <Typography variant={'h2'}>Login In</Typography>
        {args.children}
        <Button variant={'primary'} fullWidth={false} onClick={() => {}}>
          Button
        </Button>
      </Card>
    )
  },
}
