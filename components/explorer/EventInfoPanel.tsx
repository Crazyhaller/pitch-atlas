'use client'

import { MatchEvent } from '@/types/match'

import { useAppSelector } from '@/store/hooks'

interface EventInfoPanelProps {
  fallbackEvent?: MatchEvent
}

export default function EventInfoPanel({ fallbackEvent }: EventInfoPanelProps) {
  const selectedEvent = useAppSelector((state) => state.explorer.selectedEvent)
  const event = selectedEvent ?? fallbackEvent

  if (!event) {
    return (
      <div className="rounded-[28px] border border-white/8 bg-[#08111f]/75 p-6 backdrop-blur-2xl">
        <p className="text-sm text-white/55">
          Select a match node to inspect the tactical event.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-[28px] border border-white/8 bg-[#08111f]/75 p-6 backdrop-blur-2xl">
      <div className="mb-5 flex items-center justify-between gap-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
            Event Inspector
          </p>
          <h3 className="mt-2 text-2xl font-black capitalize text-white">
            {event.type.replace('-', ' ')}
          </h3>
        </div>
        <div className="rounded-full border border-emerald-400/15 bg-emerald-400/10 px-4 py-2 text-sm font-black text-[#38FF9C]">
          {event.minute}&apos;
        </div>
      </div>

      <div className="space-y-4">
        {[
          ['Player', event.player],
          ['Team', event.team],
          ['Coordinates', `${event.x}, ${event.y}`],
        ].map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3"
          >
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/36">
              {label}
            </span>
            <span className="text-right text-sm font-bold text-white">
              {value}
            </span>
          </div>
        ))}
      </div>

      {event.description && (
        <p className="mt-5 text-sm leading-7 text-white/55">
          {event.description}
        </p>
      )}
    </div>
  )
}
