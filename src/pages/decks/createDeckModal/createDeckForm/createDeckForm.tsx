import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ControlledTextField } from '@/components/controlls'
import { ControlledCheckbox } from '@/components/controlls/controlled-checkbox/controlled-checkbox.tsx'
import { Button } from '@/components/ui'
import { FilePicker } from '@/components/ui/filePicker/filePicker.tsx'
import s from '@/pages/decks/createDeckModal/createDeckModal.module.scss'

export type CreateDeckValuesForm = z.infer<typeof createDeckSchema>

const createDeckSchema = z.object({
  name: z.string().min(3),
  isPrivate: z.boolean().default(false),
  cover: z.any(),
})

type CreateDeckFormProps = {
  setOpen: (open: boolean) => void
  onSubmit: (data: CreateDeckValuesForm) => void
}

export const CreateDeckForm = ({ onSubmit, setOpen }: CreateDeckFormProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateDeckValuesForm>({
    resolver: zodResolver(createDeckSchema),
    defaultValues: { name: '', isPrivate: false, cover: '' },
  })

  return (
    <form className={s.formWrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.content}>
        <img src={'https://placehold.co/484x119'} alt={''} />
        <FilePicker />
        <ControlledTextField
          control={control}
          name={'name'}
          label={'Name Deck'}
          errorMessage={errors.name?.message}
        />
        <ControlledCheckbox name={'isPrivate'} control={control} label={'Private Deck'} />
      </div>
      <div className={s.buttonsWrap}>
        <Button onClick={() => setOpen(false)} type={'reset'} variant={'secondary'}>
          Cancel
        </Button>
        <Button type={'submit'}>Add New Deck</Button>
      </div>
    </form>
  )
}
