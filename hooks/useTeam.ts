'use client'

import { useEffect, useState } from 'react'

import { fetchTeam } from '@/lib/api/fetchTeam'

import { Team } from '@/types/team'

export function useTeam(teamId: number | string) {
  const [team, setTeam] = useState<Team | null>(null)

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadTeam() {
      try {
        setLoading(true)

        const data = await fetchTeam(teamId)

        setTeam(data)
      } catch (err) {
        console.error(err)

        setError('Failed to fetch team')
      } finally {
        setLoading(false)
      }
    }

    loadTeam()
  }, [teamId])

  return {
    team,
    loading,
    error,
  }
}
