import { useState } from 'react'

import { NavLink, useParams } from 'react-router-dom'

import c from './cards.module.scss'

import { Delete, Edit } from '@/assets'
import LeftArrowDirection from '@/assets/icons/LeftArrowDirection.tsx'
import {
  Button,
  Table,
  TableHead,
  TBody,
  TCell,
  Textfield,
  TRow,
  Typography,
} from '@/components/ui'
import { Raiting } from '@/components/ui/raiting/raiting.tsx'
import s from '@/pages/decks/decks.module.scss'
import { useGetMeQuery } from '@/services/auth/authService.ts'
import { useGetCardsQuery, useGetDeckByIdQuery } from '@/services/cards'
import { setSearchByName } from '@/services/decks/decksSlice.ts'
import { useAppDispatch, useAppSelector } from '@/services/hooks.ts'

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

export const Cards = () => {
  const searchByName = useAppSelector(state => state.decksSettings.searchByName)
  const dispatch = useAppDispatch()

  const [sort, setSort] = useState<any>(null)
  const { id } = useParams()

  const { data } = useGetCardsQuery({ id })
  const { data: deck } = useGetDeckByIdQuery({ id })
  const { data: meData } = useGetMeQuery()

  console.log(data)
  console.log(deck?.userId)
  console.log(meData.id)

  const onSearchByNameHandler = (value: string) => {
    dispatch(setSearchByName({ searchName: value }))
  }

  return (
    <div className={s.wrapper}>
      <NavLink to={'/'} className={c.navLinkStyle}>
        <LeftArrowDirection />
        {'Back to Packs List '}
      </NavLink>
      <div className={s.headWrap}>
        <Typography variant={'large'}>{deck?.name}</Typography>
        {meData.id !== deck?.userId ? (
          <Button>Learn to Pack</Button>
        ) : (
          <Button>Add New Card</Button>
        )}
      </div>
      <div className={s.settingsWrap}>
        <div className={`${s.textFieldWrap} ${c.TextFieldFullWith}`}>
          {/*подправить стиль инпута на full width*/}
          <Textfield
            value={searchByName}
            search
            type={'search'}
            placeholder={'Input search'}
            className={s.searchInput}
            onValueChange={onSearchByNameHandler}
          />
        </div>
      </div>

      <Table>
        <TableHead columns={columns} sort={sort} setSort={setSort} />
        <TBody>
          {data?.items.map(item => {
            return (
              <TRow key={item.id}>
                <TCell>{item.question}</TCell>
                <TCell>{item.answer}</TCell>
                <TCell>{new Date(item.updated).toLocaleDateString()}</TCell>
                <TCell>
                  <Raiting grade={item.grade} />
                </TCell>
                <TCell>
                  {meData.id === deck?.userId && (
                    <div className={s.tableButtonsWrap}>
                      <Edit className={s.tableButton} />
                      <Delete className={s.tableButton} />
                    </div>
                  )}
                </TCell>
              </TRow>
            )
          })}
        </TBody>
      </Table>
    </div>
  )
}
