'use client'

import { motion } from 'motion/react'

const timelineEvents = [
  {
    minute: "12'",
    event: 'High Pressing Sequence',
  },
  {
    minute: "31'",
    event: 'Momentum Shift',
  },
  {
    minute: "54'",
    event: 'Goal Terrain Peak',
  },
  {
    minute: "76'",
    event: 'Transition Burst',
  },
]

export default function AnimatedStatsPreview() {
  return (
    <section
      id="visualizations"
      className="section-spacing relative overflow-hidden"
    >
      {/* BACKGROUND */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/6 blur-[180px]" />
      </div>

      <div className="container-wrapper relative z-10">
        <div className="grid items-center gap-20 xl:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-5 py-2">
              <div className="h-2 w-2 rounded-full bg-[#38FF9C]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#9FFFCF]">
                Match Elevation System
              </span>
            </div>

            <h2 className="text-4xl font-black tracking-tighter text-white md:text-6xl">
              Visualize Momentum As
              <span className="gradient-text block">Terrain Elevation</span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/62">
              Every match transforms into an evolving landscape where tactical
              pressure, transitions, and dominance become visible as cinematic
              elevation curves.
            </p>

            {/* TIMELINE */}

            <div className="mt-14 space-y-5">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.minute}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.12,
                  }}
                  className="flex items-center gap-5 rounded-2xl border border-white/6 bg-white/3 px-5 py-5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/15 bg-emerald-400/10 text-sm font-black text-[#38FF9C]">
                    {event.minute}
                  </div>

                  <div>
                    <h4 className="font-bold text-white">{event.event}</h4>

                    <p className="mt-1 text-sm text-white/45">
                      Spatial momentum terrain updated
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >
            {/* CHART CONTAINER */}

            <div className="relative overflow-hidden rounded-[34px] border border-white/8 bg-[#08111f]/75 p-7 shadow-[0_0_100px_rgba(56,255,156,0.1)] backdrop-blur-2xl">
              {/* TOP */}

              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-white">
                    Momentum Elevation
                  </h3>

                  <p className="mt-1 text-sm text-white/45">
                    Match Terrain Activity
                  </p>
                </div>

                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#38FF9C]">
                  Live Curve
                </div>
              </div>

              {/* CHART */}

              <div className="relative h-105 overflow-hidden rounded-[26px] border border-white/6 bg-[#06101b] p-5">
                {/* GRID */}

                <div className="absolute inset-0 grid-overlay opacity-[0.06]" />

                {/* SVG */}

                <svg
                  viewBox="0 0 1000 400"
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="none"
                >
                  {/* AREA */}

                  <motion.path
                    d={`
                      M0 340
                      C80 310, 120 250, 180 260
                      S300 180, 360 210
                      S480 120, 560 150
                      S700 90, 760 120
                      S880 40, 1000 70
                      L1000 400
                      L0 400
                      Z
                    `}
                    fill="rgba(56,255,156,0.14)"
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                  />

                  {/* LINE */}

                  <motion.path
                    d={`
                      M0 340
                      C80 310, 120 250, 180 260
                      S300 180, 360 210
                      S480 120, 560 150
                      S700 90, 760 120
                      S880 40, 1000 70
                    `}
                    fill="none"
                    stroke="#38FF9C"
                    strokeWidth="5"
                    strokeLinecap="round"
                    initial={{
                      pathLength: 0,
                    }}
                    whileInView={{
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 2,
                      ease: 'easeInOut',
                    }}
                  />
                </svg>

                {/* FLOATING METRICS */}

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="absolute right-[8%] top-[14%] rounded-2xl border border-white/8 bg-[#08111f]/90 px-5 py-4 backdrop-blur-xl"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                    Peak Pressure
                  </p>

                  <h4 className="mt-2 text-3xl font-black text-[#38FF9C]">
                    92%
                  </h4>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                  }}
                  className="absolute bottom-[10%] left-[10%] rounded-2xl border border-white/8 bg-[#08111f]/90 px-5 py-4 backdrop-blur-xl"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                    Terrain Shift
                  </p>

                  <h4 className="mt-2 text-3xl font-black text-[#38FF9C]">
                    +44m
                  </h4>
                </motion.div>

                {/* BOTTOM DATA */}

                <div className="absolute bottom-0 left-0 right-0 grid grid-cols-4 border-t border-white/6 bg-[#08111f]/90">
                  {["12'", "34'", "58'", "82'"].map((item) => (
                    <div
                      key={item}
                      className="border-r border-white/6 px-5 py-4 text-center text-sm font-semibold text-white/50 last:border-r-0"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* MINI STATS */}

              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  {
                    label: 'Intensity',
                    value: '91%',
                  },
                  {
                    label: 'Pressure',
                    value: '74%',
                  },
                  {
                    label: 'Transitions',
                    value: '28',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/6 bg-white/3 p-5"
                  >
                    <h4 className="text-2xl font-black text-white">
                      {item.value}
                    </h4>

                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/40">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FLOATING NOISE */}

            <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-emerald-400/10 blur-[90px]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
