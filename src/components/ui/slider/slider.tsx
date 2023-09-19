import { useState } from 'react'

import * as Slider from '@radix-ui/react-slider'

import s from './slider.module.scss'

type SliderProps = {
  onChange: (value: number | number[]) => void
  disable?: boolean
  min: number
  max: number
  step?: number
}

export const SliderCustom = (props: SliderProps) => {
  const { onChange, min, max, step, disable } = props

  const [minValue, setMin] = useState(min)
  const [maxValue, setMax] = useState(max)

  const onVolumeChangeHandler = (values: number[]) => {
    setMin(values[0])
    setMax(values[1])
    // onChange(values)
  }

  return (
    <form
      style={{
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      <div className={s.boxValue}>{minValue}</div>
      <Slider.Root
        className={s.SliderRoot}
        defaultValue={[min, max]}
        step={step}
        max={max}
        onValueChange={onVolumeChangeHandler}
        disabled={disable}
      >
        <Slider.Track className={s.SliderTrack}>
          <Slider.Range className={s.SliderRange} />
        </Slider.Track>
        <Slider.Thumb className={s.SliderThumb} />
        <Slider.Thumb className={s.SliderThumb} />
      </Slider.Root>
      <div className={s.boxValue}>{maxValue}</div>
    </form>
  )
}
