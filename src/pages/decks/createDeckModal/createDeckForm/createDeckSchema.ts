import { z } from 'zod'

export type CreateDeckValuesForm = z.infer<typeof createDeckSchema>

export const createDeckSchema = z.object({
  name: z.string().min(3),
  isPrivate: z.boolean().default(false),
})
