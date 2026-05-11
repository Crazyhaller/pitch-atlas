'use client'

import { MatchEvent } from '@/types/match'

interface EventMarkersProps {
  events: MatchEvent[]
  currentMinute: number
  onSelect?: (event: MatchEvent) => void
}

export default function EventMarkers({
  events,
  currentMinute,
  onSelect,
}: EventMarkersProps) {
  return (
    <div className="relative h-10">
      <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-white/10" />
      <div
        className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-[#38FF9C]"
        style={{ width: `${Math.min((currentMinute / 90) * 100, 100)}%` }}
      />

      {events.map((event) => {
        const active = event.minute <= currentMinute

        return (
          <button
            key={event.id}
            type="button"
            aria-label={`${event.type} by ${event.player} at ${event.minute} minutes`}
            onClick={() => onSelect?.(event)}
            className={`absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-300 ${
              active
                ? 'border-white bg-[#38FF9C] shadow-[0_0_18px_rgba(56,255,156,0.7)]'
                : 'border-white/30 bg-[#08111f]'
            }`}
            style={{ left: `${(event.minute / 90) * 100}%` }}
          />
        )
      })}
    </div>
  )
}
