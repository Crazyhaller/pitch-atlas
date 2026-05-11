'use client'

import { useState } from 'react'

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
  const [expanded, setExpanded] = useState(false)
  const canExpand = Boolean(description && description.length > 82)
  const visibleDescription =
    canExpand && !expanded ? `${description?.slice(0, 82)}...` : description

  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="premium-panel group relative flex h-full min-h-[238px] min-w-0 flex-col overflow-hidden rounded-[24px] p-5 sm:p-6"
    >
      {/* GLOW */}

      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-400/0 blur-[80px] transition-all duration-500 group-hover:bg-emerald-400/10" />

      {/* GRID */}

      <div className="absolute inset-0 grid-overlay opacity-[0.03]" />

      <div className="relative z-10 flex h-full flex-col">
        {/* TOP */}

        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-white/40">
              {title}
            </p>

            <h3 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              {value}
            </h3>
          </div>

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/15 bg-emerald-400/10 shadow-[0_0_30px_rgba(56,255,156,0.08)] sm:h-16 sm:w-16 sm:rounded-3xl">
            <FontAwesomeIcon icon={icon} className="h-6 w-6 text-[#38FF9C]" />
          </div>
        </div>

        {/* BOTTOM */}

        <div className="mt-7 flex flex-1 flex-col gap-4">
          <div className="min-h-[72px] min-w-0">
            {description && (
              <p className="max-w-64 text-sm leading-7 text-white/50">
                {visibleDescription}
              </p>
            )}

            {canExpand && (
              <button
                type="button"
                onClick={() => setExpanded((current) => !current)}
                className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#38FF9C] transition-colors hover:text-[#9FFFCF]"
              >
                {expanded ? 'Show Less' : 'Show More'}
              </button>
            )}
          </div>

          <div className="mt-auto">
            {change && (
              <div className="w-fit rounded-full border border-emerald-400/15 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#38FF9C]">
                {change}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
