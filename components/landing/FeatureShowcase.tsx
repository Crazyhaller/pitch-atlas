'use client'

import { motion } from 'motion/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faChartLine,
  faCompass,
  faFire,
  faLayerGroup,
  faMountainSun,
  faRoute,
} from '@fortawesome/free-solid-svg-icons'

const features = [
  {
    title: 'Terrain Heatmaps',
    description:
      'Transform player movement into elevation-inspired tactical landscapes with immersive gradient intensity visualization.',

    icon: faFire,

    glow: 'from-emerald-400/30 to-lime-300/10',
  },

  {
    title: 'Momentum Elevation',
    description:
      'Analyze match momentum as cinematic terrain curves with valleys, peaks, and pressure transitions.',

    icon: faChartLine,

    glow: 'from-cyan-400/20 to-emerald-400/10',
  },

  {
    title: 'Journey Explorer',
    description:
      'Replay football matches as interactive journeys through spatial event tracking and timeline navigation.',

    icon: faCompass,

    glow: 'from-orange-400/20 to-emerald-400/10',
  },

  {
    title: 'Spatial Analytics',
    description:
      'Track tactical positioning, transitions, and movement density across every phase of the game.',

    icon: faLayerGroup,

    glow: 'from-lime-300/20 to-emerald-400/10',
  },

  {
    title: 'Traversal Intelligence',
    description:
      'Measure distance coverage, sprint bursts, fatigue zones, and traversal efficiency in real time.',

    icon: faRoute,

    glow: 'from-emerald-400/20 to-cyan-400/10',
  },

  {
    title: 'Cinematic Visualization',
    description:
      'Experience football analytics through premium immersive interfaces inspired by terrain exploration systems.',

    icon: faMountainSun,

    glow: 'from-yellow-300/20 to-emerald-400/10',
  },
]

export default function FeatureShowcase() {
  return (
    <section id="features" className="section-spacing relative overflow-hidden">
      {/* BACKGROUND */}

      <div className="absolute inset-0">
        <div className="absolute left-[20%] top-[10%] h-105 w-105 rounded-full bg-emerald-400/6 blur-[140px]" />

        <div className="absolute bottom-[0%] right-[10%] h-90 w-90 rounded-full bg-lime-300/6 blur-[120px]" />
      </div>

      <div className="container-wrapper relative z-10">
        {/* HEADER */}

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
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-5 py-2">
            <div className="h-2 w-2 rounded-full bg-[#38FF9C]" />

            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#9FFFCF]">
              Premium Visualization Stack
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-tighter text-white md:text-6xl">
            Football Analytics
            <span className="gradient-text block">Reimagined Visually</span>
          </h2>

          <p className="mt-8 text-lg leading-9 text-white/62">
            PitchAtlas blends tactical intelligence with cinematic visualization
            to create a new generation of football exploration experiences.
          </p>
        </motion.div>

        {/* FEATURES GRID */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
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
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-white/8 bg-[#08111f]/70 p-8 backdrop-blur-2xl"
            >
              {/* GLOW */}

              <div
                className={`absolute inset-0 bg-linear-to-br ${feature.glow} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              {/* GRID */}

              <div className="absolute inset-0 grid-overlay opacity-[0.04]" />

              {/* CONTENT */}

              <div className="relative z-10">
                {/* ICON */}

                <div className="flex h-16 w-16 mb-6 items-center justify-center rounded-3xl border border-emerald-400/15 bg-emerald-400/10 shadow-[0_0_30px_rgba(56,255,156,0.08)]">
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className="h-7 w-7 text-[#38FF9C]"
                  />
                </div>

                {/* TITLE */}

                <h3 className="mt-8 text-2xl font-black tracking-tight text-white">
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}

                <p className="mt-5 text-[15px] leading-8 text-white/58">
                  {feature.description}
                </p>

                {/* FOOTER */}

                <div className="mt-10 flex items-center justify-between border-t border-white/6 pt-5">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">
                    Immersive Layer
                  </span>

                  <div className="h-2 w-2 rounded-full bg-[#38FF9C]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
