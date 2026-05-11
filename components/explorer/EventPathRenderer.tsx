'use client'

import { motion } from 'motion/react'

import { MatchEvent } from '@/types/match'

interface EventPathRendererProps {
  events: MatchEvent[]
  currentMinute: number
  onSelect?: (event: MatchEvent) => void
}

export default function EventPathRenderer({
  events,
  currentMinute,
  onSelect,
}: EventPathRendererProps) {
  const visibleEvents = events.filter((event) => event.minute <= currentMinute)
  const path = visibleEvents
    .map((event, index) => `${index === 0 ? 'M' : 'L'} ${event.x} ${event.y}`)
    .join(' ')

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
    >
      {visibleEvents.length > 1 && (
        <motion.path
          d={path}
          fill="none"
          stroke="#38FF9C"
          strokeWidth="0.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="2 2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6 }}
        />
      )}

      {events.map((event) => {
        const active = event.minute <= currentMinute

        return (
          <foreignObject
            key={event.id}
            x={event.x - 2.2}
            y={event.y - 2.2}
            width="4.4"
            height="4.4"
          >
            <button
              type="button"
              aria-label={`${event.type} by ${event.player}`}
              onClick={() => onSelect?.(event)}
              className={`h-full w-full rounded-full border transition-all ${
                active
                  ? 'border-white bg-[#38FF9C] shadow-[0_0_16px_rgba(56,255,156,0.8)]'
                  : 'border-white/35 bg-[#08111f]'
              }`}
            />
          </foreignObject>
        )
      })}
    </svg>
  )
}
