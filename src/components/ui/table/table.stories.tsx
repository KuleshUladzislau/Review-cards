import type { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'

import { CustomTable } from './table.tsx'

const meta = {
  title: 'Components/Table',
  component: CustomTable,
  tags: ['autodocs'],
} satisfies Meta<typeof CustomTable>

export default meta

type MyStory = StoryObj<typeof meta>

export const Default: MyStory = {
  args: {},
}
