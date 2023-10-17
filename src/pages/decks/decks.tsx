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
import { CreateDeckValuesForm } from '@/pages/decks/createDeckModal/createDeckForm/createDeckForm.tsx'
import { CreateDeckModal } from '@/pages/decks/createDeckModal/createDeckModal.tsx'
import { DecksTable } from '@/pages/decks/decksTable'
import { useDeckSettings } from '@/pages/decks/hook'
import { useGetMeQuery } from '@/services/auth/authService.ts'
import { useCreateDeckMutation, useGetDecksQuery } from '@/services/decks/decksService.ts'
import { setCurrentPage, setPageSize, setSearchByName } from '@/services/decks/decksSlice.ts'
import { useAppDispatch, useAppSelector } from '@/services/hooks.ts'

export const Decks = () => {
  const switcherOptions = useAppSelector(state => state.decksSettings.switcherOptions)
  const pageSizeOptions = useAppSelector(state => state.decksSettings.pageSizeOptions)
  const searchByName = useAppSelector(state => state.decksSettings.searchByName)
  const currentPage = useAppSelector(state => state.decksSettings.currentPage)
  const itemsPerPage = useAppSelector(state => state.decksSettings.itemsPerPage)
  const { minCardsCount, maxCardsCount } = useAppSelector(
    state => state.decksSettings.sliderOptions
  )

  const dispatch = useAppDispatch()

  const newSearchName = useDebounce(searchByName, 500)
  const {
    userId,
    setUserId,
    sortedString,
    sort,
    setSort,
    setSliderValue,
    sliderValue,
    setSwitchOption,
    switchOption,
  } = useDeckSettings(minCardsCount, maxCardsCount, switcherOptions[1].value)

  const { data } = useGetDecksQuery({
    name: newSearchName,
    authorId: userId,
    minCardsCount: sliderValue.min.toString(),
    maxCardsCount: sliderValue.max.toString(),
    currentPage,
    orderBy: sortedString(),
    itemsPerPage: Number(itemsPerPage.value),
  })

  const { data: meData } = useGetMeQuery()

  const [createDeck] = useCreateDeckMutation()

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
    dispatch(setPageSize({ pageSize: pageSize.toString() }))
  }

  const changeSliderValueHandler = (value: number[]) => {
    setSliderValue({ min: value[0], max: value[1] })
  }

  const clearFiltersHandler = () => {
    setSwitchOption(switcherOptions[1].value)
    setUserId('')
    setSliderValue({ min: minCardsCount, max: maxCardsCount })
    setSort(null)
  }

  const onSubmitHandler = (data: CreateDeckValuesForm) => {
    const { name, isPrivate, cover } = data
    const formData = new FormData()

    formData.append('name', name)
    formData.append('isPrivate', String(isPrivate))
    cover && formData.append('cover', cover)
    createDeck(formData)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.headWrap}>
        <Typography variant={'large'}>Decks</Typography>
        <CreateDeckModal onSubmit={onSubmitHandler} />
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
            value={switchOption}
            defaultValue={switchOption}
            tabs={switcherOptions}
            onValueChange={onSwitchCardsHandler}
          />
        </div>
        <div className={s.sliderWrap}>
          <Typography variant={'body2'}>Number of cards</Typography>
          <SliderCustom
            min={minCardsCount}
            max={Number(data?.maxCardsCount)}
            value={[sliderValue.min, sliderValue.max]}
            defaultValue={[sliderValue.min, sliderValue.max]}
            onValueChange={changeSliderValueHandler}
          />
        </div>
        <Button onClick={clearFiltersHandler} variant={'secondary'}>
          <Delete />
          Clear Filter
        </Button>
      </div>
      <DecksTable data={data} sort={sort} setSort={setSort} />
      <Pagination
        portionValue={itemsPerPage.value.toString()}
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
