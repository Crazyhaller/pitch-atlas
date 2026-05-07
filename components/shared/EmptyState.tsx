'use client'

import { motion } from 'motion/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCompass, faMountain } from '@fortawesome/free-solid-svg-icons'

interface EmptyStateProps {
  title: string
  description: string
  actionLabel?: string
  onAction?: () => void
}

export default function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="relative overflow-hidden rounded-4xl border border-white/8 bg-[#08111f]/75 p-10 text-center backdrop-blur-2xl"
    >
      {/* GLOW */}

      <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[90px]" />

      {/* ICON */}

      <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-[28px] border border-emerald-400/15 bg-emerald-400/10">
        <FontAwesomeIcon
          icon={faMountain}
          className="h-10 w-10 text-[#38FF9C]"
        />
      </div>

      {/* CONTENT */}

      <div className="relative z-10">
        <h3 className="mt-8 text-3xl font-black text-white">{title}</h3>

        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-8 text-white/55">
          {description}
        </p>

        {actionLabel && onAction && (
          <button
            type="button"
            onClick={onAction}
            className="btn-primary mt-10 inline-flex items-center gap-3"
          >
            <FontAwesomeIcon icon={faCompass} className="h-4 w-4" />

            {actionLabel}
          </button>
        )}
      </div>
    </motion.div>
  )
}
