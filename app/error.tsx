'use client'

import Link from 'next/link'

interface GlobalErrorPageProps {
  error: Error & {
    digest?: string
  }

  reset: () => void
}

export default function GlobalErrorPage({
  error,
  reset,
}: GlobalErrorPageProps) {
  console.error(error)

  return (
    <html lang="en">
      <body className="bg-[#02060d] text-white">
        <main className="relative flex min-h-screen overflow-hidden">
          {/* BACKGROUND */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,255,156,0.12),transparent_45%)]" />

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,13,0.3),rgba(2,6,13,1))]" />

          <div className="absolute inset-0 grid-overlay opacity-[0.04]" />

          {/* GLOW */}

          <div className="absolute left-[10%] top-[12%] h-105 w-105 rounded-full bg-emerald-400/10 blur-[140px]" />

          <div className="absolute bottom-0 right-[10%] h-130 w-130 rounded-full bg-lime-300/10 blur-[180px]" />

          {/* CONTENT */}

          <div className="relative z-10 mx-auto flex w-full max-w-300 flex-col items-center justify-center px-6 py-24 text-center lg:px-10">
            {/* ICON */}

            <div className="relative">
              {/* OUTER */}

              <div className="flex h-40 w-40 items-center justify-center rounded-full border border-red-400/20 bg-red-400/10">
                <div className="text-7xl font-black text-red-300">!</div>
              </div>

              {/* GLOW */}

              <div className="absolute inset-0 rounded-full bg-red-400/10 blur-[80px]" />
            </div>

            {/* BADGE */}

            <div className="mt-12 inline-flex items-center gap-3 rounded-full border border-red-400/15 bg-red-400/10 px-6 py-3">
              <div className="h-2 w-2 rounded-full bg-red-300" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-red-200">
                Terrain System Failure
              </span>
            </div>

            {/* TITLE */}

            <h1 className="mt-8 text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-6xl">
              Football Terrain
              <span className="block text-red-300">Explorer Crashed</span>
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-8 max-w-3xl text-lg leading-9 text-white/60 md:text-xl">
              An unexpected system issue interrupted the immersive football
              terrain exploration experience.
            </p>

            {/* ACTIONS */}

            <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
              <button
                type="button"
                onClick={reset}
                className="group relative overflow-hidden rounded-full border border-emerald-400/20 bg-emerald-400 px-8 py-5 text-sm font-black uppercase tracking-[0.18em] text-[#04110b] transition-all duration-300 hover:scale-[1.03]"
              >
                <span className="relative z-10">Retry Explorer</span>

                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.18),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>

              <Link
                href="/dashboard"
                className="rounded-full border border-white/10 bg-white/3 px-8 py-5 text-sm font-black uppercase tracking-[0.18em] text-white/70 transition-all duration-300 hover:border-emerald-400/15 hover:bg-emerald-400/10 hover:text-[#38FF9C]"
              >
                Open Dashboard
              </Link>
            </div>

            {/* DEBUG PANEL */}

            <div className="mt-20 w-full max-w-205 overflow-hidden rounded-4xl border border-red-400/10 bg-[#08111f]/75 backdrop-blur-2xl">
              {/* HEADER */}

              <div className="border-b border-white/6 px-6 py-5">
                <h2 className="text-left text-lg font-black text-white">
                  Terrain Diagnostic Feed
                </h2>
              </div>

              {/* BODY */}

              <div className="space-y-5 p-6">
                {[
                  {
                    label: 'Explorer State',
                    value: 'Interrupted',
                  },

                  {
                    label: 'Momentum Engine',
                    value: 'Unavailable',
                  },

                  {
                    label: 'Traversal Feed',
                    value: 'Disconnected',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-3xl border border-white/6 bg-white/3 p-5"
                  >
                    <p className="text-sm uppercase tracking-[0.14em] text-white/40">
                      {item.label}
                    </p>

                    <h3 className="font-black text-red-300">{item.value}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
