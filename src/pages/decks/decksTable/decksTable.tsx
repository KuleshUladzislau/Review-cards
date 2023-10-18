import { useNavigate } from 'react-router-dom'

import s from './decksTable.module.scss'

import { Table, TableHead, TBody, TCell, TRow } from '@/components/ui'
import { Sort } from '@/components/ui/table/types.ts'
import { columns } from '@/pages/decks/decksTable/columnData.ts'
import { TableIcons } from '@/pages/decks/decksTable/tableIcons/tableIcons.tsx'
import { GetDecksResponse } from '@/services/decks/types.ts'

type DecksTableProps = {
  data: GetDecksResponse | undefined
  sort?: Sort
  setSort: (sort: Sort) => void
}

export const DecksTable = ({ data, setSort, sort }: DecksTableProps) => {
  const navigate = useNavigate()
  const onNavigateHandler = (id: string) => {
    navigate(`/cards/${id}`)
  }

  return (
    <Table>
      <TableHead columns={columns} sort={sort} setSort={setSort} />
      <TBody>
        {data?.items.map(item => {
          return (
            <TRow key={item.id}>
              <TCell className={s.nameWrap} onClick={() => onNavigateHandler(item.id)}>
                {item.cover && <img className={s.cover} src={item.cover} alt={'deck cover'} />}
                {item.name}
              </TCell>
              <TCell>{item.cardsCount}</TCell>
              <TCell>{new Date(item.updated).toLocaleDateString()}</TCell>
              <TCell>{item.author.name}</TCell>
              <TCell>
                <TableIcons cardsCount={item.cardsCount} name={item.name} id={item.id} />
              </TCell>
            </TRow>
          )
        })}
      </TBody>
    </Table>
  )
}
