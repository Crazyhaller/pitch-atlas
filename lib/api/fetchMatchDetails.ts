import { Match, MatchEvent } from '@/types/match'

import events from '@/mock/events.json'

import { calculateMomentum } from '../data/calculateMomentum'

export async function fetchMatchDetails(
  matchId: number | string,
): Promise<Match | null> {
  try {
    const momentum = calculateMomentum()

    return {
      id: Number(matchId),

      competition: 'Premier League',

      league: {
        id: 2021,

        name: 'Premier League',

        country: 'England',
      },

      utcDate: new Date().toISOString(),

      status: {
        short: 'LIVE',

        long: 'Live',
      },

      venue: {
        name: 'Signal Dome Arena',

        city: 'London',
      },

      homeTeam: {
        id: 1,

        name: 'Manchester City',

        shortName: 'MCI',

        crest: 'https://crests.football-data.org/65.png',
      },

      awayTeam: {
        id: 2,

        name: 'Arsenal',

        shortName: 'ARS',

        crest: 'https://crests.football-data.org/57.png',
      },

      score: {
        home: 2,

        away: 1,
      },

      momentum,

      events: events as MatchEvent[],
    }
  } catch (error) {
    console.error(error)

    return null
  }
}
