import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { DeleteModalMutation } from '../../deleteDeckModal/deleteModalMutation.tsx'

import s from './tableIcons.module.scss'

import { Play } from '@/assets'
import { EditDeckModal } from '@/pages/decks/editDeckModal/editDeckModal.tsx'
import { useDeleteDeckMutation } from '@/services/decks'
import { GetDecksDataItems } from '@/services/decks/types.ts'

type TableIconsProps = {
  deck: GetDecksDataItems
  isMeDecks?: boolean
}

export const TableIcons = ({ deck, isMeDecks }: TableIconsProps) => {
  const { name, cover, id, isPrivate, cardsCount } = deck
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
      {isMeDecks && (
        <EditDeckModal buttonTitle={'Save Changes'} id={id} values={{ name, cover, isPrivate }} />
      )}
      {isMeDecks && (
        <DeleteModalMutation
          deleteItem={deleteDeckHandler}
          itemName={name}
          id={id}
          titleForModal={'Delete Deck'}
          buttonName={'Delete Deck'}
        />
      )}
    </div>
  )
}
