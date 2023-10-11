import { useState } from 'react'

import { Sort } from '@/components/ui/table/types.ts'

export const useDeckSettings = (
  minCardsCount: number,
  maxCardsCount: number,
  switcherOption: string
) => {
  const [switchOption, setSwitchOption] = useState(switcherOption)
  const [userId, setUserId] = useState('')
  const [sliderValue, setSliderValue] = useState({ min: minCardsCount, max: maxCardsCount })
  const [sort, setSort] = useState<Sort>(null)

  const sortedString = () => {
    if (!sort) return null

    return `${sort.key}-${sort.direction}`
  }

  return {
    sortedString,
    userId,
    setUserId,
    sort,
    setSort,
    switchOption,
    setSwitchOption,
    sliderValue,
    setSliderValue,
  }
}
