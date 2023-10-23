import { useEffect, useState } from 'react'

export function useDebounce(value: string) {
  const delay = 500
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value])

  return debouncedValue
}

export const useDebounceForSlider = (value: number[]) => {
  const delay = 500
  const [debouncedValue, setDebouncedValue] = useState({ min: value[0], max: value[1] })

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue({ min: value[0], max: value[1] })
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value])

  return debouncedValue
}
