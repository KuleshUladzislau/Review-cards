import type { Meta, StoryObj } from '@storybook/react'

import { TabsSwitcher } from './tabsSwitcher.tsx'
import {Card} from "../card";

const meta = {
  title: 'Components/TabsSwitcher',
  component: TabsSwitcher,
  tags: ['autodocs'],
  argTypes: {
    onChange: () => {},
  },
} satisfies Meta<typeof TabsSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const TwoButton: Story = {
  args: {
    tabs: [
      { tabsName: 'one', tabsChildren: <Card>content one</Card> },
      { tabsName: 'two', tabsChildren: <Card>content two</Card> },
    ],
  },
}

export const TwoButtonDisabled: Story = {
  args: {
    tabs: [
      { tabsName: 'one', tabsChildren: <Card>content one</Card> },
      { tabsName: 'two', tabsChildren: <Card>content two</Card> },
    ],
    disabled: true,
  },
}

export const ThreeButton: Story = {
  args: {
    tabs: [
      { tabsName: 'one', tabsChildren: <Card>content one</Card> },
      { tabsName: 'two', tabsChildren: <Card>content two</Card> },
      { tabsName: 'three', tabsChildren: <Card>content three</Card> },
    ],
  },
}

export const ThreeButtonDisabled: Story = {
  args: {
    tabs: [
      { tabsName: 'one', tabsChildren: <Card>content one</Card> },
      { tabsName: 'two', tabsChildren: <Card>content two</Card> },
      { tabsName: 'three', tabsChildren: <Card>content three</Card> },
    ],
    disabled: true,
  },
}
