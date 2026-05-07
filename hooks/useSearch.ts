'use client'

import { useEffect, useState } from 'react'

import { useDebounce } from './useDebounce'

import { SearchResult } from '@/types/ui'

const MOCK_RESULTS: SearchResult[] = [
  {
    id: 1,
    type: 'player',
    title: 'Marcus Rashford',
    subtitle: 'FC Barcelona',
  },
  {
    id: 2,
    type: 'team',
    title: 'Manchester City',
    subtitle: 'Premier League',
  },
  {
    id: 3,
    type: 'match',
    title: 'Manchester City vs Arsenal',
    subtitle: 'Premier League',
  },
]

export function useSearch(query: string) {
  const debouncedQuery = useDebounce(query)

  const [results, setResults] = useState<SearchResult[]>([])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([])

      return
    }

    setLoading(true)

    const filtered = MOCK_RESULTS.filter((item) =>
      item.title.toLowerCase().includes(debouncedQuery.toLowerCase()),
    )

    const timer = setTimeout(() => {
      setResults(filtered)

      setLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [debouncedQuery])

  return {
    results,
    loading,
  }
}
