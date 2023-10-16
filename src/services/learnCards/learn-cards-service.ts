import { baseApi } from '@/services/baseApi.ts'
import { CardType } from '@/services/learnCards/types.ts'

export const learnCardsService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCard: builder.query<CardType, { cardsId: string | undefined; previousCardId?: string }>({
      query: ({ cardsId }) => ({
        url: `/v1/decks/${cardsId}/learn`,
        method: 'GET',
      }),
    }),
    saveGradeCard: builder.mutation<
      void,
      { decksId: string | undefined; cardId: string | undefined; grade: number }
    >({
      query: ({ cardId, grade, decksId }) => {
        return {
          url: `/v1/decks/${decksId}/learn`,
          method: 'POST',
          body: { cardId, grade: grade },
        }
      },
    }),
  }),
})

export const { useGetCardQuery, useSaveGradeCardMutation, useLazyGetCardQuery } = learnCardsService
