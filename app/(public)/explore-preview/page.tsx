'use client'

import Link from 'next/link'

import { motion } from 'motion/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faArrowLeft,
  faCompass,
  faFire,
  faMountain,
  faPlay,
  faRoute,
  faTimeline,
} from '@fortawesome/free-solid-svg-icons'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const timelineEvents = [
  {
    minute: "08'",
    label: 'Early Tactical Press',
    intensity: 'Low Terrain',
  },
  {
    minute: "23'",
    label: 'Momentum Acceleration',
    intensity: 'Mid Elevation',
  },
  {
    minute: "41'",
    label: 'Transition Burst',
    intensity: 'High Terrain',
  },
  {
    minute: "67'",
    label: 'Counter Attack Sequence',
    intensity: 'Peak Elevation',
  },
]

export default function ExplorePreviewPage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />

      <section className="relative min-h-screen overflow-hidden pt-36">
        {/* BACKGROUND */}

        <div className="absolute inset-0">
          <div className="grid-overlay absolute inset-0 opacity-[0.04]" />

          <div className="absolute left-[10%] top-[10%] h-125 w-125 rounded-full bg-emerald-400/10 blur-[160px]" />

          <div className="absolute bottom-[0%] right-[0%] h-125 w-125 rounded-full bg-lime-300/10 blur-[180px]" />
        </div>

        <div className="container-wrapper relative z-10">
          {/* TOP */}

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <Link
                href="/"
                className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/8 bg-white/3 px-5 py-3 text-sm font-semibold text-white/70 transition-all duration-300 hover:border-emerald-400/20 hover:bg-emerald-400/10 hover:text-white"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
                Back To Landing
              </Link>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">
                Explore Match Terrain In
                <span className="gradient-text block">Cinematic Motion</span>
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-9 text-white/60">
                Preview the immersive terrain-based football exploration
                experience with spatial heatmaps, momentum elevation curves, and
                tactical movement replay.
              </p>
            </div>

            {/* ACTION */}

            <div className="glass-card w-full max-w-sm p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-emerald-400/15 bg-emerald-400/10">
                  <FontAwesomeIcon
                    icon={faCompass}
                    className="h-7 w-7 text-[#38FF9C]"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-black text-white">
                    Live Match Terrain
                  </h3>

                  <p className="mt-1 text-sm text-white/45">
                    Spatial Analytics Active
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="btn-primary mt-6 w-full justify-center"
              >
                <FontAwesomeIcon icon={faPlay} className="h-4 w-4" />
                Start Exploration
              </button>
            </div>
          </div>

          {/* MAIN PREVIEW */}

          <div className="mt-16 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
            {/* LEFT */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative overflow-hidden rounded-[34px] border border-white/8 bg-[#08111f]/75 p-6 shadow-[0_0_100px_rgba(56,255,156,0.1)] backdrop-blur-2xl"
            >
              {/* HEADER */}

              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black text-white">
                    Terrain Explorer
                  </h3>

                  <p className="mt-1 text-sm text-white/45">
                    Manchester City vs Arsenal
                  </p>
                </div>

                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#38FF9C]">
                  Live Preview
                </div>
              </div>

              {/* PITCH */}

              <div className="pitch-background relative aspect-[1.35/1] overflow-hidden rounded-[28px] border border-white/8">
                {/* GRID */}

                <div className="absolute inset-0 grid grid-cols-8">
                  {Array.from({
                    length: 8,
                  }).map((_, index) => (
                    <div key={index} className="border-r border-white/5" />
                  ))}
                </div>

                {/* CENTER LINE */}

                <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />

                {/* CENTER CIRCLE */}

                <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

                {/* HEATMAP ZONES */}

                <div className="absolute left-[12%] top-[22%] h-40 w-40 rounded-full bg-emerald-400/30 blur-[60px]" />

                <div className="absolute left-[40%] top-[42%] h-36 w-36 rounded-full bg-lime-300/25 blur-[60px]" />

                <div className="absolute right-[10%] top-[26%] h-44 w-44 rounded-full bg-orange-400/25 blur-[60px]" />

                <div className="absolute bottom-[8%] left-[28%] h-28 w-28 rounded-full bg-yellow-300/20 blur-[50px]" />

                {/* MOVEMENT PATH */}

                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full"
                >
                  <motion.path
                    d="M8,74 C18,62 28,40 42,44 C56,48 60,28 76,36 C84,40 90,22 96,28"
                    fill="none"
                    stroke="#38FF9C"
                    strokeWidth="1"
                    strokeLinecap="round"
                    initial={{
                      pathLength: 0,
                    }}
                    animate={{
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 2,
                    }}
                  />
                </svg>

                {/* PLAYER NODE */}

                <motion.div
                  animate={{
                    x: ['0%', '180%', '380%', '520%'],

                    y: ['0%', '-60%', '-120%', '-180%'],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute bottom-[20%] left-[8%] z-20 h-5 w-5 rounded-full border-2 border-white bg-[#38FF9C] shadow-[0_0_24px_rgba(56,255,156,0.8)]"
                />
              </div>

              {/* METRICS */}

              <div className="mt-6 grid gap-4 md:grid-cols-4">
                {[
                  {
                    icon: faFire,
                    label: 'Heat Intensity',
                    value: '91%',
                  },

                  {
                    icon: faRoute,
                    label: 'Traversal',
                    value: '11.2km',
                  },

                  {
                    icon: faMountain,
                    label: 'Elevation',
                    value: '+44m',
                  },

                  {
                    icon: faTimeline,
                    label: 'Transitions',
                    value: '28',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/6 bg-white/3 p-5"
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="h-5 w-5 text-[#38FF9C]"
                    />

                    <h4 className="mt-4 text-2xl font-black text-white">
                      {item.value}
                    </h4>

                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/40">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT */}

            <div className="space-y-8">
              {/* MOMENTUM */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                }}
                className="relative overflow-hidden rounded-[30px] border border-white/8 bg-[#08111f]/75 p-6 backdrop-blur-2xl"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-black text-white">
                      Elevation Curve
                    </h3>

                    <p className="mt-1 text-sm text-white/45">Match Momentum</p>
                  </div>

                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#38FF9C]">
                    Active
                  </div>
                </div>

                {/* CHART */}

                <div className="relative h-65 overflow-hidden rounded-3xl border border-white/6 bg-[#06101b]">
                  <div className="absolute inset-0 grid-overlay opacity-[0.06]" />

                  <svg
                    viewBox="0 0 1000 320"
                    preserveAspectRatio="none"
                    className="absolute inset-0 h-full w-full"
                  >
                    <motion.path
                      d="M0 260 C100 220, 180 240, 260 170 S420 90, 520 130 S680 40, 760 90 S920 60, 1000 30"
                      fill="none"
                      stroke="#38FF9C"
                      strokeWidth="5"
                      strokeLinecap="round"
                      initial={{
                        pathLength: 0,
                      }}
                      animate={{
                        pathLength: 1,
                      }}
                      transition={{
                        duration: 2,
                      }}
                    />

                    <motion.path
                      d="M0 260 C100 220, 180 240, 260 170 S420 90, 520 130 S680 40, 760 90 S920 60, 1000 30 L1000 320 L0 320 Z"
                      fill="rgba(56,255,156,0.12)"
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                    />
                  </svg>
                </div>
              </motion.div>

              {/* TIMELINE */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                }}
                className="rounded-[30px] border border-white/8 bg-[#08111f]/75 p-6 backdrop-blur-2xl"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-black text-white">
                    Match Journey
                  </h3>

                  <p className="mt-1 text-sm text-white/45">
                    Spatial Timeline Events
                  </p>
                </div>

                <div className="space-y-4">
                  {timelineEvents.map((event, index) => (
                    <motion.div
                      key={event.minute}
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                      className="flex items-center gap-4 rounded-2xl border border-white/6 bg-white/3 px-5 py-5"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/15 bg-emerald-400/10 text-sm font-black text-[#38FF9C]">
                        {event.minute}
                      </div>

                      <div>
                        <h4 className="font-bold text-white">{event.label}</h4>

                        <p className="mt-1 text-sm text-white/45">
                          {event.intensity}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
