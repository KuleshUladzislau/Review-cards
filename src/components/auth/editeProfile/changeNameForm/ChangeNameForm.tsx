import { ControlledTextField } from '../../../controlls'
import { Button } from '../../../ui/button'

import s from './changeNameForm.module.scss'
import { ChangeNameValidation, useChangeName } from './useChangeName.ts'

type Props = {
  name: string
  setEditeMode: (value: boolean) => void
}

export const ChangeName = ({ name, setEditeMode }: Props) => {
  const { handleSubmit, errors, control, setError } = useChangeName(name)
  const onSubmit = (data: ChangeNameValidation) => {
    if (name !== data.profileName) {
      console.log(data)
      setEditeMode(false)
    } else {
      setError('profileName', { message: 'this is the current name' })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.formContainer}>
      <div className={s.input}>
        <ControlledTextField
          label={'Nickname'}
          name="profileName"
          control={control}
          errorMessage={errors.profileName?.message}
        />
      </div>
      <Button className={s.submitButton}>Save Changes</Button>
    </form>
  )
}
