import { MatchEvent } from '@/types/match'

interface MatchMiniMapProps {
  events: MatchEvent[]
  currentMinute: number
}

export default function MatchMiniMap({
  events,
  currentMinute,
}: MatchMiniMapProps) {
  return (
    <div className="relative aspect-[1.55/1] overflow-hidden rounded-[24px] border border-white/8 bg-[#0d5f33]">
      <div className="absolute inset-3 rounded-[18px] border border-white/25" />
      <div className="absolute left-1/2 top-3 h-[calc(100%-1.5rem)] w-px -translate-x-1/2 bg-white/20" />
      {events.map((event) => (
        <div
          key={event.id}
          className={`absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${
            event.minute <= currentMinute ? 'bg-[#38FF9C]' : 'bg-white/35'
          }`}
          style={{
            left: `${event.x}%`,
            top: `${event.y}%`,
          }}
        />
      ))}
    </div>
  )
}
