import s from './decks.module.scss'

import Delete from '@/assets/icons/Delete.tsx'
import {
  Button,
  Pagination,
  SliderCustom,
  TabsSwitcher,
  Textfield,
  Typography,
} from '@/components/ui'
import { DecksTable } from '@/pages/decks/decksTable/decksTable.tsx'

export const Decks = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.headWrap}>
        <Typography variant={'large'}>Decks</Typography>
        <Button>Add New Deck</Button>
      </div>

      <div className={s.settingsWrap}>
        <div className={s.textFieldWrap}>
          <Textfield search placeholder={'Input search'} className={s.searchInput} />
        </div>
        <div className={s.tabsWrap}>
          <Typography variant={'body2'}>Show packs cards</Typography>
          <TabsSwitcher tabs={['My Cards', 'All Cards']} onChange={() => {}} />
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
      <DecksTable />
      <Pagination
        totalCount={100}
        currentPage={1}
        pageSize={10}
        onPageSizeChange={() => {}}
        onCurrentPageChange={() => {}}
        options={[]}
      />
    </div>
  )
}
