import { FootballDataMatch } from '@/types/api'
import { Match } from '@/types/match'

export function transformMatchData(matches: FootballDataMatch[]): Match[] {
  return matches.map((match) => ({
    id: match.id,

    competition: 'Premier League',

    utcDate: match.utcDate,

    status: {
      short: match.status,
      long: match.status,
    },

    homeTeam: {
      id: match.homeTeam.id,
      name: match.homeTeam.name,
      shortName: match.homeTeam.shortName,
      crest: match.homeTeam.crest,
    },

    awayTeam: {
      id: match.awayTeam.id,
      name: match.awayTeam.name,
      shortName: match.awayTeam.shortName,
      crest: match.awayTeam.crest,
    },

    score: {
      home: match.score.fullTime.home ?? 0,

      away: match.score.fullTime.away ?? 0,
    },
  }))
}
