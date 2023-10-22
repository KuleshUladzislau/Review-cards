import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import s from './deckForm.module.scss'

import { ControlledTextField } from '@/components/controlls'
import { ControlledCheckbox } from '@/components/controlls/controlled-checkbox/controlled-checkbox.tsx'
import { Button } from '@/components/ui'
import { FilePicker } from '@/components/ui/filePicker/filePicker.tsx'
import {
  deckSchema,
  DeckValuesForm,
} from '@/pages/decks/createDeckModal/createDeckForm/deckSchema.ts'

type DeckFormProps = {
  values?: {
    name: string
    isPrivate?: boolean
    cover?: string | null
  }
  setOpen: (open: boolean) => void
  onChangeDeck: (data: FormData) => void
  buttonTitle: string
}

export const DeckForm = ({ setOpen, onChangeDeck, values, buttonTitle}: DeckFormProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<DeckValuesForm>({
    resolver: zodResolver(deckSchema),
    defaultValues: { name: values?.name || '', isPrivate: values?.isPrivate || false },
  })

  const [cover, setCover] = useState<File | null>(null)

  const imageUrl = cover ? URL.createObjectURL(cover) : values?.cover
  const defaultCover = 'https://placehold.co/484x119'

  const onSubmitHandler = (data: DeckValuesForm) => {
    const { name, isPrivate } = data
    const formData = new FormData()

    formData.append('name', name)
    formData.append('isPrivate', String(isPrivate))
    cover && formData.append('cover', cover)
    onChangeDeck(formData)

    setOpen(false)
  }

  return (
    <form className={s.formWrapper} onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={s.content}>
        {imageUrl ? (
          <img className={s.cover} src={imageUrl} alt={'cover'} />
        ) : (
          <img className={s.cover} src={defaultCover} alt={'cover'} />
        )}
        <FilePicker setCover={setCover} />
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
        <Button type={'submit'}>{buttonTitle}</Button>
      </div>
    </form>
  )
}
