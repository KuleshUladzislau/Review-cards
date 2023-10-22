import { useState } from 'react'

import { Edit } from '@/assets'
import { Modal } from '@/components/ui'
import { DeckForm } from '@/pages/decks/createDeckModal/createDeckForm/deckForm.tsx'
import { CreateDeckModalProps } from '@/pages/decks/createDeckModal/createDeckModal.tsx'
import s from '@/pages/decks/decksTable/tableIcons/tableIcons.module.scss'
import { useEditDeckMutation } from '@/services/decks'

type EditDeckModalProps = CreateDeckModalProps & {
  id: string
}

export const EditDeckModal = ({ buttonTitle, id, values }: EditDeckModalProps) => {
  const [open, setOpen] = useState(false)

  const [editDeck] = useEditDeckMutation()

  const editDeckHandler = (data: FormData) => {
    editDeck({ id, body: data })
  }

  return (
    <>
      <Edit onClick={() => setOpen(true)} className={s.tableButton} />
      <Modal open={open} setOpen={setOpen} title={'Edit Deck'}>
        <DeckForm
          setOpen={setOpen}
          onChangeDeck={editDeckHandler}
          values={values}
          buttonTitle={buttonTitle}
        />
      </Modal>
    </>
  )
}
