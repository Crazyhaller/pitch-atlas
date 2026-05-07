'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>] {
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key)

      if (item) {
        setStoredValue(JSON.parse(item))
      }
    } catch (error) {
      console.error('Failed to read localStorage:', error)
    }
  }, [key])

  const setValue: Dispatch<SetStateAction<T>> = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value

      setStoredValue(valueToStore)

      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error('Failed to save localStorage:', error)
    }
  }

  return [storedValue, setValue]
}
