import { useState } from 'react'

import { Button, Modal } from '@/components/ui'
import { DeckForm } from '@/pages/decks/createDeckModal/createDeckForm/deckForm.tsx'
import { useCreateDeckMutation } from '@/services/decks'

export type CreateDeckModalProps = {
  values?: {
    name: string
    isPrivate?: boolean
    cover?: string | null
  }
  buttonTitle: string
}

export const CreateDeckModal = ({ buttonTitle }: CreateDeckModalProps) => {
  const [open, setOpen] = useState(false)

  const [createDeck] = useCreateDeckMutation()

  return (
    <>
      <Button onClick={() => setOpen(true)}>Add New Deck</Button>
      <Modal open={open} setOpen={setOpen} title={'Add New Deck'}>
        <DeckForm setOpen={setOpen} onChangeDeck={createDeck} buttonTitle={buttonTitle} />
      </Modal>
    </>
  )
}
