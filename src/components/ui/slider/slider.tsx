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

  const onVolumeChangeHandler = (values: number[]) => {
    onChange(values)
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
      <div className={s.boxValue}>{min}</div>
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
      <div className={s.boxValue}>{max}</div>
    </form>
  )
}
