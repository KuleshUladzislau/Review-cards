import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { Textfield } from '../../ui/textfield'
import type { TextfieldProps } from '../../ui/textfield'

export type ControlledTextFieldProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<TextfieldProps, 'onChange' | 'value'>

export const ControlledTextField = <TFieldValues extends FieldValues>({
  name,
  rules,
  shouldUnregister,
  control,
  ...textFieldProps
}: ControlledTextFieldProps<TFieldValues>
) => {

  const {
    field: { onChange, value = '' },
  } = useController({
    name,
    control,
    shouldUnregister,
    rules,
  })

  return (
    <Textfield
      {...{
        onChange,
        value,
        ...textFieldProps,
      }}
    />
  )
}
