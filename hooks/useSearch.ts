'use client'

import { useEffect, useState } from 'react'

import { sampleMatches, samplePlayers, sampleTeams } from '@/lib/data/sampleFootball'
import { SearchResult } from '@/types/ui'

import { useDebounce } from './useDebounce'

const SEARCH_INDEX: SearchResult[] = [
  ...samplePlayers.map((player) => ({
    id: player.id,
    type: 'player' as const,
    title: player.name,
    subtitle: typeof player.team === 'string' ? player.team : player.team.name,
  })),
  ...sampleTeams.map((team) => ({
    id: team.id,
    type: 'team' as const,
    title: team.name,
    subtitle: 'Premier League',
  })),
  ...sampleMatches.map((match) => ({
    id: match.id,
    type: 'match' as const,
    title: `${match.homeTeam.name} vs ${match.awayTeam.name}`,
    subtitle: `${match.league.name} - ${match.status.long}`,
  })),
]

function scoreResult(query: string, result: SearchResult) {
  const haystack = `${result.title} ${result.subtitle ?? ''}`.toLowerCase()

  if (haystack.includes(query)) {
    return query.length / haystack.length
  }

  let cursor = 0

  for (const letter of query) {
    const nextIndex = haystack.indexOf(letter, cursor)

    if (nextIndex === -1) {
      return 0
    }

    cursor = nextIndex + 1
  }

  return 0.18
}

export function useSearch(query: string) {
  const debouncedQuery = useDebounce(query)
  const [results, setResults] = useState<SearchResult[]>([])

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      const timer = window.setTimeout(() => {
        setResults([])
      }, 0)

      return () => window.clearTimeout(timer)
    }

    const timer = window.setTimeout(() => {
      const normalizedQuery = debouncedQuery.trim().toLowerCase()
      const filtered = SEARCH_INDEX.map((item) => ({
        item,
        score: scoreResult(normalizedQuery, item),
      }))
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 8)
        .map(({ item }) => item)

      setResults(filtered)
    }, 300)

    return () => window.clearTimeout(timer)
  }, [debouncedQuery])

  return {
    results,
    loading: Boolean(query.trim() && query !== debouncedQuery),
  }
}
