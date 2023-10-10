import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { OptionsType, SwitcherOptions } from '@/components/ui'

type SliderOptions = {
  minCardsCount: number
  maxCardsCount: number
}

type InitialState = {
  searchByName: string
  switcherOptions: SwitcherOptions[]
  pageSizeOptions: OptionsType[]
  currentPage: number
  itemsPerPage: OptionsType
  sliderOptions: SliderOptions
}

const initialState: InitialState = {
  searchByName: '',
  switcherOptions: [
    {
      label: 'My Cards',
      value: '1',
    },
    {
      label: 'All Cards',
      value: '2',
    },
  ],
  pageSizeOptions: [
    { label: '7', value: '7' },
    { label: '15', value: '15' },
    { label: '30', value: '30' },
  ],
  currentPage: 1,
  itemsPerPage: { label: '7', value: '7' },
  sliderOptions: {
    minCardsCount: 0,
    maxCardsCount: 52,
  },
}

const slice = createSlice({
  name: 'decks-settings',
  initialState,
  reducers: {
    setSearchByName(state, action: PayloadAction<{ searchName: string }>) {
      state.searchByName = action.payload.searchName
    },
    setCurrentPage(state, action: PayloadAction<{ currentPage: number }>) {
      state.currentPage = action.payload.currentPage
    },
    setPageSize(state, action: PayloadAction<{ pageSize: string }>) {
      state.itemsPerPage.value = action.payload.pageSize
    },
  },
})

export const { setSearchByName, setCurrentPage, setPageSize } = slice.actions

export const decksSettings = slice.reducer
