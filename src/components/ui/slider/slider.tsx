import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as Slider from '@radix-ui/react-slider'

import style from './slider.module.scss'

type SliderProps = {
  onChange?: (value: number[]) => void
  value: string[] | number[]
} & ComponentPropsWithoutRef<typeof Slider.Root>

export const SliderCustom = forwardRef<ElementRef<typeof Slider.Root>, SliderProps>(
  (
    { onValueChange, step = 1, disabled, min, max, value, defaultValue, ...restProps }: SliderProps,
    ref
  ) => {
    return (
      <div className={style.sliderWrapper}>
        <span className={style.boxValue}>{value[0]}</span>
        <Slider.Root
          className={style.SliderRoot}
          defaultValue={defaultValue}
          step={step}
          min={min}
          max={max}
          value={value}
          onValueChange={onValueChange}
          ref={ref}
          disabled={disabled}
          {...restProps}
        >
          <Slider.Track className={style.SliderTrack}>
            <Slider.Range className={style.SliderRange} />
          </Slider.Track>
          <Slider.Thumb className={style.SliderThumb} />
          <Slider.Thumb className={style.SliderThumb} />
        </Slider.Root>
        <span className={style.boxValue}>{value[1]}</span>
      </div>
    )
  }
)
