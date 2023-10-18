import { useState } from 'react'

import s from './deleteCardModal.module.scss'

import { Delete } from '@/assets'
import { Button, Modal, Typography } from '@/components/ui'

type DeleteCardModalProps = {
  deckName: string
  deleteDeck: (id: string) => void
  id: string
}
export const DeleteCardModal = ({ deckName, deleteDeck, id }: DeleteCardModalProps) => {
  const [open, setOpen] = useState(false)

  const deleteDeckHandler = () => {
    deleteDeck(id)
    setOpen(false)
  }

  return (
    <>
      <Delete onClick={() => setOpen(true)} className={s.tableButton} />
      <Modal open={open} setOpen={setOpen} title={'Delete Deck'}>
        <Typography className={s.wrap} variant={'body1'}>
          Do you really want to remove <span className={s.deckName}>{deckName}?</span> <br />
          All cards will be deleted.
        </Typography>
        <div className={s.buttonsWrap}>
          <Button onClick={() => setOpen(false)} type={'reset'} variant={'secondary'}>
            Cancel
          </Button>
          <Button onClick={deleteDeckHandler}>Delete Deck</Button>
        </div>
      </Modal>
    </>
  )
}
