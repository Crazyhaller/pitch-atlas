'use client'

import DashboardLayout from '@/components/layout/DashboardLayout'

import LoadingSpinner from '@/components/shared/LoadingSpinner'
import ErrorState from '@/components/shared/ErrorState'

import { useMatches } from '@/hooks/useMatches'

export default function ExplorerPage() {
  const { matches, loading, error } = useMatches()

  const activeMatch = matches[0]

  return (
    <DashboardLayout>
      {/* LOADING */}

      {loading && <LoadingSpinner fullScreen />}

      {/* ERROR */}

      {error && (
        <ErrorState
          title="Explorer System Failure"
          description="The immersive football terrain explorer could not initialize correctly."
        />
      )}

      {/* CONTENT */}

      {!loading && !error && activeMatch && (
        <>
          {/* HERO */}

          <section className="relative overflow-hidden rounded-[36px] border border-white/8 bg-[#08111f]/75 p-8 shadow-[0_0_100px_rgba(56,255,156,0.08)] backdrop-blur-2xl md:p-10">
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
                  Interactive Match Explorer
                </span>
              </div>

              {/* TITLE */}

              <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-6xl">
                Football Terrain
                <span className="gradient-text block">Exploration Engine</span>
              </h1>

              {/* DESCRIPTION */}

              <p className="mt-7 max-w-3xl text-lg leading-9 text-white/62">
                Traverse football matches as immersive journeys with event
                playback, terrain overlays, momentum elevation, and tactical
                movement visualization.
              </p>

              {/* STATS */}

              <div className="mt-12 grid gap-5 md:grid-cols-4">
                {[
                  {
                    label: 'Active Match',
                    value: activeMatch.homeTeam.shortName,
                  },

                  {
                    label: 'Momentum',
                    value: '91%',
                  },

                  {
                    label: 'Traversal',
                    value: '8.4M',
                  },

                  {
                    label: 'Terrain',
                    value: 'Elite',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/6 bg-white/3 p-6"
                  >
                    <h3 className="text-3xl font-black text-white">
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

          {/* EXPLORER */}

          <section className="mt-8 grid gap-8 xl:grid-cols-[1fr_420px]">
            {/* LEFT */}

            <div className="relative overflow-hidden rounded-[36px] border border-white/8 bg-[#08111f]/75 p-7 backdrop-blur-2xl">
              {/* HEADER */}

              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-black text-white">
                    Match Terrain
                  </h2>

                  <p className="mt-2 text-sm text-white/45">
                    Spatial replay system
                  </p>
                </div>

                <div className="rounded-full border border-emerald-400/15 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#38FF9C]">
                  Live Explorer
                </div>
              </div>

              {/* CANVAS */}

              <div className="relative aspect-16/10 overflow-hidden rounded-4xl border border-white/6 bg-[#06101b]">
                {/* GRID */}

                <div className="absolute inset-0 grid-overlay opacity-[0.06]" />

                {/* PITCH */}

                <div className="absolute inset-8 rounded-[28px] border-2 border-[#38FF9C]/30">
                  {/* CENTER */}

                  <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#38FF9C]/20" />

                  <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#38FF9C]/25" />

                  {/* GOALS */}

                  <div className="absolute left-0 top-1/2 h-48 w-16 -translate-y-1/2 border border-l-0 border-[#38FF9C]/25" />

                  <div className="absolute right-0 top-1/2 h-48 w-16 -translate-y-1/2 border border-r-0 border-[#38FF9C]/25" />

                  {/* EVENT NODES */}

                  {[
                    {
                      x: '18%',
                      y: '32%',
                    },

                    {
                      x: '42%',
                      y: '54%',
                    },

                    {
                      x: '68%',
                      y: '28%',
                    },

                    {
                      x: '76%',
                      y: '72%',
                    },

                    {
                      x: '55%',
                      y: '44%',
                    },
                  ].map((node, index) => (
                    <div
                      key={index}
                      style={{
                        left: node.x,
                        top: node.y,
                      }}
                      className="absolute"
                    >
                      {/* GLOW */}

                      <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-2xl" />

                      {/* DOT */}

                      <div className="relative h-5 w-5 rounded-full border-2 border-white bg-[#38FF9C]" />
                    </div>
                  ))}

                  {/* PATH */}

                  <svg
                    viewBox="0 0 1000 600"
                    preserveAspectRatio="none"
                    className="absolute inset-0 h-full w-full"
                  >
                    <path
                      d="M180 190 C260 250, 380 300, 540 200 S720 160, 760 430"
                      fill="none"
                      stroke="#38FF9C"
                      strokeWidth="4"
                      strokeDasharray="14 12"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* CONTROLS */}

              <div className="mt-7 flex flex-wrap items-center gap-4">
                {['Play', 'Pause', 'Replay', 'Heatmap', 'Momentum'].map(
                  (control) => (
                    <button
                      key={control}
                      className="rounded-full border border-white/8 bg-white/3 px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white/70 transition-all duration-300 hover:border-emerald-400/15 hover:bg-emerald-400/10 hover:text-[#38FF9C]"
                    >
                      {control}
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* RIGHT */}

            <div className="space-y-8">
              {/* EVENTS */}

              <div className="rounded-4xl border border-white/8 bg-[#08111f]/75 p-7 backdrop-blur-2xl">
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-white">
                    Event Timeline
                  </h2>

                  <p className="mt-2 text-sm text-white/45">
                    Spatial event feed
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      minute: "12'",
                      event: 'Goal',
                      player: 'Haaland',
                    },

                    {
                      minute: "27'",
                      event: 'Sprint Burst',
                      player: 'Saka',
                    },

                    {
                      minute: "44'",
                      event: 'Shot',
                      player: 'Foden',
                    },

                    {
                      minute: "58'",
                      event: 'Traversal Peak',
                      player: 'Rice',
                    },

                    {
                      minute: "81'",
                      event: 'Goal',
                      player: 'De Bruyne',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-3xl border border-white/6 bg-white/3 p-5"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-black text-white">
                            {item.event}
                          </h3>

                          <p className="mt-2 text-sm text-white/45">
                            {item.player}
                          </p>
                        </div>

                        <div className="rounded-full border border-emerald-400/15 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#38FF9C]">
                          {item.minute}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* MOMENTUM */}

              <div className="rounded-4xl border border-white/8 bg-[#08111f]/75 p-7 backdrop-blur-2xl">
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-white">
                    Elevation Curve
                  </h2>

                  <p className="mt-2 text-sm text-white/45">
                    Momentum terrain graph
                  </p>
                </div>

                {/* CHART */}

                <div className="relative h-65 overflow-hidden rounded-[28px] border border-white/6 bg-[#06101b]">
                  {/* GRID */}

                  <div className="absolute inset-0 grid-overlay opacity-[0.06]" />

                  {/* SVG */}

                  <svg
                    viewBox="0 0 1000 260"
                    preserveAspectRatio="none"
                    className="absolute inset-0 h-full w-full"
                  >
                    <path
                      d="M0 200 C120 160, 240 180, 340 120 S520 80, 680 120 S840 60, 1000 30"
                      fill="none"
                      stroke="#38FF9C"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />

                    <path
                      d="M0 200 C120 160, 240 180, 340 120 S520 80, 680 120 S840 60, 1000 30 L1000 260 L0 260 Z"
                      fill="rgba(56,255,156,0.12)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </DashboardLayout>
  )
}
