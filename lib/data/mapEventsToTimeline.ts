import { MatchEvent } from '@/types/match'

export function mapEventsToTimeline(events: MatchEvent[]) {
  return events
    .sort((a, b) => a.minute - b.minute)
    .map((event) => ({
      ...event,

      label: `${event.minute}' ${event.player}`,

      position: (event.minute / 90) * 100,
    }))
}
