import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#02060d] text-white">
      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,255,156,0.12),transparent_45%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,13,0.3),rgba(2,6,13,1))]" />

      <div className="absolute inset-0 grid-overlay opacity-[0.04]" />

      {/* GLOW */}

      <div className="absolute left-[12%] top-[10%] h-105 w-105 rounded-full bg-emerald-400/10 blur-[140px]" />

      <div className="absolute bottom-0 right-[8%] h-130 w-130 rounded-full bg-lime-300/10 blur-[180px]" />

      {/* CONTENT */}

      <div className="relative z-10 mx-auto flex w-full max-w-350 flex-col items-center justify-center px-6 py-24 text-center lg:px-10">
        {/* TERRAIN NUMBER */}

        <div className="relative">
          <div className="absolute inset-0 bg-emerald-400/20 blur-[120px]" />

          <h1 className="relative text-[8rem] font-black leading-none tracking-[-0.08em] text-white md:text-[12rem]">
            4<span className="gradient-text">0</span>4
          </h1>
        </div>

        {/* BADGE */}

        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-6 py-3">
          <div className="h-2 w-2 rounded-full bg-[#38FF9C]" />

          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#9FFFCF]">
            Terrain Lost
          </span>
        </div>

        {/* TITLE */}

        <h2 className="mt-8 max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-6xl">
          This Football Terrain
          <span className="gradient-text block">Could Not Be Found</span>
        </h2>

        {/* DESCRIPTION */}

        <p className="mt-8 max-w-3xl text-lg leading-9 text-white/60 md:text-xl">
          The immersive match journey you are searching for may no longer exist
          or has moved beyond the current traversal coordinates.
        </p>

        {/* ACTIONS */}

        <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
          <Link
            href="/"
            className="group relative overflow-hidden rounded-full border border-emerald-400/20 bg-emerald-400 px-8 py-5 text-sm font-black uppercase tracking-[0.18em] text-[#04110b] transition-all duration-300 hover:scale-[1.03]"
          >
            <span className="relative z-10">Return Home</span>

            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.18),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>

          <Link
            href="/dashboard"
            className="rounded-full border border-white/10 bg-white/3 px-8 py-5 text-sm font-black uppercase tracking-[0.18em] text-white/70 transition-all duration-300 hover:border-emerald-400/15 hover:bg-emerald-400/10 hover:text-[#38FF9C]"
          >
            Open Dashboard
          </Link>
        </div>

        {/* MINI TERRAIN */}

        <div className="relative mt-20 h-60 w-full max-w-180 overflow-hidden rounded-[36px] border border-white/8 bg-[#08111f]/75 backdrop-blur-2xl">
          {/* GRID */}

          <div className="absolute inset-0 grid-overlay opacity-[0.04]" />

          {/* PITCH */}

          <div className="absolute inset-8 rounded-[28px] border border-[#38FF9C]/25">
            {/* CENTER */}

            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#38FF9C]/20" />

            <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#38FF9C]/25" />

            {/* LOST NODE */}

            <div className="absolute left-[72%] top-[28%]">
              <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-3xl" />

              <div className="relative h-6 w-6 rounded-full border-2 border-white bg-[#38FF9C]" />
            </div>

            {/* PATH */}

            <svg
              viewBox="0 0 1000 320"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
            >
              <path
                d="M120 260 C240 180, 380 160, 520 120 S760 80, 840 40"
                fill="none"
                stroke="#38FF9C"
                strokeWidth="4"
                strokeDasharray="14 12"
                strokeLinecap="round"
                opacity="0.8"
              />
            </svg>
          </div>
        </div>
      </div>
    </main>
  )
}
