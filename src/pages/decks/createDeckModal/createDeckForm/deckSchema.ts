import { z } from 'zod'

export type DeckValuesForm = z.infer<typeof deckSchema>

export const deckSchema = z.object({
  name: z.string().min(3),
  isPrivate: z.boolean().default(false),
})
