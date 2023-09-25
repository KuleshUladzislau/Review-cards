import { ComponentPropsWithoutRef, CSSProperties, ReactNode, useState } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import { Typography } from '../typography'

import s from './dropdown.module.scss'

type DropdownProps = {
  trigger?: ReactNode
  children?: ReactNode
  className?: string
  style?: CSSProperties
} & ComponentPropsWithoutRef<typeof DropdownMenu.Root>

export const CustomDropdown = ({ trigger, children, className, style }: DropdownProps) => {
  const [open, setOpen] = useState(false)

  const classNames = {
    content: clsx(s.dropdownMenuContent, className),
    itemsWrap: clsx(s.itemsWrap),
    arrowWrap: clsx(s.arrowWrap),
    arrow: clsx(s.arrow),
  }

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <button className={s.iconButton} aria-label="dropdown options">
          {trigger}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={classNames.content}
          sideOffset={8}
          style={style}
          onClick={event => event.stopPropagation()}
        >
          <DropdownMenu.Arrow className={classNames.arrowWrap} asChild>
            <div className={classNames.arrow} />
          </DropdownMenu.Arrow>
          <div className={classNames.itemsWrap}>{children}</div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

type DropdownItemProps = {
  children?: ReactNode
  style?: CSSProperties
  disabled?: boolean
  className?: string
} & ComponentPropsWithoutRef<typeof DropdownMenu.Item>
export const CustomDropdownItem = ({
  children,
  style,
  onSelect,
  disabled,
  className,
}: DropdownItemProps) => {
  const classNames = {
    item: clsx(s.dropdownMenuItem, className),
  }

  return (
    <DropdownMenu.Item
      onSelect={onSelect}
      style={style}
      disabled={disabled}
      className={classNames.item}
    >
      {children}
    </DropdownMenu.Item>
  )
}

type DropdownItemWithIconProps = Omit<DropdownItemProps, 'children'> & {
  title: string
  icon?: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownMenu.Item>

export const CustomDropdownItemWithIcon = ({
  title,
  icon,
  onSelect,
  disabled,
  className,
  style,
  ...rest
}: DropdownItemWithIconProps) => {
  const classNames = {
    item: clsx(s.dropdownMenuItem, className),
    icon: clsx(s.itemIcon),
  }

  return (
    <DropdownMenu.Item
      onSelect={onSelect}
      onClick={event => event.stopPropagation()}
      className={classNames.item}
      disabled={disabled}
      style={style}
      {...rest}
    >
      <div className={classNames.icon}>{icon}</div>
      <Typography variant={'caption'}>{title}</Typography>
    </DropdownMenu.Item>
  )
}