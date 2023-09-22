import React from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radioButton.module.scss'

type Props = {
  onChange: (value: string) => void
  buttons: string[]
  className?: string
}

export const RadioButton = ({ onChange, buttons, className }: Props) => {
  const onChangeHandler = (value: string) => {
    onChange(value)
  }
  const items = buttons?.map(b => {
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
    <form>
      <RadioGroup.Root onValueChange={onChangeHandler} defaultValue={buttons[0]}>
        {items}
      </RadioGroup.Root>
    </form>
  )
}
