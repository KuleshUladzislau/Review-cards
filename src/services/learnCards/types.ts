export type CardType = {
  id: string
  question: string
  answer: string
  deckId: string
  questionImg: null | string
  answerImg: null | string
  questionVideo: null | string
  answerVideo: null | string
  created: Date
  updated: Date
  shots: number
  grade: number
}
