import { ComponentPropsWithoutRef, FC } from 'react'

import * as Slider from '@radix-ui/react-slider'

import s from './slider.module.scss'

type SliderProps = {
  onChange?: (value: number[]) => void
} & ComponentPropsWithoutRef<typeof Slider.Root>

export const SliderCustom: FC<SliderProps> = ({
  onValueChange,
  step = 1,
  disabled,
  min,
  max,
  value,
  defaultValue,
  ...restProps
}) => {
  return (
    <div className={s.sliderWrapper}>
      <span className={s.boxValue}>{value![0]}</span>
      <Slider.Root
        className={s.SliderRoot}
        defaultValue={defaultValue}
        step={step}
        min={min}
        max={max}
        onValueChange={onValueChange}
        disabled={disabled}
        {...restProps}
      >
        <Slider.Track className={s.SliderTrack}>
          <Slider.Range className={s.SliderRange} />
        </Slider.Track>
        <Slider.Thumb className={s.SliderThumb} />
        <Slider.Thumb className={s.SliderThumb} />
      </Slider.Root>
      <span className={s.boxValue}>{value![1]}</span>
    </div>
  )
}
