import { useState } from 'react'

import { NavLink, useParams } from 'react-router-dom'

import cards from './cards.module.scss'

import { Delete, Edit } from '@/assets'
import LeftArrowDirection from '@/assets/icons/LeftArrowDirection.tsx'
import Loader from '@/assets/loader/loader.tsx'
import { useDebounce } from '@/common/hooks/useDebounce.ts'
import {
  Button,
  Pagination,
  Table,
  TableHead,
  TBody,
  TCell,
  Textfield,
  TRow,
  Typography,
} from '@/components/ui'
import { Raiting } from '@/components/ui/raiting/raiting.tsx'
import { useGetMeQuery } from '@/services/auth/authService.ts'
import { useGetCardsQuery, useGetDeckByIdQuery } from '@/services/cards'
import { setCurrentPage, setPageSize } from '@/services/cards/cardsSlice.ts'
import {
  selectCurrentPage,
  selectItemsPerPage,
  selectPageSizeOptions,
} from '@/services/decks/selectors.ts'
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
  const currentPage = useAppSelector(selectCurrentPage)
  const pageSizeOptions = useAppSelector(selectPageSizeOptions)
  const itemsPerPage = useAppSelector(selectItemsPerPage)

  const [searchName, setSearchName] = useState<string>('')
  const dispatch = useAppDispatch()

  const [sort, setSort] = useState<any>(null)
  const { id } = useParams()

  const newSearchName = useDebounce(searchName)

  const { data: deck } = useGetDeckByIdQuery({ id })
  const { data: meData } = useGetMeQuery()

  const onSearchByNameHandler = (value: string) => setSearchName(value)

  const currentPageChangeHandler = (page: number | string) => {
    dispatch(setCurrentPage({ currentPage: Number(page) }))
  }

  const pageSizeChangeHandler = (pageSize: number) => {
    dispatch(setPageSize({ pageSize: pageSize.toString() }))
  }

  const { data, isLoading } = useGetCardsQuery({
    currentPage,
    itemsPerPage: Number(itemsPerPage.value),
    question: newSearchName,
    id: id,
  })

  return (
    <div className={cards.wrapper}>
      <NavLink to={'/'} className={cards.navLinkStyle}>
        <LeftArrowDirection />
        {'Back to Packs List '}
      </NavLink>
      <div className={cards.headWrap}>
        <Typography variant={'large'}>{deck?.name}</Typography>
        {meData?.id !== deck?.userId ? (
          <Button>Learn to Pack</Button>
        ) : (
          <Button>Add New Card</Button>
        )}
      </div>
      <div className={cards.settingsWrap}>
        <div className={`${cards.TextFieldFullWith}`}>
          <Textfield
            value={searchName}
            search
            type={'search'}
            placeholder={'Input search'}
            className={cards.searchInput}
            onValueChange={onSearchByNameHandler}
          />
        </div>
      </div>
      {isLoading ? (
        <Loader className={cards.loaderWrapper} />
      ) : (
        data?.items.length !== 0 && (
          <>
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
                        {meData?.id === deck?.userId && (
                          <div className={cards.tableButtonsWrap}>
                            <Edit className={cards.tableButton} />
                            <Delete className={cards.tableButton} />
                          </div>
                        )}
                      </TCell>
                    </TRow>
                  )
                })}
              </TBody>
            </Table>
            <Pagination
              totalCount={data?.pagination.totalItems}
              currentPage={currentPage}
              pageSize={Number(itemsPerPage.value)}
              onPageSizeChange={pageSizeChangeHandler}
              onCurrentPageChange={currentPageChangeHandler}
              options={pageSizeOptions}
              portionValue={itemsPerPage.value.toString()}
            />
          </>
        )
      )}
      {data?.items.length === 0 && meData?.id === deck?.userId && (
        <div className={cards.addCardsWrapper}>
          <Typography variant={'body2'}>
            This pack is empty. Click add new card to fill this pack
          </Typography>
          <Button variant={'primary'}>Add New Card</Button>
        </div>
      )}
    </div>
  )
}
