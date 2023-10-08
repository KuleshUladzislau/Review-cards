import { baseApi } from '@/services/baseApi.ts'
import { GetDecksRequest, GetDecksResponse } from '@/services/decks/types.ts'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<GetDecksResponse, GetDecksRequest>({
      query: args => {
        return {
          url: 'v1/decks',
          params: args,
        }
      },
      providesTags: ['Decks'],
    }),
    createDeck: builder.mutation<any, any>({
      query: body => {
        return {
          url: 'v1/decks',
          method: 'POST',
          body,
        }
      },
    }),
  }),
})

export const { useGetDecksQuery, useCreateDeckMutation } = decksService
