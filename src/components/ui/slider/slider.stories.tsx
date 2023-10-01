import { useState } from 'react'

import type { Meta } from '@storybook/react'

import { SliderCustom } from '@/components/ui/slider'

const meta = {
  title: 'Components/Slider',
  component: SliderCustom,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SliderCustom>

export default meta

export const Default = {
  render: () => {
    const min = 0
    const max = 15
    const [val, setValues] = useState({ min: 0, max: 15 })
    const onChangeHandler = (values: number[]) => {
      setValues({ min: values[0], max: values[1] })
    }

    return (
      <SliderCustom
        min={min}
        max={max}
        onValueChange={onChangeHandler}
        value={[val.min, val.max]}
        defaultValue={[min, max]}
      />
    )
  },
}

//storyDocs, args: OnChange
