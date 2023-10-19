import { useState } from 'react'

import { NavLink, useParams } from 'react-router-dom'

import c from './cards.module.scss'

import { Delete, Edit } from '@/assets'
import LeftArrowDirection from '@/assets/icons/LeftArrowDirection.tsx'
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
import s from '@/pages/decks/decks.module.scss'
import { useGetMeQuery } from '@/services/auth/authService.ts'
import { useGetCardsQuery, useGetDeckByIdQuery } from '@/services/cards'
import { setCurrentPage, setPageSize } from '@/services/cards/cardsSlice.ts'
import {
  selectCurrentPage,
  selectItemsPerPage,
  selectPageSizeOptions,
} from '@/services/decks/selectors.ts'
import { useAppDispatch, useAppSelector } from '@/services/hooks.ts'
import AddCardModal from "@/pages/cards/add-card-modal/add-card-modal.tsx";

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

  const newSearchName = useDebounce(searchName, 500)

  const { data: deck } = useGetDeckByIdQuery({ id })
  const { data: meData } = useGetMeQuery()
  const [addCardModal,setAddCardModal] = useState(false)
  const onAddCardHandler = (open:boolean) => setAddCardModal(open)
  const onSearchByNameHandler = (value: string) => setSearchName(value)

  const currentPageChangeHandler = (page: number | string) => {
    dispatch(setCurrentPage({ currentPage: Number(page) }))
  }

  const pageSizeChangeHandler = (pageSize: number) => {
    dispatch(setPageSize({ pageSize: pageSize.toString() }))
  }

  const { data } = useGetCardsQuery({
    currentPage,
    itemsPerPage: Number(itemsPerPage.value),
    question: newSearchName,
    id: id,
  })

  return (
    <div className={s.wrapper}>
      <NavLink to={'/'} className={c.navLinkStyle}>
        <LeftArrowDirection />
        {'Back to Packs List '}
      </NavLink>
      <div className={s.headWrap}>
        <Typography variant={'large'}>{deck?.name}</Typography>
        {meData?.id !== deck?.userId ? (
          <Button>Learn to Pack</Button>
        ) : (
          <Button onClick={()=>onAddCardHandler(true)}>Add New Card</Button>
        )}
      </div>
      <div className={s.settingsWrap}>
        <div className={`${s.textFieldWrap} ${c.TextFieldFullWith}`}>
          {/*подправить стиль инпута на full width*/}
          <Textfield
            value={searchName}
            search
            type={'search'}
            placeholder={'Input search'}
            className={s.searchInput}
            onValueChange={onSearchByNameHandler}
          />
        </div>
      </div>
      {data?.items.length !== 0 && (
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
      )}
      {data?.items.length === 0 && meData?.id === deck?.userId && (
        <div className={c.addCardsWrapper}>
          <Typography variant={'body2'}>
            This pack is empty. Click add new card to fill this pack
          </Typography>
          <Button variant={'primary'}>Add New Card</Button>
        </div>
      )}
      <AddCardModal open={addCardModal} setOpen={setAddCardModal}/>
    </div>
  )
}
