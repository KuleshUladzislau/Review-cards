import { baseApi } from '@/services/baseApi.ts'
import {
  DeleteDeckParamsType,
  GetDecksDataItems,
  GetDecksRequest,
  GetDecksResponse,
} from '@/services/decks/types.ts'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<GetDecksResponse, GetDecksRequest>({
      query: args => {
        return {
          url: '/v1/decks',
          params: args,
        }
      },
      providesTags: ['Decks'],
    }),
    createDeck: builder.mutation<GetDecksDataItems, FormData>({
      query: formData => {
        return {
          url: '/v1/decks',
          method: 'POST',
          body: formData,
        }
      },
      invalidatesTags: ['Decks'],
    }),
    deleteDeck: builder.mutation<any, DeleteDeckParamsType>({
      query: ({ id }) => {
        return {
          url: `/v1/decks/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: ['Decks'],
    }),
  }),
})

export const { useGetDecksQuery, useCreateDeckMutation, useDeleteDeckMutation } = decksService
