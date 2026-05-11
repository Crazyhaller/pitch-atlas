'use client'

import { use } from 'react'

import DashboardLayout from '@/components/layout/DashboardLayout'

import LoadingSpinner from '@/components/shared/LoadingSpinner'
import ErrorState from '@/components/shared/ErrorState'
import FavoriteButton from '@/components/shared/FavoriteButton'

import TeamStatsCard from '@/components/dashboard/TeamStatsCard'
import PlayerStatsTable from '@/components/dashboard/PlayerStatsTable'

import { useTeam } from '@/hooks/useTeam'

interface TeamPageProps {
  params: Promise<{
    id: string
  }>
}

export default function TeamPage({ params }: TeamPageProps) {
  const { id } = use(params)

  const { team, loading, error } = useTeam(id)

  return (
    <DashboardLayout>
      {/* LOADING */}

      {loading && <LoadingSpinner fullScreen />}

      {/* ERROR */}

      {error && (
        <ErrorState
          title="Failed To Load Team Terrain"
          description="The football terrain exploration system could not retrieve this team profile."
        />
      )}

      {/* CONTENT */}

      {!loading && !error && team && (
        <>
          {/* HERO */}

          <section className="premium-panel relative overflow-hidden rounded-[28px] p-6 sm:p-8 md:p-10">
            {/* GLOW */}

            <div className="absolute left-[10%] top-0 h-48 w-48 rounded-full bg-emerald-400/10 blur-[100px]" />

            <div className="absolute bottom-0 right-[10%] h-56 w-56 rounded-full bg-lime-300/10 blur-[120px]" />

            {/* GRID */}

            <div className="absolute inset-0 grid-overlay opacity-[0.04]" />

            <div className="relative z-10">
              <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
                {/* LEFT */}

                <div className="flex min-w-0 flex-col gap-6 md:flex-row md:items-center md:gap-8">
                  {/* CREST */}

                  <div className="relative">
                    <div className="absolute inset-0 rounded-[36px] bg-emerald-400/20 blur-3xl" />

                    <div className="relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-[28px] border border-white/8 bg-[#0b1524] sm:h-44 sm:w-44 sm:rounded-[36px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={team.crest}
                        alt={team.name}
                        className="h-28 w-28 object-contain"
                      />
                    </div>
                  </div>

                  {/* INFO */}

                  <div className="min-w-0">
                    {/* BADGE */}

                    <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-5 py-2">
                      <div className="h-2 w-2 rounded-full bg-[#38FF9C]" />

                      <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#9FFFCF]">
                        Terrain Club Profile
                      </span>
                    </div>

                    {/* TITLE */}

                    <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-6xl">
                      {team.name}
                    </h1>

                    {/* META */}

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      {[team.area?.name, team.venue, `${team.founded}`]
                        .filter(Boolean)
                        .map((item) => (
                          <div
                            key={item}
                            className="rounded-full border border-white/8 bg-white/3 px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white/65"
                          >
                            {item}
                          </div>
                        ))}
                    </div>

                    {/* DESCRIPTION */}

                    <p className="mt-7 max-w-2xl text-lg leading-9 text-white/62">
                      Explore tactical terrain systems, squad traversal, spatial
                      analytics, momentum structures, and immersive football
                      intelligence visualization.
                    </p>
                  </div>
                </div>

                {/* RIGHT */}

                <div className="flex shrink-0 flex-col items-start gap-6 xl:items-end">
                  <FavoriteButton
                    entity={{
                      id: team.id,
                      type: 'team',
                      name: team.name,
                    }}
                    size="lg"
                  />

                  <div className="grid w-full grid-cols-2 gap-3 sm:gap-4 xl:w-auto">
                    {[
                      {
                        label: 'Terrain',
                        value: '91%',
                      },

                      {
                        label: 'Traversal',
                        value: 'Elite',
                      },

                      {
                        label: 'Momentum',
                        value: 'Peak',
                      },

                      {
                        label: 'Intensity',
                        value: '84%',
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
              </div>
            </div>
          </section>

          {/* CONTENT */}

          <section className="mt-6 grid min-w-0 gap-6 sm:mt-8 sm:gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
            {/* LEFT */}

            <div className="min-w-0 space-y-6 sm:space-y-8">
              {/* PLAYERS */}

              {team.squad && team.squad.length > 0 && (
                <PlayerStatsTable
                  players={team.squad.map((player) => ({
                    id: player.id,

                    name: player.name,

                    age: player.age ?? 24,

                    nationality: player.nationality ?? 'Unknown',

                    team: team.name,

                    position: player.position ?? 'Midfielder',

                    statistics: {
                      appearances: 28,

                      goals: 8,

                      assists: 5,

                      passes: 84,

                      shots: 37,

                      tackles: 19,

                      interceptions: 12,

                      dribbles: 41,

                      rating: 7.8,
                    },

                    endurance: [],

                    sprintBursts: [],

                    movement: [],
                  }))}
                />
              )}

              {/* TERRAIN PANEL */}

              <div className="premium-panel rounded-[26px] p-5 sm:p-7">
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-white">
                    Team Terrain
                  </h2>

                  <p className="mt-2 text-sm text-white/45">
                    Tactical momentum overview
                  </p>
                </div>

                {/* CHART */}

                <div className="relative h-85 overflow-hidden rounded-[28px] border border-white/6 bg-[#06101b]">
                  {/* GRID */}

                  <div className="absolute inset-0 grid-overlay opacity-[0.06]" />

                  {/* SVG */}

                  <svg
                    viewBox="0 0 1000 340"
                    preserveAspectRatio="none"
                    className="absolute inset-0 h-full w-full"
                  >
                    <path
                      d="M0 260 C140 220, 260 200, 340 170 S500 110, 620 130 S760 80, 860 60 S940 40, 1000 30"
                      fill="none"
                      stroke="#38FF9C"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />

                    <path
                      d="M0 260 C140 220, 260 200, 340 170 S500 110, 620 130 S760 80, 860 60 S940 40, 1000 30 L1000 340 L0 340 Z"
                      fill="rgba(56,255,156,0.12)"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="min-w-0 space-y-6 sm:space-y-8">
              <TeamStatsCard team={team} />

              {/* CLUB DETAILS */}

              <div className="premium-panel rounded-[26px] p-5 sm:p-7">
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-white">
                    Club Details
                  </h2>

                  <p className="mt-2 text-sm text-white/45">
                    Terrain organization data
                  </p>
                </div>

                <div className="space-y-5">
                  {[
                    {
                      label: 'Club Colors',
                      value: team.clubColors,
                    },

                    {
                      label: 'Coach',
                      value: team.coach?.name,
                    },

                    {
                      label: 'Venue',
                      value: team.venue,
                    },

                    {
                      label: 'Founded',
                      value: team.founded,
                    },
                  ]
                    .filter((item) => item.value)
                    .map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between gap-4 rounded-[22px] border border-white/6 bg-white/[0.03] p-4 sm:p-5"
                      >
                        <p className="text-sm uppercase tracking-[0.14em] text-white/40">
                          {item.label}
                        </p>

                        <h4 className="text-right text-lg font-black text-white">
                          {item.value}
                        </h4>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </DashboardLayout>
  )
}
