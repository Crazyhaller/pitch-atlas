import { Match, MatchEvent } from '@/types/match'

import events from '@/mock/events.json'

import { calculateMomentum } from '../data/calculateMomentum'
import { sampleMatches } from '../data/sampleFootball'

export async function fetchMatchDetails(
  matchId: number | string,
): Promise<Match | null> {
  try {
    const momentum = calculateMomentum()

    const baseMatch =
      sampleMatches.find((match) => match.id === Number(matchId)) ??
      sampleMatches[0]

    return {
      ...baseMatch,

      momentum,

      events: events as MatchEvent[],
    }
  } catch {
    return null
  }
}
