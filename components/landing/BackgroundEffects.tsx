'use client'

import { motion } from 'motion/react'

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* GRID */}

      <div className="grid-overlay absolute inset-0 opacity-[0.08]" />

      {/* TOP GLOW */}

      <motion.div
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute left-[-10%] top-[-10%] h-125 w-125 rounded-full bg-emerald-400/10 blur-[140px]"
      />

      {/* RIGHT GLOW */}

      <motion.div
        animate={{
          opacity: [0.25, 0.6, 0.25],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[-15%] right-[-10%] h-[460px] w-[460px] rounded-full bg-lime-300/10 blur-[140px]"
      />

      {/* CENTER LIGHT */}

      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/5 blur-[180px]" />

      {/* FLOATING ORBS */}

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-[10%] top-[30%] h-4 w-4 rounded-full bg-emerald-400 blur-sm"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute right-[18%] top-[40%] h-5 w-5 rounded-full bg-lime-300 blur-sm"
      />

      <motion.div
        animate={{
          x: [0, 16, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute bottom-[20%] left-[30%] h-3 w-3 rounded-full bg-emerald-200 blur-sm"
      />
    </div>
  )
}
