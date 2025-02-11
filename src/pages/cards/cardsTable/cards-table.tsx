import { GetCardsResponse } from '@/services/cards/types.ts'
import { Table, TableHead, TBody, TCell, TRow } from '@/components/ui'
import { Edit } from '@/assets'
import s from './cardsTable.module.scss'
import AddCardModal from "@/pages/cards/add-card-modal/add-card-modal.tsx";
import {useState} from "react";
import {useDeleteCardMutation, useEditCardMutation} from "@/services/cards";
import {DeleteModalMutation} from "@/pages/decks/deleteDeckModal/deleteModalMutation.tsx";

const columns = [
  {
    key: 'question',
    title: 'Question',
  },
  {
    key: 'answer',
    title: 'Answer',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'grade',
    title: 'Grade',
  },
]

type CardsProps = {
  data: GetCardsResponse | undefined
  isMeCards: boolean
}
export const CardsTable = ({ data, isMeCards }: CardsProps) => {

  const [openModal,setOpenModal] = useState(false)
  const [cardId,setCardId] = useState('')
  const [editCard] = useEditCardMutation()
  const [deleteCard] = useDeleteCardMutation()

  const onEditeCardHandler = (data:FormData) =>{
    editCard({id:cardId,body:data})
  }
  const onEditHandler = (id:string)=>{
    setCardId(id)
    setOpenModal(true)
  }

  const deleteCardHandler = (id:string) =>{
    deleteCard({id})
  }

  return (
    <>
      <Table>
        <TableHead columns={columns}/>
        <TBody>
          {data?.items.map(item => {
            return (
                <TRow key={item.id}>
                  <TCell>{item.question}</TCell>
                  <TCell>{item.answer}</TCell>
                  <TCell>{new Date(item.updated).toLocaleDateString()}</TCell>
                  <TCell>
                    {/*<Raiting grade={item.grade}/>*/}
                  </TCell>
                  <TCell>
                    {isMeCards && (
                        <div className={s.tableButtonsWrap}>
                          <Edit className={s.tableButton} onClick={() => onEditHandler(item.id)}/>
                          <DeleteModalMutation
                              itemName={item.question}
                              deleteItem={deleteCardHandler}
                              id={item.id}
                              titleForModal={'Delete Card'}
                              buttonName={'Delete Card'}
                          />
                        </div>
                    )}
                  </TCell>
                </TRow>
            )
          })}
        </TBody>
      </Table>
      <AddCardModal open={openModal} setOpen={setOpenModal} onSubmit={onEditeCardHandler}/>

    </>
  )
}
