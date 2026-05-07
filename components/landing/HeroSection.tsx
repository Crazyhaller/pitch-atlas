'use client'

import Link from 'next/link'

import { motion } from 'motion/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faArrowRight,
  faChartArea,
  faMountain,
  faPlay,
  faRoute,
} from '@fortawesome/free-solid-svg-icons'

import { APP_ROUTES } from '@/constants/routes'

import BackgroundEffects from './BackgroundEffects'

const floatingStats = [
  {
    label: 'Terrain Momentum',
    value: '+84%',
    top: '19%',
    left: '8%',
  },
  {
    label: 'Spatial Heatmaps',
    value: '3D',
    top: '28%',
    right: '8%',
  },
  {
    label: 'Player Tracking',
    value: '90m',
    bottom: '30%',
    left: '12%',
  },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-36">
      <BackgroundEffects />

      <div className="container-wrapper relative z-10">
        <div className="grid items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT */}

          <div>
            {/* BADGE */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-5 py-2"
            >
              <div className="h-2 w-2 rounded-full bg-[#38FF9C]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#9FFFCF]">
                Terrain Driven Football Intelligence
              </span>
            </motion.div>

            {/* TITLE */}

            <motion.h1
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
              className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-6xl xl:text-8xl"
            >
              Explore Football Like
              <span className="gradient-text block">Mountain Terrain</span>
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
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
              className="mt-8 max-w-2xl text-lg leading-9 text-white/68 md:text-xl"
            >
              PitchAtlas transforms football analytics into cinematic journeys
              through elevation maps, tactical terrain heatmaps, and immersive
              match exploration.
            </motion.p>

            {/* CTA */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="mt-12 flex flex-col gap-4 sm:flex-row"
            >
              <Link href={APP_ROUTES.DASHBOARD} className="btn-primary group">
                Launch Platform
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link href="/explore-preview" className="btn-secondary group">
                <FontAwesomeIcon
                  icon={faPlay}
                  className="h-4 w-4 text-[#38FF9C]"
                />
                Watch Preview
              </Link>
            </motion.div>

            {/* METRICS */}

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
                duration: 1.1,
              }}
              className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4"
            >
              {[
                {
                  label: 'Matches Visualized',
                  value: '12K+',
                },
                {
                  label: 'Heatmap Points',
                  value: '8.4M',
                },
                {
                  label: 'Momentum Events',
                  value: '92K',
                },
                {
                  label: 'Player Journeys',
                  value: '540K',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass-card card-hover px-5 py-6"
                >
                  <h3 className="text-3xl font-black text-white">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm text-white/50">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="relative"
          >
            {/* FLOATING STATS */}

            {floatingStats.map((item) => (
              <motion.div
                key={item.label}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                style={{
                  top: item.top,
                  left: item.left,
                  right: item.right,
                  bottom: item.bottom,
                }}
                className="absolute z-20 hidden rounded-2xl border border-white/8 bg-[#08111f]/80 px-5 py-4 backdrop-blur-xl xl:block"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                  {item.label}
                </p>

                <h4 className="mt-2 text-2xl font-black text-[#38FF9C]">
                  {item.value}
                </h4>
              </motion.div>
            ))}

            {/* MAIN VISUAL */}

            <div className="relative overflow-hidden rounded-[36px] border border-white/8 bg-[#08111f]/80 p-6 shadow-[0_0_100px_rgba(56,255,156,0.12)] backdrop-blur-2xl">
              {/* TOP BAR */}

              <div className="mb-6 flex items-center justify-between border-b border-white/6 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/10">
                    <FontAwesomeIcon
                      icon={faMountain}
                      className="h-5 w-5 text-[#38FF9C]"
                    />
                  </div>

                  <div>
                    <h3 className="font-bold text-white">Match Terrain</h3>

                    <p className="text-xs text-white/40">
                      Live Spatial Analysis
                    </p>
                  </div>
                </div>

                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#38FF9C]">
                  Live
                </div>
              </div>

              {/* ANALYTICS VISUAL */}

              <div className="relative overflow-hidden rounded-[28px] border border-white/6 bg-[#06101b] p-5">
                {/* PITCH */}

                <div className="pitch-background relative aspect-[1.2/1] overflow-hidden rounded-[22px] border border-white/8">
                  {/* GRID */}

                  <div className="absolute inset-0 grid grid-cols-6">
                    {Array.from({
                      length: 6,
                    }).map((_, index) => (
                      <div key={index} className="border-r border-white/5" />
                    ))}
                  </div>

                  {/* CENTER LINE */}

                  <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />

                  {/* CENTER CIRCLE */}

                  <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

                  {/* HEAT BLOBS */}

                  <div className="absolute left-[18%] top-[30%] h-32 w-32 rounded-full bg-emerald-400/30 blur-2xl" />

                  <div className="absolute right-[14%] top-[48%] h-28 w-28 rounded-full bg-orange-400/30 blur-2xl" />

                  <div className="absolute bottom-[18%] left-[45%] h-24 w-24 rounded-full bg-lime-300/30 blur-2xl" />

                  {/* PATH */}

                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M15,70 C25,55 35,40 50,52 C62,60 72,30 86,40"
                      fill="none"
                      stroke="#38FF9C"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      initial={{
                        pathLength: 0,
                      }}
                      animate={{
                        pathLength: 1,
                      }}
                      transition={{
                        duration: 2,
                        ease: 'easeInOut',
                      }}
                    />
                  </svg>

                  {/* PLAYER NODE */}

                  <motion.div
                    animate={{
                      x: ['0%', '240%', '420%'],
                      y: ['0%', '-80%', '-10%'],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute bottom-[28%] left-[14%] z-20 h-5 w-5 rounded-full border-2 border-white bg-[#38FF9C] shadow-[0_0_24px_rgba(56,255,156,0.7)]"
                  />
                </div>

                {/* STATS */}

                <div className="mt-5 grid grid-cols-3 gap-4">
                  {[
                    {
                      icon: faChartArea,
                      label: 'Momentum Peak',
                      value: '92%',
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
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/6 bg-white/3 p-4"
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="h-4 w-4 text-[#38FF9C]"
                      />

                      <h4 className="mt-3 text-2xl font-black text-white">
                        {item.value}
                      </h4>

                      <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/40">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
