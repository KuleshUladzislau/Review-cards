export type Column = {
  key: string
  title: string
}

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null
