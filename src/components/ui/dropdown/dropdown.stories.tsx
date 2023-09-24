import type { Meta, StoryObj } from '@storybook/react'

import { CustomDropdown, CustomDropdownItemWithIcon } from './dropdown.tsx'

import { Delete, DropdownMenu, Edit, Play } from '@/assets'

const meta = {
  title: 'Components/Dropdown',
  component: CustomDropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof CustomDropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Avatar = () => {
  return <img src={'https://placehold.co/24x24'} alt={'avatar'} />
}

export const DropdownDefault: Story = {
  args: {
    trigger: <DropdownMenu />,
    children: (
      <>
        <CustomDropdownItemWithIcon title={'Learn'} icon={<Play />} />
        <CustomDropdownItemWithIcon title={'Edit'} icon={<Edit />} />
        <CustomDropdownItemWithIcon title={'Delete'} icon={<Delete />} />
      </>
    ),
  },
}

export const DropdownWithAvatar: Story = {
  args: {
    trigger: <Avatar />,
  },
}
