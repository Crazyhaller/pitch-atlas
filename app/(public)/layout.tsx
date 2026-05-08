import type { ReactNode } from 'react'

interface PublicLayoutProps {
  children: ReactNode
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#02060d] text-white">
      {/* BACKGROUND */}

      <div className="pointer-events-none fixed inset-0">
        {/* RADIAL */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,255,156,0.10),transparent_42%)]" />

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,13,0.2),rgba(2,6,13,1))]" />

        {/* GRID */}

        <div className="grid-overlay absolute inset-0 opacity-[0.04]" />

        {/* GLOW */}

        <div className="absolute left-[10%] top-[10%] h-105 w-105 rounded-full bg-emerald-400/10 blur-[140px]" />

        <div className="absolute bottom-0 right-[10%] h-130 w-130 rounded-full bg-lime-300/10 blur-[180px]" />
      </div>

      {/* CONTENT */}

      <div className="relative z-10">{children}</div>
    </div>
  )
}
