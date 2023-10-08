import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithMutex } from '@/services/base-api-query-with-reauth.ts'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithMutex,
  tagTypes: ['Auth', 'Decks'],
  endpoints: () => ({}),
})
