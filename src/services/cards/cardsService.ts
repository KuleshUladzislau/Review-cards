import { baseApi } from '@/services/baseApi.ts'
import { GetCardsResponse, GetDeckByIdResponse } from '@/services/cards/types.ts'

export const cardsService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCards: builder.query<GetCardsResponse, any>({
      query: ({ id, question, currentPage, itemsPerPage }) => ({
        url: `/v1/decks/${id}/cards`,
        method: 'GET',
        params: { question, currentPage, itemsPerPage },
      }),
      providesTags: ['Cards'],
    }),
    getDeckById: builder.query<GetDeckByIdResponse, any>({
      query: ({ id }) => ({
        url: `/v1/decks/${id}`,
        method: 'GET',
      }),
    }),
    addCard: builder.mutation<void, { id?: string; body: FormData }>({
      query: ({ id, body }) => ({
        url: `/v1/decks/${id}/cards`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Cards'],
    }),
    editCard: builder.mutation<void, { id?: string; body: FormData }>({
      query: ({ id, body }) => ({
        url: `/v1/cards/${id}`,
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: ['Cards'],
    }),
    deleteCard: builder.mutation<void, { id: string }>({
      query: ({ id}) => ({
        url: `/v1/cards/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cards'],
    }),
  }),
})

export const {
  useGetCardsQuery,
  useGetDeckByIdQuery,
  useAddCardMutation,
  useEditCardMutation,
  useDeleteCardMutation
} =
  cardsService
