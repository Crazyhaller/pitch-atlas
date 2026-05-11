'use client'

import { use } from 'react'

import DashboardLayout from '@/components/layout/DashboardLayout'

import LoadingSpinner from '@/components/shared/LoadingSpinner'
import ErrorState from '@/components/shared/ErrorState'

import MatchCard from '@/components/dashboard/MatchCard'

import { useMatch } from '@/hooks/useMatch'

interface MatchDetailsPageProps {
  params: Promise<{
    id: string
  }>
}

export default function MatchDetailsPage({ params }: MatchDetailsPageProps) {
  const { id } = use(params)

  const { match, loading, error } = useMatch(id)

  return (
    <DashboardLayout>
      {/* LOADING */}

      {loading && <LoadingSpinner fullScreen />}

      {/* ERROR */}

      {error && (
        <ErrorState
          title="Failed To Load Match Terrain"
          description="The immersive match exploration system could not retrieve this football terrain experience."
        />
      )}

      {/* CONTENT */}

      {!loading && !error && match && (
        <>
          {/* HERO */}

          <section className="premium-panel relative overflow-hidden rounded-[28px] p-6 sm:p-8 md:p-10">
            {/* GLOW */}

            <div className="absolute left-[10%] top-0 h-48 w-48 rounded-full bg-emerald-400/10 blur-[100px]" />

            <div className="absolute bottom-0 right-[10%] h-56 w-56 rounded-full bg-lime-300/10 blur-[120px]" />

            {/* GRID */}

            <div className="absolute inset-0 grid-overlay opacity-[0.04]" />

            <div className="relative z-10">
              {/* BADGE */}

              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-5 py-2">
                <div className="h-2 w-2 rounded-full bg-[#38FF9C]" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#9FFFCF]">
                  Match Terrain Explorer
                </span>
              </div>

              {/* TITLE */}

              <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-6xl">
                {match.homeTeam.shortName}

                <span className="mx-4 text-white/25">vs</span>

                {match.awayTeam.shortName}

                <span className="gradient-text mt-4 block">
                  Spatial Match Analysis
                </span>
              </h1>

              {/* DESCRIPTION */}

              <p className="mt-7 max-w-3xl text-lg leading-9 text-white/62">
                Replay tactical transitions, terrain intensity, movement
                traversal, and momentum elevation through immersive football
                analytics exploration.
              </p>

              {/* META */}

              <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 xl:grid-cols-4">
                {[
                  {
                    label: 'Competition',
                    value: match.league.name,
                  },

                  {
                    label: 'Status',
                    value: match.status.short,
                  },

                  {
                    label: 'Terrain',
                    value: '91%',
                  },

                  {
                    label: 'Momentum',
                    value: 'Peak',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[22px] border border-white/6 bg-white/[0.03] p-5 sm:p-6"
                  >
                    <h3 className="text-2xl font-black text-white sm:text-3xl">
                      {item.value}
                    </h3>

                    <p className="mt-3 text-xs uppercase tracking-[0.14em] text-white/40">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* MATCH OVERVIEW */}

          <section className="mt-6 min-w-0 sm:mt-8">
            <MatchCard match={match} />
          </section>

          {/* MOMENTUM */}

          <section className="mt-6 grid min-w-0 gap-6 sm:mt-8 sm:gap-8 xl:grid-cols-2">
            {/* TERRAIN */}

            <div className="premium-panel relative min-w-0 overflow-hidden rounded-[26px] p-5 sm:p-7">
              <div className="mb-6">
                <h2 className="text-3xl font-black text-white">
                  Terrain Momentum
                </h2>

                <p className="mt-2 text-sm text-white/45">
                  Match elevation overview
                </p>
              </div>

              {/* CHART */}

              <div className="relative h-72 overflow-hidden rounded-[24px] border border-white/6 bg-[#06101b] sm:h-80">
                {/* GRID */}

                <div className="absolute inset-0 grid-overlay opacity-[0.06]" />

                {/* SVG */}

                <svg
                  viewBox="0 0 1000 320"
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full"
                >
                  <path
                    d="M0 250 C120 220, 180 240, 260 170 S420 90, 520 130 S680 40, 760 90 S920 60, 1000 30"
                    fill="none"
                    stroke="#38FF9C"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />

                  <path
                    d="M0 250 C120 220, 180 240, 260 170 S420 90, 520 130 S680 40, 760 90 S920 60, 1000 30 L1000 320 L0 320 Z"
                    fill="rgba(56,255,156,0.12)"
                  />
                </svg>
              </div>
            </div>

            {/* MATCH EVENTS */}

            <div className="premium-panel relative min-w-0 overflow-hidden rounded-[26px] p-5 sm:p-7">
              <div className="mb-6">
                <h2 className="text-3xl font-black text-white">
                  Tactical Events
                </h2>

                <p className="mt-2 text-sm text-white/45">
                  Spatial match journey
                </p>
              </div>

              {/* EVENTS */}

              <div className="space-y-4">
                {match.events?.slice(0, 5).map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center gap-4 rounded-[22px] border border-white/6 bg-white/[0.03] p-4 sm:gap-5 sm:p-5"
                  >
                    {/* MINUTE */}

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/15 bg-emerald-400/10 text-sm font-black text-[#38FF9C]">
                      {event.minute}&apos;
                    </div>

                    {/* INFO */}

                    <div className="flex-1">
                      <h3 className="font-bold text-white">{event.type}</h3>

                      <p className="mt-1 text-sm text-white/45">
                        {event.player}
                      </p>
                    </div>

                    {/* TEAM */}

                    <div className="rounded-full border border-white/8 bg-white/3 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/60">
                      {event.team}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </DashboardLayout>
  )
}
