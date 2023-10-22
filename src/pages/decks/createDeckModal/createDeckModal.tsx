import { useState } from 'react'

import { Button, Modal } from '@/components/ui'
import { CreateDeckForm } from '@/pages/decks/createDeckModal/createDeckForm/createDeckForm.tsx'
import { CreateDeckValuesForm } from '@/pages/decks/createDeckModal/createDeckForm/createDeckSchema.ts'
import { useCreateDeckMutation } from '@/services/decks'

type CreateDeckModalProps = {}

export const CreateDeckModal = ({}: CreateDeckModalProps) => {
  const [open, setOpen] = useState(false)
  const [cover, setCover] = useState<File | null>(null)

  const [createDeck] = useCreateDeckMutation()

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
    <>
      <Button onClick={() => setOpen(true)}>Add New Deck</Button>
      <Modal open={open} setOpen={setOpen} title={'Add New Deck'}>
        <CreateDeckForm
          setOpen={setOpen}
          onSubmit={onSubmitHandler}
          cover={cover}
          setCover={setCover}
        />
      </Modal>
    </>
  )
}
