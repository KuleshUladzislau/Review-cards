import { useState } from 'react'

import s from './decks.module.scss'

import Delete from '@/assets/icons/Delete.tsx'
import { useDebounce } from '@/common/hooks/useDebounce.ts'
import {
  Button,
  Pagination,
  SliderCustom,
  TabsSwitcher,
  Textfield,
  Typography,
} from '@/components/ui'
import { DecksTable } from '@/pages/decks/decksTable/decksTable.tsx'
import { useGetMeQuery } from '@/services/auth/authService.ts'
import { useGetDecksQuery } from '@/services/decks/decksService.ts'
import { setCurrentPage, setPageSize, setSearchByName } from '@/services/decks/decksSlice.ts'
import { useAppDispatch, useAppSelector } from '@/services/hooks.ts'

export const Decks = () => {
  const switcherOptions = useAppSelector(state => state.decksSettings.switcherOptions)
  const pageSizeOptions = useAppSelector(state => state.decksSettings.pageSizeOptions)
  const searchByName = useAppSelector(state => state.decksSettings.searchByName)
  const currentPage = useAppSelector(state => state.decksSettings.currentPage)
  const itemsPerPage = useAppSelector(state => state.decksSettings.itemsPerPage)

  const dispatch = useAppDispatch()

  const [switchOption, setSwitchOption] = useState(switcherOptions[1].value)
  const [userId, setUserId] = useState('')

  const newSearchName = useDebounce(searchByName, 500)

  const { data } = useGetDecksQuery({
    name: newSearchName,
    authorId: userId,
    currentPage,
    itemsPerPage: Number(itemsPerPage.value),
  })

  const { data: meData } = useGetMeQuery()

  const onSwitchCardsHandler = (value: string) => {
    setSwitchOption(value)
    if (value === switcherOptions[0].value) {
      setUserId(meData.id)
    } else {
      setUserId('')
    }
  }

  const onSearchByNameHandler = (value: string) => {
    dispatch(setSearchByName({ searchName: value }))
  }

  const currentPageChangeHandler = (page: number | string) => {
    dispatch(setCurrentPage({ currentPage: Number(page) }))
  }

  const pageSizeChangeHandler = (pageSize: number) => {
    dispatch(setPageSize({ pageSize }))
  }

  return (
    <div className={s.wrapper}>
      <div className={s.headWrap}>
        <Typography variant={'large'}>Decks</Typography>
        <Button onClick={() => {}}>Add New Deck</Button>
      </div>

      <div className={s.settingsWrap}>
        <div className={s.textFieldWrap}>
          <Textfield
            value={searchByName}
            search
            type={'search'}
            placeholder={'Input search'}
            className={s.searchInput}
            onValueChange={onSearchByNameHandler}
          />
        </div>
        <div className={s.tabsWrap}>
          <Typography variant={'body2'}>Show packs cards</Typography>
          <TabsSwitcher
            defaultValue={switchOption}
            tabs={switcherOptions}
            onValueChange={onSwitchCardsHandler}
          />
        </div>
        <div className={s.sliderWrap}>
          <Typography variant={'body2'}>Number of cards</Typography>
          <SliderCustom value={[0, 15]} />
        </div>

        <Button variant={'secondary'}>
          <Delete />
          Clear Filter
        </Button>
      </div>
      <DecksTable data={data} />
      <Pagination
        totalCount={data?.pagination.totalItems}
        currentPage={currentPage}
        pageSize={Number(itemsPerPage.value)}
        onPageSizeChange={pageSizeChangeHandler}
        onCurrentPageChange={currentPageChangeHandler}
        options={pageSizeOptions}
      />
    </div>
  )
}
