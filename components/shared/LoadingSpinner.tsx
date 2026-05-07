'use client'

import { motion } from 'motion/react'

interface LoadingSpinnerProps {
  label?: string
  fullScreen?: boolean
}

export default function LoadingSpinner({
  label = 'Loading terrain analytics...',
  fullScreen = false,
}: LoadingSpinnerProps) {
  const content = (
    <div className="flex flex-col items-center justify-center">
      {/* OUTER RING */}

      <div className="relative flex h-20 w-20 items-center justify-center">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 rounded-full border-2 border-emerald-400/20 border-t-[#38FF9C]"
        />

        {/* INNER RING */}

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-2.5 rounded-full border border-white/10 border-b-emerald-300"
        />

        {/* CENTER */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
          }}
          className="h-4 w-4 rounded-full bg-[#38FF9C] shadow-[0_0_24px_rgba(56,255,156,0.7)]"
        />
      </div>

      {/* LABEL */}

      <p className="mt-6 text-sm font-medium tracking-[0.12em] text-white/55">
        {label}
      </p>
    </div>
  )

  if (fullScreen) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050816]">
        {content}
      </div>
    )
  }

  return <div className="flex items-center justify-center py-20">{content}</div>
}
