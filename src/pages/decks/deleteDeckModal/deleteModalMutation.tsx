import { useState } from 'react'

import s from './deleteCardModal.module.scss'

import { Delete } from '@/assets'
import { Button, Modal, Typography } from '@/components/ui'

type DeleteCardModalProps = {
  itemName: string
  deleteItem: (id: string) => void
  id: string
  titleForModal:string
  buttonName:string
}
export const DeleteModalMutation = ({ itemName, deleteItem, id ,titleForModal,buttonName }: DeleteCardModalProps) => {
  const [open, setOpen] = useState(false)

  const deleteDeckHandler = () => {
    deleteItem(id)
    setOpen(false)
  }

  return (
    <>
      <Delete onClick={() => setOpen(true)} className={s.tableButton} />
      <Modal open={open} setOpen={setOpen} title={titleForModal}>
        <Typography className={s.wrap} variant={'body1'}>
          Do you really want to remove <span className={s.deckName}>{itemName}?</span> <br />
          All cards will be deleted.
        </Typography>
        <div className={s.buttonsWrap}>
          <Button onClick={() => setOpen(false)} type={'reset'} variant={'secondary'}>
            Cancel
          </Button>
          <Button onClick={deleteDeckHandler}>{buttonName}</Button>
        </div>
      </Modal>
    </>
  )
}
