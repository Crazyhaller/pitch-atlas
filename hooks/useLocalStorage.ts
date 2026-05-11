'use client'

import { Dispatch, SetStateAction, useState } from 'react'

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (typeof window === 'undefined') {
        return initialValue
      }

      const item = window.localStorage.getItem(key)

      if (item) {
        return JSON.parse(item) as T
      }
    } catch {
      return initialValue
    }

    return initialValue
  })

  const setValue: Dispatch<SetStateAction<T>> = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value

      setStoredValue(valueToStore)

      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch {
      setStoredValue(initialValue)
    }
  }

  return [storedValue, setValue]
}
