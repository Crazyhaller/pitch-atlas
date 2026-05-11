import { Match } from '@/types/match'
import { FootballDataMatchesResponse } from '@/types/api'

import { transformMatchData } from '@/lib/data/transformMatchData'
import { sampleMatches } from '@/lib/data/sampleFootball'

export async function fetchMatches(): Promise<Match[]> {
  const response = await fetch('/api/matches')

  if (!response.ok) {
    return sampleMatches
  }

  const data: FootballDataMatchesResponse | Match[] = await response.json()

  if (Array.isArray(data)) {
    return data
  }

  return transformMatchData(data.matches ?? [])
}
