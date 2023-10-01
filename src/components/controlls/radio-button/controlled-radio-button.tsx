import { RadioProps } from '@radix-ui/react-radio-group'
import { useController } from 'react-hook-form'

import { RadioButton } from '@/components/ui/radioButton/radioButton.tsx'
type ControlledRadioButton = {
  control: any
} & RadioProps
export const ControlledRadioButton = ({ control, ...rest }: ControlledRadioButton) => {
  const {
    field: {},
  } = useController({
    name: '',
    control,
  })

  return <RadioButton />
}
