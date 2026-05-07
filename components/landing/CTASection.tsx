'use client'

import Link from 'next/link'

import { motion } from 'motion/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faArrowRight,
  faCompass,
  faMountain,
  faPlay,
} from '@fortawesome/free-solid-svg-icons'

import { APP_ROUTES } from '@/constants/routes'

export default function CTASection() {
  return (
    <section className="section-spacing relative overflow-hidden">
      {/* BACKGROUND */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-225 w-225 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/8 blur-[180px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,255,156,0.08),transparent_40%)]" />
      </div>

      <div className="container-wrapper relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative overflow-hidden rounded-[40px] border border-white/8 bg-[#08111f]/80 px-8 py-16 shadow-[0_0_100px_rgba(56,255,156,0.1)] backdrop-blur-2xl md:px-16 md:py-24"
        >
          {/* GRID */}

          <div className="absolute inset-0 grid-overlay opacity-[0.04]" />

          {/* FLOATING GLOW */}

          <div className="absolute left-[10%] top-[20%] h-40 w-40 rounded-full bg-emerald-400/10 blur-[80px]" />

          <div className="absolute bottom-[10%] right-[10%] h-56 w-56 rounded-full bg-lime-300/10 blur-[100px]" />

          {/* CONTENT */}

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            {/* BADGE */}

            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-6 py-3">
              <div className="h-2 w-2 rounded-full bg-[#38FF9C]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#9FFFCF]">
                Immersive Football Exploration Platform
              </span>
            </div>

            {/* TITLE */}

            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-6xl xl:text-7xl">
              Turn Match Data Into
              <span className="gradient-text block">Cinematic Terrain</span>
            </h2>

            {/* DESCRIPTION */}

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/62 md:text-xl">
              Explore football through immersive spatial analytics, dynamic
              heatmaps, elevation timelines, and interactive tactical journeys
              designed for the next generation of sports intelligence.
            </p>

            {/* BUTTONS */}

            <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Link
                href={APP_ROUTES.DASHBOARD}
                className="btn-primary group min-w-55"
              >
                <FontAwesomeIcon icon={faMountain} className="h-4 w-4" />
                Launch Platform
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link href="/explore-preview" className="btn-secondary min-w-55">
                <FontAwesomeIcon
                  icon={faPlay}
                  className="h-4 w-4 text-[#38FF9C]"
                />
                Explore Preview
              </Link>
            </div>

            {/* STATS */}

            <div className="mt-20 grid gap-5 md:grid-cols-3">
              {[
                {
                  value: '8.4M+',
                  label: 'Heatmap Coordinates',
                },

                {
                  value: '92K+',
                  label: 'Momentum Events',
                },

                {
                  value: '540K+',
                  label: 'Player Movements',
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{
                    y: -6,
                  }}
                  className="rounded-[28px] border border-white/8 bg-white/3 p-8 backdrop-blur-xl"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl border border-emerald-400/15 bg-emerald-400/10">
                    <FontAwesomeIcon
                      icon={faCompass}
                      className="h-6 w-6 text-[#38FF9C]"
                    />
                  </div>

                  <h3 className="mt-6 text-4xl font-black text-white">
                    {item.value}
                  </h3>

                  <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/40">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
