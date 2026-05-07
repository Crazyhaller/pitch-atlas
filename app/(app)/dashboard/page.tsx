'use client'

import { useState } from 'react'

import { motion } from 'motion/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faChartLine,
  faCompass,
  faEye,
  faFire,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons'

const dashboardModules = [
  {
    id: 'heatmap',
    title: 'Terrain Heatmaps',
    icon: faFire,
  },

  {
    id: 'momentum',
    title: 'Momentum Elevation',
    icon: faChartLine,
  },

  {
    id: 'explorer',
    title: 'Match Explorer',
    icon: faCompass,
  },

  {
    id: 'spatial',
    title: 'Spatial Layers',
    icon: faLayerGroup,
  },
]

export default function UserDashboardConfig() {
  const [enabledModules, setEnabledModules] = useState<string[]>([
    'heatmap',
    'momentum',
    'explorer',
  ])

  function toggleModule(moduleId: string) {
    setEnabledModules((previous) => {
      const exists = previous.includes(moduleId)

      if (exists) {
        return previous.filter((item) => item !== moduleId)
      }

      return [...previous, moduleId]
    })
  }

  return (
    <div className="relative overflow-hidden rounded-4xl border border-white/8 bg-[#08111f]/75 p-7 backdrop-blur-2xl">
      {/* GLOW */}

      <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-emerald-400/10 blur-[100px]" />

      {/* HEADER */}

      <div className="relative z-10 mb-8 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-black text-white">Dashboard Modules</h3>

          <p className="mt-1 text-sm text-white/45">
            Customize your terrain analytics experience
          </p>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-3xl border border-emerald-400/15 bg-emerald-400/10">
          <FontAwesomeIcon icon={faEye} className="h-6 w-6 text-[#38FF9C]" />
        </div>
      </div>

      {/* MODULES */}

      <div className="relative z-10 space-y-4">
        {dashboardModules.map((module) => {
          const active = enabledModules.includes(module.id)

          return (
            <motion.button
              key={module.id}
              whileTap={{
                scale: 0.98,
              }}
              type="button"
              onClick={() => toggleModule(module.id)}
              className={`flex w-full items-center justify-between rounded-4xl border px-5 py-5 text-left transition-all duration-300 ${
                active
                  ? 'border-emerald-400/15 bg-emerald-400/10'
                  : 'border-white/6 bg-white/3 hover:border-emerald-400/12 hover:bg-emerald-400/6'
              }`}
            >
              {/* LEFT */}

              <div className="flex items-center gap-5">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${
                    active
                      ? 'border-emerald-400/15 bg-emerald-400/10'
                      : 'border-white/6 bg-[#0c1728]'
                  }`}
                >
                  <FontAwesomeIcon
                    icon={module.icon}
                    className={`h-5 w-5 ${
                      active ? 'text-[#38FF9C]' : 'text-white/55'
                    }`}
                  />
                </div>

                <div>
                  <h4 className="font-bold text-white">{module.title}</h4>

                  <p className="mt-1 text-sm text-white/45">
                    Visualization module
                  </p>
                </div>
              </div>

              {/* TOGGLE */}

              <div
                className={`relative flex h-8 w-16 items-center rounded-full transition-all duration-300 ${
                  active ? 'bg-emerald-400/20' : 'bg-white/8'
                }`}
              >
                <motion.div
                  animate={{
                    x: active ? 34 : 4,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                  className={`h-6 w-6 rounded-full ${
                    active ? 'bg-[#38FF9C]' : 'bg-white/40'
                  }`}
                />
              </div>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
