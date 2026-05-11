'use client'

import events from '@/mock/events.json'
import movement from '@/mock/playerMovement.json'

import DashboardLayout from '@/components/layout/DashboardLayout'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import ErrorState from '@/components/shared/ErrorState'
import ElevationChart from '@/components/charts/ElevationChart'
import EventMarkers from '@/components/charts/EventMarkers'
import TimelineSlider from '@/components/charts/TimelineSlider'
import EventInfoPanel from '@/components/explorer/EventInfoPanel'
import ExplorerCanvas from '@/components/explorer/ExplorerCanvas'
import MatchMiniMap from '@/components/explorer/MatchMiniMap'
import PlaybackControls from '@/components/explorer/PlaybackControls'

import { useMatches } from '@/hooks/useMatches'
import { useMomentumData } from '@/hooks/useMomentumData'
import { mapEventsToTimeline } from '@/lib/data/mapEventsToTimeline'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import {
  setCurrentTime,
  setSelectedEvent,
} from '@/store/slices/explorerSlice'
import { MatchEvent } from '@/types/match'
import { PlayerMovementPoint } from '@/types/player'

const explorerEvents = events as MatchEvent[]
const movementPoints = movement as PlayerMovementPoint[]

export default function ExplorerPage() {
  const { matches, loading, error } = useMatches()
  const momentum = useMomentumData()
  const dispatch = useAppDispatch()
  const currentTime = useAppSelector((state) => state.explorer.currentTime)
  const timelineEvents = mapEventsToTimeline(explorerEvents)
  const activeMatch = matches[0]

  return (
    <DashboardLayout>
      {loading && <LoadingSpinner fullScreen />}

      {error && (
        <ErrorState
          title="Explorer System Fallback Active"
          description="The live feed could not initialize, but the local cinematic replay engine is ready."
        />
      )}

      {!loading && (
        <>
          <section className="premium-panel relative overflow-hidden rounded-[28px] p-6 sm:p-8 md:p-10">
            <div className="absolute inset-0 grid-overlay opacity-[0.04]" />
            <div className="absolute right-[10%] top-0 h-56 w-56 rounded-full bg-emerald-400/10 blur-[120px]" />

            <div className="relative z-10 grid min-w-0 gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(300px,360px)] xl:items-end">
              <div className="min-w-0">
                <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-5 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#38FF9C]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#9FFFCF]">
                    Interactive Match Explorer
                  </span>
                </div>

                <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-6xl">
                  Football Terrain
                  <span className="gradient-text block">
                    Exploration Engine
                  </span>
                </h1>

                <p className="mt-7 max-w-3xl text-lg leading-9 text-white/62">
                  Replay tactical movements, event pressure, terrain heat, and
                  momentum elevation as one synchronized cinematic football
                  journey.
                </p>
              </div>

              <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4">
                {[
                  {
                    label: 'Match',
                    value: activeMatch
                      ? activeMatch.homeTeam.shortName
                      : 'MCI',
                  },
                  {
                    label: 'Minute',
                    value: `${Math.round(currentTime)}'`,
                  },
                  {
                    label: 'Events',
                    value: timelineEvents.length,
                  },
                  {
                    label: 'Terrain',
                    value: 'Elite',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[22px] border border-white/6 bg-white/[0.03] p-4 sm:p-5"
                  >
                    <h3 className="text-2xl font-black text-white sm:text-3xl">
                      {item.value}
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/40">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-6 grid min-w-0 gap-6 sm:mt-8 sm:gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(320px,390px)]">
            <div className="premium-panel min-w-0 space-y-6 rounded-[28px] p-5 sm:p-6">
              <div className="flex flex-col gap-5 2xl:flex-row 2xl:items-center 2xl:justify-between">
                <div className="min-w-0">
                  <h2 className="text-3xl font-black text-white">
                    Match Terrain
                  </h2>
                  <p className="mt-2 text-sm text-white/45">
                    Canvas heatmap, SVG event paths, replay controls
                  </p>
                </div>
                <PlaybackControls />
              </div>

              <ExplorerCanvas events={explorerEvents} movement={movementPoints} />

              <div className="rounded-[24px] border border-white/8 bg-[#06101b]/80 p-5">
                <TimelineSlider
                  value={currentTime}
                  onChange={(value) => dispatch(setCurrentTime(value))}
                />
                <EventMarkers
                  events={explorerEvents}
                  currentMinute={currentTime}
                  onSelect={(event) => dispatch(setSelectedEvent(event))}
                />
              </div>
            </div>

            <div className="min-w-0 space-y-6 sm:space-y-8">
              <EventInfoPanel fallbackEvent={explorerEvents[0]} />

              <div className="premium-panel rounded-[26px] p-5 sm:p-6">
                <div className="mb-5">
                  <h2 className="text-2xl font-black text-white">Minimap</h2>
                  <p className="mt-2 text-sm text-white/45">
                    Event density across the pitch
                  </p>
                </div>
                <MatchMiniMap
                  events={explorerEvents}
                  currentMinute={currentTime}
                />
              </div>

              <ElevationChart
                momentum={momentum}
                title="Momentum Overlay"
                subtitle="Synchronized tactical elevation"
              />
            </div>
          </section>
        </>
      )}
    </DashboardLayout>
  )
}
