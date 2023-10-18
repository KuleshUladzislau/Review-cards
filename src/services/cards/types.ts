import { GetDecksDataPagination } from '@/services/decks/types.ts'

export type GetCardsResponse = {
  items: GetCardsDataItems[]
  pagination: GetDecksDataPagination
  maxCardsCount: number
}

export type GetCardsDataItems = {
  id: string
  question: string
  answer: string
  deckId: string
  questionImg: null | string
  answerImg: null | string
  questionVideo: null
  answerVideo: null
  created: Date
  updated: Date
  shots: number
  grade: number
  userId: string
}

export type GetCardsRequest = {
  id: string
  question?: string
  answer?: string
  orderBy?: string
  currentPage?: number
  itemsPerPage?: number
}

export type getDeckByIdResponse = {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover?: null
  rating: number
  isDeleted?: null
  isBlocked?: null
  created: string
  updated: string
  cardsCount: number
}
