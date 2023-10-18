import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  pageSizeOptions: [
    { label: '7', value: '7' },
    { label: '15', value: '15' },
    { label: '30', value: '30' },
  ],
  currentPage: 1,
  itemsPerPage: { label: '7', value: '7' },
}

const slice = createSlice({
  name: 'cards-settings',
  initialState: initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<{ currentPage: number }>) {
      state.currentPage = action.payload.currentPage
    },
    setPageSize(state, action: PayloadAction<{ pageSize: string }>) {
      state.itemsPerPage.value = action.payload.pageSize
    },
  },
})

export const { setCurrentPage, setPageSize } = slice.actions
export const cardsSettings = slice.reducer
