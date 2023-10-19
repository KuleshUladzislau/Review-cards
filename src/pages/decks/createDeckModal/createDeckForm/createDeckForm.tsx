import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import s from './createDeckForm.module.scss'

import { ControlledTextField } from '@/components/controlls'
import { ControlledCheckbox } from '@/components/controlls/controlled-checkbox/controlled-checkbox.tsx'
import { Button } from '@/components/ui'
import { FilePicker } from '@/components/ui/filePicker/filePicker.tsx'
import {
  createDeckSchema,
  CreateDeckValuesForm,
} from '@/pages/decks/createDeckModal/createDeckForm/createDeckSchema.ts'
import { useCreateDeckMutation } from '@/services/decks'

type CreateDeckFormProps = {
  setOpen: (open: boolean) => void
}

export const CreateDeckForm = ({ setOpen }: CreateDeckFormProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateDeckValuesForm>({
    resolver: zodResolver(createDeckSchema),
    defaultValues: { name: '', isPrivate: false },
  })

  const [cover, setCover] = useState<File | null>(null)
  const [createDeck] = useCreateDeckMutation()

  const imageUrl = cover ? URL.createObjectURL(cover) : 'https://placehold.co/484x119'

  const onSubmitHandler = (data: CreateDeckValuesForm) => {

    const { name, isPrivate } = data
    const formData = new FormData()

    formData.append('name', name)
    formData.append('isPrivate', String(isPrivate))
    cover && formData.append('cover', cover)
    createDeck(formData)

    setOpen(false)
  }

  return (
    <form className={s.formWrapper} onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={s.content}>
        <img className={s.cover} src={imageUrl} alt={'cover'} />
        <FilePicker setCover={setCover}  />
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
