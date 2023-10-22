import { useState } from 'react'

import { NavLink, useNavigate, useParams } from 'react-router-dom'

import c from './cards.module.scss'

import { Delete, DropdownMenu, Edit, Play } from '@/assets'
import LeftArrowDirection from '@/assets/icons/LeftArrowDirection.tsx'
import { useDebounce } from '@/common/hooks/useDebounce.ts'
import {
  Button,
  CustomDropdown,
  CustomDropdownItemWithIcon,
  Pagination,
  Textfield,
  Typography,
} from '@/components/ui'

import s from '@/pages/decks/decks.module.scss'
import { useGetMeQuery } from '@/services/auth/authService.ts'
import { useAddCardMutation, useGetCardsQuery, useGetDeckByIdQuery } from '@/services/cards'
import { setCurrentPage, setPageSize } from '@/services/cards/cardsSlice.ts'
import {
  selectCurrentPage,
  selectItemsPerPage,
  selectPageSizeOptions,
} from '@/services/decks/selectors.ts'
import { useAppDispatch, useAppSelector } from '@/services/hooks.ts'
import AddCardModal from '@/pages/cards/add-card-modal/add-card-modal.tsx'
import { CardsTable } from '@/pages/cards/cardsTable/cards-table.tsx'

export const Cards = () => {
  const currentPage = useAppSelector(selectCurrentPage)
  const pageSizeOptions = useAppSelector(selectPageSizeOptions)
  const itemsPerPage = useAppSelector(selectItemsPerPage)

  const [searchName, setSearchName] = useState<string>('')
  const dispatch = useAppDispatch()

  const { id } = useParams()

  const newSearchName = useDebounce(searchName, 500)

  const { data: deck } = useGetDeckByIdQuery({ id })
  const { data: meData } = useGetMeQuery()

  const [addCardModal, setAddCardModal] = useState(false)
  const onAddCardHandler = () => setAddCardModal(true)
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

  const [createCard] = useAddCardMutation()

  const navigate = useNavigate()
  const onLearnHandler = () => {
    navigate(`/decks/learn/${deck?.id}`, { state: { decksName: deck?.name } })
  }

  const createCardHandler = (data: FormData) => {
    createCard({ id, body: data })
  }

  const isMeCards = meData?.id === deck?.userId
  const isEmptyDecks = data?.items.length === 0

  return (
    <div className={s.wrapper}>
      <NavLink to={'/'} className={c.navLinkStyle}>
        <LeftArrowDirection />
        Back to Packs List
      </NavLink>
      <div className={s.headWrap}>
        <Typography variant={'large'} as={'div'}>
          {deck?.name}
          <CustomDropdown trigger={<DropdownMenu />} align={'end'}>
            <CustomDropdownItemWithIcon title={'Learn'} icon={<Play />} onClick={onLearnHandler} />
            <CustomDropdownItemWithIcon title={'Edit'} icon={<Edit />} />
            <CustomDropdownItemWithIcon title={'Delete'} icon={<Delete />} />
          </CustomDropdown>
        </Typography>
        {!isMeCards && <Button onClick={onLearnHandler}>Learn to Pack</Button>}
        {isMeCards && !isEmptyDecks && <Button onClick={onAddCardHandler}>Add New Card</Button>}
      </div>
      <div className={s.settingsWrap}>
        <div className={`${c.TextFieldFullWith}`}>
          {/*подправить стиль инпута на full width*/}
          {!isEmptyDecks && <Textfield
              value={searchName}
              search
              type={'search'}
              placeholder={'Input search'}
              className={s.searchInput}
              onValueChange={onSearchByNameHandler}
          />}
        </div>
      </div>


      {!isEmptyDecks && <>
        <CardsTable isMeCards={isMeCards} data={data}/>
        <Pagination
            totalCount={data?.pagination.totalItems}
            currentPage={currentPage}
            pageSize={Number(itemsPerPage.value)}
            onPageSizeChange={pageSizeChangeHandler}
            onCurrentPageChange={currentPageChangeHandler}
            options={pageSizeOptions}
            portionValue={itemsPerPage.value.toString()}
        />
      </>}


      {isEmptyDecks && isMeCards && (
        <div className={c.addCardsWrapper}>
          <Typography variant={'body2'}>
            This pack is empty. Click add new card to fill this pack
          </Typography>
          <Button variant={'primary'} onClick={onAddCardHandler}>Add New Card</Button>
        </div>
      )}
      <AddCardModal open={addCardModal} setOpen={setAddCardModal} onSubmit={createCardHandler} />
    </div>
  )
}
