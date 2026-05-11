'use client'

import { motion } from 'motion/react'

export default function AnimatedHeatOverlay() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_45%,rgba(56,255,156,0.16),transparent_28%),radial-gradient(circle_at_74%_32%,rgba(255,107,61,0.12),transparent_24%)]"
      animate={{
        opacity: [0.35, 0.6, 0.35],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
