import { createApi } from '@reduxjs/toolkit/query/react'
import { baseApiQuery } from '@/services/base-api-query-with-reauth.ts'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseApiQuery,
  tagTypes: ['Auth'],
  endpoints: () => ({}),
})
