import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { RadioButton, RadioButtonProps } from '@/components/ui/radioButton/radioButton.tsx'

type ControlledRadioButtonProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<RadioButtonProps, 'onChange' | 'value' | 'id'>

export const ControlledRadioButton = <TFieldValues extends FieldValues>({
  control,
  name,
  ...restProps
}: ControlledRadioButtonProps<TFieldValues>) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  })

  return <RadioButton onValueChange={onChange} value={value} {...restProps} />
}
