import { baseApi } from '@/services/baseApi.ts'
import { GetCardsResponse, getDeckByIdResponse } from '@/services/cards/types.ts'

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
    getDeckById: builder.query<getDeckByIdResponse, any>({
      query: ({ id }) => ({
        url: `/v1/decks/${id}`,
        method: 'GET',
      }),
    }),
    addCard:builder.mutation<void,{id?:string,body:FormData}>({
      query:({id,body})=>({
        url:`/v1/decks/${id}/cards`,
        method:'POST',
        body:body,
      }),
      invalidatesTags:['Cards']
    }),
    editCard:builder.mutation<void,{id?:string,body:FormData}>({
      query:({id,body})=>({
        url:`/v1/cards/${id}`,
        method:'POST',
        body:body,
      }),
      invalidatesTags:['Cards']
    }),
  }),
})

export const {
  useGetCardsQuery,
  useGetDeckByIdQuery,
  useAddCardMutation,
  useEditCardMutation
} = cardsService
