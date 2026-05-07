'use client'

import { motion } from 'motion/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faArrowRotateRight,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons'

interface ErrorStateProps {
  title?: string
  description?: string
  onRetry?: () => void
}

export default function ErrorState({
  title = 'Terrain System Error',
  description = 'Something interrupted the analytics visualization pipeline. Try reloading the experience.',
  onRetry,
}: ErrorStateProps) {
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
      className="relative overflow-hidden rounded-4xl border border-red-500/10 bg-[#08111f]/75 p-10 text-center backdrop-blur-2xl"
    >
      {/* GLOW */}

      <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-red-500/10 blur-[90px]" />

      {/* ICON */}

      <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-[28px] border border-red-500/15 bg-red-500/10">
        <FontAwesomeIcon
          icon={faTriangleExclamation}
          className="h-10 w-10 text-red-400"
        />
      </div>

      {/* CONTENT */}

      <div className="relative z-10">
        <h3 className="mt-8 text-3xl font-black text-white">{title}</h3>

        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-8 text-white/55">
          {description}
        </p>

        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-red-500/15 bg-red-500/10 px-6 py-4 font-semibold text-red-300 transition-all duration-300 hover:bg-red-500/15"
          >
            <FontAwesomeIcon icon={faArrowRotateRight} className="h-4 w-4" />
            Retry Experience
          </button>
        )}
      </div>
    </motion.div>
  )
}
