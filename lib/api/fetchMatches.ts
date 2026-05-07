import { APP_CONFIG } from '@/constants/config'
import { FootballDataMatchesResponse } from '@/types/api'
import { Match } from '@/types/match'

import { transformMatchData } from '../data/transformMatchData'

export async function fetchMatches(): Promise<Match[]> {
  try {
    const response = await fetch(
      `${APP_CONFIG.api.footballDataBaseUrl}/competitions/${APP_CONFIG.defaults.leagueCode}/matches`,
      {
        headers: {
          'X-Auth-Token': process.env.NEXT_PUBLIC_FOOTBALL_DATA_API_KEY ?? '',
        },

        next: {
          revalidate: 300,
        },
      },
    )

    if (!response.ok) {
      throw new Error('Failed to fetch matches')
    }

    const data: FootballDataMatchesResponse = await response.json()

    return transformMatchData(
      data.matches.slice(0, APP_CONFIG.defaults.matchesLimit),
    )
  } catch (error) {
    console.error(error)

    return []
  }
}
