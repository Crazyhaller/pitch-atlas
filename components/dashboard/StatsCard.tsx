'use client'

import { motion } from 'motion/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface StatsCardProps {
  title: string
  value: string | number
  change?: string
  icon: IconDefinition
  description?: string
}

export default function StatsCard({
  title,
  value,
  change,
  icon,
  description,
}: StatsCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative overflow-hidden rounded-[30px] border border-white/8 bg-[#08111f]/75 p-6 backdrop-blur-2xl"
    >
      {/* GLOW */}

      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-400/0 blur-[80px] transition-all duration-500 group-hover:bg-emerald-400/10" />

      {/* GRID */}

      <div className="absolute inset-0 grid-overlay opacity-[0.03]" />

      <div className="relative z-10">
        {/* TOP */}

        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-white/40">
              {title}
            </p>

            <h3 className="mt-4 text-4xl font-black tracking-tight text-white">
              {value}
            </h3>
          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-emerald-400/15 bg-emerald-400/10 shadow-[0_0_30px_rgba(56,255,156,0.08)]">
            <FontAwesomeIcon icon={icon} className="h-6 w-6 text-[#38FF9C]" />
          </div>
        </div>

        {/* BOTTOM */}

        <div className="mt-8 flex items-end justify-between">
          <div>
            {description && (
              <p className="max-w-55 text-sm leading-7 text-white/50">
                {description}
              </p>
            )}
          </div>

          {change && (
            <div className="rounded-full border border-emerald-400/15 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#38FF9C]">
              {change}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
