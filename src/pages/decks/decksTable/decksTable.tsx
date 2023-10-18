import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import s from './decksTable.module.scss'

import { Delete, Edit, Play } from '@/assets'
import { Table, TableHead, TBody, TCell, TRow } from '@/components/ui'
import { Column, Sort } from '@/components/ui/table/types.ts'
import { GetDecksDataItems, GetDecksResponse } from '@/services/decks/types.ts'

const columns: Column[] = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'cardsCount',
    title: 'Cards',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'created',
    title: 'Created by',
  },
]

type DecksTableProps = {
  data: GetDecksResponse | undefined
  sort?: Sort
  setSort: (sort: Sort) => void
}

export const DecksTable = ({ data, setSort, sort }: DecksTableProps) => {
  const navigate = useNavigate()
  const onNavigateTo = (id: string) => {
    navigate(`/cards/${id}`)
  }

  const onLearnHandler = (decksId: string, name: string, item: GetDecksDataItems) => {
    if (item.cardsCount) {
      navigate(`decks/learn/${decksId}`, { state: { decksName: name } })
    } else {
      toast.error('dont have cards')
    }
  }

  return (
    <Table>
      <TableHead columns={columns} sort={sort} setSort={setSort} />
      <TBody>
        {data?.items.map(item => {
          return (
            <TRow key={item.id}>
              <TCell onClick={() => onNavigateTo(item.id)}>{item.name}</TCell>
              <TCell>{item.cardsCount}</TCell>
              <TCell>{new Date(item.updated).toLocaleDateString()}</TCell>
              <TCell>{item.author.name}</TCell>
              <TCell>
                <div className={s.tableButtonsWrap}>
                  <Play
                    className={s.tableButton}
                    onClick={() => onLearnHandler(item.id, item.name, item)}
                  />
                  <Edit className={s.tableButton} />
                  <Delete className={s.tableButton} />
                </div>
              </TCell>
            </TRow>
          )
        })}
      </TBody>
    </Table>
  )
}
