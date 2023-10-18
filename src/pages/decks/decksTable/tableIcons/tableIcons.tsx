import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import s from './tableIcons.module.scss'

import { Edit, Play } from '@/assets'
import { DeleteCardModal } from '@/pages/decks/deleteDeckModal/deleteCardModal.tsx'
import { useDeleteDeckMutation } from '@/services/decks'

type TableIconsProps = {
  cardsCount: number
  id: string
  name: string
}

export const TableIcons = ({ cardsCount, name, id }: TableIconsProps) => {
  const navigate = useNavigate()

  const [deleteDeck] = useDeleteDeckMutation()
  const onLearnHandler = (decksId: string, name: string) => {
    if (cardsCount) {
      navigate(`decks/learn/${decksId}`, { state: { decksName: name } })
    } else {
      toast.error('dont have cards')
    }
  }

  const deleteDeckHandler = (id: string) => {
    deleteDeck({ id })
  }

  return (
    <div className={s.tableButtonsWrap}>
      <Play className={s.tableButton} onClick={() => onLearnHandler(id, name)} />
      <Edit className={s.tableButton} />
      <DeleteCardModal deleteDeck={deleteDeckHandler} deckName={name} id={id} />
    </div>
  )
}
