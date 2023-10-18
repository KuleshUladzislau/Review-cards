import { useState } from 'react'

import { Button, Modal } from '@/components/ui'
import {
  CreateDeckForm,
  CreateDeckValuesForm,
} from '@/pages/decks/createDeckModal/createDeckForm/createDeckForm.tsx'
import { useCreateDeckMutation } from '@/services/decks'

type CreateDeckModalProps = {}

export const CreateDeckModal = ({}: CreateDeckModalProps) => {
  const [open, setOpen] = useState(false)

  const [createDeck] = useCreateDeckMutation()

  const onSubmitHandler = (data: CreateDeckValuesForm) => {
    const { name, isPrivate, cover } = data
    const formData = new FormData()

    formData.append('name', name)
    formData.append('isPrivate', String(isPrivate))
    cover && formData.append('cover', cover)
    createDeck(formData)

    setOpen(false)
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>Add New Deck</Button>
      <Modal open={open} setOpen={setOpen} title={'Add New Deck'}>
        <CreateDeckForm setOpen={setOpen} onSubmit={onSubmitHandler} />
      </Modal>
    </>
  )
}
