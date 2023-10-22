import { baseApi } from '@/services/baseApi.ts'
import {
  CreateDeckRequest,
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
    deleteDeck: builder.mutation<void, DeleteDeckParamsType>({
      query: ({ id }) => {
        return {
          url: `/v1/decks/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: ['Decks'],
    }),
    editDeck: builder.mutation<GetDecksDataItems, { id: string; body: CreateDeckRequest }>({
      query: ({ id, body }) => {
        return {
          url: `/v1/decks/${id}`,
          method: 'PATCH',
          body,
        }
      },
    }),
  }),
})

export const { useGetDecksQuery, useCreateDeckMutation, useDeleteDeckMutation } = decksService
