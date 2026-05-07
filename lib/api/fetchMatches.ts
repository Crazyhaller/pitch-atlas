import { Match } from '@/types/match'

export async function fetchMatches(): Promise<Match[]> {
  const response = await fetch('/api/matches')

  if (!response.ok) {
    throw new Error('Failed to fetch matches')
  }

  const data = await response.json()

  return (
    data.matches?.map((match: any) => ({
      id: match.id,

      competition: match.competition?.name ?? '',

      league: {
        id: match.competition?.id,

        name: match.competition?.name ?? '',

        country: match.area?.name ?? '',
      },

      utcDate: match.utcDate,

      status: {
        short: match.status,

        long: match.status,
      },

      venue: {
        name: match.venue ?? 'Unknown Venue',
      },

      homeTeam: {
        id: match.homeTeam?.id,

        name: match.homeTeam?.name,

        shortName: match.homeTeam?.shortName,

        crest: match.homeTeam?.crest,
      },

      awayTeam: {
        id: match.awayTeam?.id,

        name: match.awayTeam?.name,

        shortName: match.awayTeam?.shortName,

        crest: match.awayTeam?.crest,
      },

      score: {
        home: match.score?.fullTime?.home ?? 0,

        away: match.score?.fullTime?.away ?? 0,
      },
    })) ?? []
  )
}
