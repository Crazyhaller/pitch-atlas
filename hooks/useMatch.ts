'use client'

import { useEffect, useState } from 'react'

import { fetchMatchDetails } from '@/lib/api/fetchMatchDetails'

import { Match } from '@/types/match'

export function useMatch(matchId: number | string) {
  const [match, setMatch] = useState<Match | null>(null)

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadMatch() {
      try {
        setLoading(true)

        const data = await fetchMatchDetails(matchId)

        setMatch(data)
      } catch (err) {
        console.error(err)

        setError('Failed to fetch match')
      } finally {
        setLoading(false)
      }
    }

    loadMatch()
  }, [matchId])

  return {
    match,
    loading,
    error,
  }
}
