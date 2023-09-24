import { ComponentPropsWithoutRef, ReactNode, useState } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { Typography } from '../typography'

import s from './dropdown.module.scss'

type DropdownProps = {
  trigger?: ReactNode
  children?: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownMenu.Root>

export const CustomDropdown = ({ trigger, children }: DropdownProps) => {
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <button className={s.iconButton} aria-label="Customise options">
          {trigger}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.dropdownMenuContent} sideOffset={12}>
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

type DropdownItemProps = {
  children: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownMenu.Item>
export const CustomDropdownItem = ({ children }: DropdownItemProps) => {
  return <DropdownMenu.Item>{children}</DropdownMenu.Item>
}

type DropdownItemWithIconProps = {
  title: string
  icon?: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownMenu.Item>

export const CustomDropdownItemWithIcon = ({ title, icon }: DropdownItemWithIconProps) => {
  return (
    <DropdownMenu.Item className={s.dropdownMenuItem}>
      <div className={s.itemIcon}>{icon}</div>
      <Typography variant={'caption'}>{title}</Typography>
    </DropdownMenu.Item>
  )
}
