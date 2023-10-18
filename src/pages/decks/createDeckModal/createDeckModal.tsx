import { useState } from 'react'

import { Button, Modal } from '@/components/ui'
import { CreateDeckForm } from '@/pages/decks/createDeckModal/createDeckForm/createDeckForm.tsx'

type CreateDeckModalProps = {}

export const CreateDeckModal = ({}: CreateDeckModalProps) => {
  const [open, setOpen] = useState(false)



  return (
    <>
      <Button onClick={() => setOpen(true)}>Add New Deck</Button>
      <Modal open={open} setOpen={setOpen} title={'Add New Deck'}>
        <CreateDeckForm setOpen={setOpen} />
      </Modal>
    </>
  )
}
