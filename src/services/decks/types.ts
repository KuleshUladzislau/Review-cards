export type GetDecksResponse = {
  items: GetDecksDataItems[]
  pagination: GetDecksDataPagination
  maxCardsCount: number
}
export type GetDecksDataItemsAuthor = {
  id: string
  name: string
}
export type GetDecksDataItems = {
  author: GetDecksDataItemsAuthor
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover: string
  rating: number
  created: string
  updated: string
  cardsCount: number
}
export type GetDecksDataPagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type GetDecksRequest = {
  minCardsCount?: string
  maxCardsCount?: string
  name?: string
  authorId?: string
  orderBy?: string
  currentPage?: number
  itemsPerPage?: number
}
