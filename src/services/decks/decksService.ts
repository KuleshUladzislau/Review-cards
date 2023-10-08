import { baseApi } from '@/services/baseApi.ts'
import { GetDecksData } from '@/services/decks/deckService.types.ts'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<GetDecksData, void>({
      query: () => 'v1/decks',
    }),
  }),
})

export const { useGetDecksQuery } = decksService
