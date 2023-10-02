import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radioButton.module.scss'

import { Typography } from '@/components/ui/typography'

type Options = {
  title: string
  value: string
}

type Props = {
  options: Options[]
  className?: string
} & ComponentPropsWithoutRef<typeof RadioGroup.Root>

export const RadioButton = forwardRef<ElementRef<typeof RadioGroup.Root>, Props>(
({
   onValueChange,
   options,
   defaultValue,
   className
 }
 ,
 ref
) => {

    const buttons = options.map(b => <RadioItem value={b.value} key={b.title} title={b.title} />)

    return (
      <RadioGroup.Root
        ref={ref}
        onValueChange={onValueChange}
        defaultValue={defaultValue}
        className={className}
      >
        {buttons}
      </RadioGroup.Root>
    )
  }
)

type RadioItemProps = {
  title: string
} & ComponentPropsWithoutRef<typeof RadioGroup.Item>

const RadioItem = forwardRef<ElementRef<typeof RadioGroup.Item>, RadioItemProps>(
({
  className,
  value,
  id,
  title
   },
   ref
) => {
    const classNames = {
      item: clsx(s.item, className),
      indicator: clsx(s.indicator),
    }

    return (
      <div className={s.container}>
        <RadioGroup.Item ref={ref} className={classNames.item} value={value} id={id}>
          <RadioGroup.Indicator className={classNames.indicator} />
        </RadioGroup.Item>
        <Typography as={'span'} variant={'body2'}>
          {title}
        </Typography>
      </div>
    )
  }
)
