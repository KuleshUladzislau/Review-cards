import { configureStore } from '@reduxjs/toolkit'

import { baseApi } from '@/services/baseApi.ts'
import { cardsSettings } from '@/services/cards/cardsSlice.ts'
import { decksSettings } from '@/services/decks/decksSlice.ts'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    decksSettings,
    cardsSettings,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
