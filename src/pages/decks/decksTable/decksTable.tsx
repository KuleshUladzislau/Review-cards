import { useState } from 'react'

import { Delete, Edit, Play } from '@/assets'
import { Table, TableHead, TBody, TCell, TRow } from '@/components/ui'
import { Column, Sort } from '@/components/ui/table/types.ts'
import { useGetDecksQuery } from '@/services/decks/decksService.ts'

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
    key: 'createdBy',
    title: 'Created by',
  },
]

export const DecksTable = () => {
  const [sort, setSort] = useState<Sort>(null)

  const { data } = useGetDecksQuery()

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
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                  <Play />
                  <Edit />
                  <Delete />
                </div>
              </TCell>
            </TRow>
          )
        })}
      </TBody>
    </Table>
  )
}