'use client'

import { use } from 'react'

import DashboardLayout from '@/components/layout/DashboardLayout'

import LoadingSpinner from '@/components/shared/LoadingSpinner'
import ErrorState from '@/components/shared/ErrorState'
import FavoriteButton from '@/components/shared/FavoriteButton'
import DistanceMeter from '@/components/player/DistanceMeter'
import EnduranceGraph from '@/components/player/EnduranceGraph'
import FatigueIndicator from '@/components/player/FatigueIndicator'
import SprintBarChart from '@/components/player/SprintBarChart'

import { usePlayer } from '@/hooks/usePlayer'
import { normalizePlayerStats } from '@/lib/data/normalizePlayerStats'

interface PlayerPageProps {
  params: Promise<{
    id: string
  }>
}

export default function PlayerPage({ params }: PlayerPageProps) {
  const { id } = use(params)

  const { player, loading, error } = usePlayer(id)
  const normalizedStats = player ? normalizePlayerStats(player.statistics) : null

  return (
    <DashboardLayout>
      {/* LOADING */}

      {loading && <LoadingSpinner fullScreen />}

      {/* ERROR */}

      {error && (
        <ErrorState
          title="Failed To Load Player Terrain"
          description="The player exploration system could not retrieve this athlete profile."
        />
      )}

      {/* CONTENT */}

      {!loading && !error && player && (
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
                  {/* PHOTO */}

                  <div className="relative">
                    <div className="absolute inset-0 rounded-[36px] bg-emerald-400/20 blur-3xl" />

                    <div className="relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-[28px] border border-white/8 bg-[#0b1524] sm:h-44 sm:w-44 sm:rounded-[36px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={player.photo}
                        alt={player.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  {/* INFO */}

                  <div className="min-w-0">
                    {/* BADGE */}

                    <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-5 py-2">
                      <div className="h-2 w-2 rounded-full bg-[#38FF9C]" />

                      <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#9FFFCF]">
                        Terrain Explorer
                      </span>
                    </div>

                    {/* NAME */}

                    <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-6xl">
                      {player.name}
                    </h1>

                    {/* META */}

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      {[
                        player.position,
                        player.nationality,
                        `${player.age} yrs`,
                      ].map((item) => (
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
                      Advanced football terrain explorer profile with traversal
                      analysis, endurance systems, sprint elevation, and
                      tactical movement intelligence.
                    </p>
                  </div>
                </div>

                {/* RIGHT */}

                <div className="flex shrink-0 flex-col items-start gap-6 xl:items-end">
                  <FavoriteButton
                    entity={{
                      id: player.id,
                      type: 'player',
                      name: player.name,
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
                        value: '9.4km',
                      },

                      {
                        label: 'Intensity',
                        value: 'Elite',
                      },

                      {
                        label: 'Momentum',
                        value: 'Peak',
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

          {/* STATS */}

          <section className="mt-6 grid min-w-0 gap-6 sm:mt-8 sm:gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
            {/* LEFT */}

            <div className="min-w-0 space-y-6 sm:space-y-8">
              {/* PERFORMANCE */}

              <div className="premium-panel rounded-[26px] p-5 sm:p-7">
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-white">
                    Terrain Performance
                  </h2>

                  <p className="mt-2 text-sm text-white/45">
                    Spatial movement and tactical analytics
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      label: 'Goals',
                      value: normalizedStats?.goals,
                    },

                    {
                      label: 'Assists',
                      value: normalizedStats?.assists,
                    },

                    {
                      label: 'Passes',
                      value: normalizedStats?.passes,
                    },

                    {
                      label: 'Shots',
                      value: normalizedStats?.shots,
                    },

                    {
                      label: 'Dribbles',
                      value: normalizedStats?.dribbles,
                    },

                    {
                      label: 'Rating',
                      value: normalizedStats?.rating,
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[22px] border border-white/6 bg-white/[0.03] p-5 sm:p-6"
                    >
                      <h3 className="text-3xl font-black text-white sm:text-4xl">
                        {item.value}
                      </h3>

                      <p className="mt-3 text-xs uppercase tracking-[0.14em] text-white/40">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ENDURANCE */}

              <div className="premium-panel rounded-[26px] p-5 sm:p-7">
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-white">
                    Endurance Terrain
                  </h2>

                  <p className="mt-2 text-sm text-white/45">
                    Stamina and fatigue elevation
                  </p>
                </div>

                <EnduranceGraph data={player.endurance} />
              </div>
            </div>

            {/* RIGHT */}

            <div className="min-w-0 space-y-6 sm:space-y-8">
              <DistanceMeter movement={player.movement} />

              <FatigueIndicator endurance={player.endurance} />

              {/* PROFILE */}

              <div className="premium-panel rounded-[26px] p-5 sm:p-7">
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-white">
                    Athlete Profile
                  </h2>

                  <p className="mt-2 text-sm text-white/45">
                    Physical terrain data
                  </p>
                </div>

                <div className="space-y-5">
                  {[
                    {
                      label: 'Height',
                      value: player.height,
                    },

                    {
                      label: 'Weight',
                      value: player.weight,
                    },

                    {
                      label: 'Nationality',
                      value: player.nationality,
                    },

                    {
                      label: 'Position',
                      value: player.position,
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between gap-4 rounded-[22px] border border-white/6 bg-white/[0.03] p-4 sm:p-5"
                    >
                      <p className="text-sm uppercase tracking-[0.14em] text-white/40">
                        {item.label}
                      </p>

                      <h4 className="text-right text-base font-black text-white sm:text-lg">
                        {item.value}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* SPRINT BURSTS */}

              <div className="premium-panel rounded-[26px] p-5 sm:p-7">
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-white">
                    Sprint Bursts
                  </h2>

                  <p className="mt-2 text-sm text-white/45">
                    High-intensity terrain movement
                  </p>
                </div>

                <SprintBarChart sprints={player.sprintBursts} />

                <div className="mt-5 space-y-4">
                  {player.sprintBursts.slice(0, 5).map((sprint) => (
                    <div
                      key={sprint.minute}
                      className="rounded-[22px] border border-white/6 bg-white/[0.03] p-4 sm:p-5"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-white">
                          {sprint.minute}&apos;
                        </h3>

                        <p className="text-sm font-bold text-[#38FF9C]">
                          {sprint.speed}
                          km/h
                        </p>
                      </div>

                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/8">
                        <div
                          style={{
                            width: `${Math.min(sprint.speed * 2, 100)}%`,
                          }}
                          className="h-full rounded-full bg-[#38FF9C]"
                        />
                      </div>

                      <p className="mt-3 text-sm text-white/45">
                        {sprint.distance}m traversal burst
                      </p>
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
