import s from './decksTable.module.scss'

import { Delete, Edit, Play } from '@/assets'
import { Table, TableHead, TBody, TCell, TRow } from '@/components/ui'
import { Column, Sort } from '@/components/ui/table/types.ts'
import { GetDecksResponse } from '@/services/decks/types.ts'

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
  return (
    <Table>
      <TableHead columns={columns} sort={sort} setSort={setSort} />
      <TBody>
        {data?.items.map(item => {
          return (
            <TRow key={item.id}>
              <TCell>{item.name}</TCell>
              <TCell>{item.cardsCount}</TCell>
              <TCell>{new Date(item.updated).toLocaleDateString()}</TCell>
              <TCell>{item.author.name}</TCell>
              <TCell>
                <div className={s.tableButtonsWrap}>
                  <Play className={s.tableButton} />
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