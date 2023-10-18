import { baseApi } from '@/services/baseApi.ts'
import { GetCardsResponse, getDeckByIdResponse } from '@/services/cards/types.ts'

export const cardsService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCards: builder.query<GetCardsResponse, any>({
      query: ({ id, question, currentPage, itemsPerPage }) => ({
        url: `/v1/decks/${id}/cards`,
        method: 'GET',
        params: { question, currentPage, itemsPerPage },
        providesTags: ['Cards'],
      }),
    }),
    getDeckById: builder.query<getDeckByIdResponse, any>({
      query: ({ id }) => ({
        url: `/v1/decks/${id}`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetCardsQuery, useGetDeckByIdQuery } = cardsService
