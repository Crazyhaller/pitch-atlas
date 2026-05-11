'use client'

import { useEffect, useState } from 'react'

import { fetchPlayer } from '@/lib/api/fetchPlayer'

import { Player } from '@/types/player'

export function usePlayer(playerId: number | string) {
  const [player, setPlayer] = useState<Player | null>(null)

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadPlayer() {
      try {
        setLoading(true)

        const data = await fetchPlayer(playerId)

        setPlayer(data)
      } catch {
        setError('Failed to fetch player')
      } finally {
        setLoading(false)
      }
    }

    loadPlayer()
  }, [playerId])

  return {
    player,
    loading,
    error,
  }
}
