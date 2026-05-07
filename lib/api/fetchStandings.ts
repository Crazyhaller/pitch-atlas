import { APP_CONFIG } from '@/constants/config'

import { FootballDataStandingsResponse } from '@/types/api'
import { TeamStanding } from '@/types/team'

export async function fetchStandings(): Promise<TeamStanding[]> {
  try {
    const response = await fetch(
      `${APP_CONFIG.api.footballDataBaseUrl}/competitions/${APP_CONFIG.defaults.leagueCode}/standings`,
      {
        headers: {
          'X-Auth-Token': process.env.NEXT_PUBLIC_FOOTBALL_DATA_API_KEY ?? '',
        },

        next: {
          revalidate: 600,
        },
      },
    )

    if (!response.ok) {
      throw new Error('Failed to fetch standings')
    }

    const data: FootballDataStandingsResponse = await response.json()

    return (
      data.standings?.[0]?.table.map((team) => ({
        position: team.position,

        playedGames: team.playedGames,

        won: team.won,

        draw: team.draw,

        lost: team.lost,

        goalsFor: team.goalsFor,

        goalsAgainst: team.goalsAgainst,

        goalDifference: team.goalDifference,

        points: team.points,
      })) ?? []
    )
  } catch (error) {
    console.error(error)

    return []
  }
}
