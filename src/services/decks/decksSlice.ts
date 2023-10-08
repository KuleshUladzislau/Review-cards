import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { SwitcherOptions } from '@/components/ui'

type InitialState = {
  searchByName: string
  switcherOptions: SwitcherOptions[]
}

const initialState: InitialState = {
  searchByName: '',
  switcherOptions: [
    {
      id: '1',
      value: 'My Cards',
    },
    {
      id: '2',
      value: 'All Cards',
    },
  ],
}

const slice = createSlice({
  name: 'decks-settings',
  initialState,
  reducers: {
    setSearchByName(state, action: PayloadAction<{ searchName: string }>) {
      state.searchByName = action.payload.searchName
    },
  },
})

export const {setSearchByName} = slice.actions

export const decksSettings = slice.reducer
