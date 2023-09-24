import { ComponentPropsWithoutRef } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radioButton.module.scss'

type Props = {
  options: string[]
  className?: string
} & ComponentPropsWithoutRef<typeof RadioGroup.Root>

export const RadioButton = ({ onValueChange, options, defaultValue, className }: Props) => {
  const buttons = options?.map(b => {
    return (
      <div className={s.container} key={b}>
        <RadioGroup.Item className={`${s.item} ${className}`} value={b} id={b}>
          <RadioGroup.Indicator className={s.indicator} />
        </RadioGroup.Item>
        <label htmlFor={b}>{b}</label>
      </div>
    )
  })

  return (
    <RadioGroup.Root onValueChange={onValueChange} defaultValue={defaultValue}>
      {buttons}
    </RadioGroup.Root>
  )
}
