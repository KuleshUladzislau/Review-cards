import { RootState } from '@/services/store.ts'

export const selectCurrentPage = (state: RootState) => state.cardsSettings.currentPage
export const selectPageSizeOptions = (state: RootState) => state.cardsSettings.pageSizeOptions
export const selectItemsPerPage = (state: RootState) => state.cardsSettings.itemsPerPage
