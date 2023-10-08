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
import { setSearchByName } from '@/services/decks/decksSlice.ts'
import { useAppDispatch, useAppSelector } from '@/services/hooks.ts'

export const Decks = () => {
  const switcherOptions = useAppSelector(state => state.decksSettings.switcherOptions)
  const searchByName = useAppSelector(state => state.decksSettings.searchByName)

  const dispatch = useAppDispatch()

  const [switchOption, setSwitchOption] = useState(switcherOptions[1].value)
  const [userId, setUserId] = useState('')

  const newSearchName = useDebounce(searchByName, 500)

  const { data } = useGetDecksQuery({
    name: newSearchName,
    authorId: userId,
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
        totalCount={100}
        currentPage={1}
        pageSize={10}
        onPageSizeChange={() => {}}
        onCurrentPageChange={() => {}}
        options={[
          { title: '5', value: '5' },
          { title: '7', value: '7' },
          { title: '10', value: '10' },
        ]}
      />
    </div>
  )
}
