import { useState } from 'react'

import { Button, Modal } from '@/components/ui'
import {
  CreateDeckForm,
  CreateDeckValuesForm,
} from '@/pages/decks/createDeckModal/createDeckForm/createDeckForm.tsx'

type CreateDeckModalProps = {
  onSubmit: (data: CreateDeckValuesForm) => void
}

export const CreateDeckModal = ({ onSubmit }: CreateDeckModalProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Add New Deck</Button>
      <Modal open={open} setOpen={setOpen} title={'Add New Deck'}>
        <CreateDeckForm setOpen={setOpen} onSubmit={onSubmit} />
      </Modal>
    </>
  )
}
