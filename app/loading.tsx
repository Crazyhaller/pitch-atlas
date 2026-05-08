export default function GlobalLoadingPage() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#02060d] text-white">
      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,255,156,0.12),transparent_45%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,13,0.3),rgba(2,6,13,1))]" />

      <div className="absolute inset-0 grid-overlay opacity-[0.04]" />

      {/* GLOW */}

      <div className="absolute left-[10%] top-[12%] h-105 w-105 rounded-full bg-emerald-400/10 blur-[140px]" />

      <div className="absolute bottom-0 right-[10%] h-130 w-130 rounded-full bg-lime-300/10 blur-[180px]" />

      {/* CONTENT */}

      <div className="relative z-10 mx-auto flex w-full max-w-300 flex-col items-center justify-center px-6 py-24 text-center lg:px-10">
        {/* LOADER */}

        <div className="relative">
          {/* OUTER RING */}

          <div className="h-40 w-40 rounded-full border border-emerald-400/15" />

          {/* ROTATING */}

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#38FF9C]" />

          {/* INNER */}

          <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#08111f]/80 backdrop-blur-xl">
            <div className="h-5 w-5 rounded-full bg-[#38FF9C] shadow-[0_0_30px_rgba(56,255,156,0.9)]" />
          </div>

          {/* GLOW */}

          <div className="absolute inset-0 rounded-full bg-emerald-400/10 blur-[80px]" />
        </div>

        {/* BADGE */}

        <div className="mt-12 inline-flex items-center gap-3 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-6 py-3">
          <div className="h-2 w-2 animate-pulse rounded-full bg-[#38FF9C]" />

          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#9FFFCF]">
            Terrain System Initializing
          </span>
        </div>

        {/* TITLE */}

        <h1 className="mt-8 text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-6xl">
          Loading Football
          <span className="gradient-text block">Terrain Intelligence</span>
        </h1>

        {/* DESCRIPTION */}

        <p className="mt-8 max-w-3xl text-lg leading-9 text-white/60 md:text-xl">
          Preparing immersive match exploration, spatial traversal, momentum
          elevation curves, and tactical terrain systems.
        </p>

        {/* STATUS */}

        <div className="mt-16 w-full max-w-130">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.16em] text-white/45">
            <span>Initializing Explorer</span>

            <span>91%</span>
          </div>

          {/* BAR */}

          <div className="mt-4 h-3 overflow-hidden rounded-full border border-white/6 bg-white/3">
            <div className="h-full w-[91%] rounded-full bg-[#38FF9C] shadow-[0_0_24px_rgba(56,255,156,0.6)]" />
          </div>
        </div>

        {/* MINI GRID */}

        <div className="mt-20 grid w-full max-w-230 gap-5 md:grid-cols-3">
          {[
            {
              label: 'Traversal Data',
              value: 'Synchronizing',
            },

            {
              label: 'Heat Terrain',
              value: 'Rendering',
            },

            {
              label: 'Momentum Curve',
              value: 'Calibrating',
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-[28px] border border-white/8 bg-[#08111f]/75 p-6 backdrop-blur-2xl"
            >
              <div className="mb-5 h-2 w-2 animate-pulse rounded-full bg-[#38FF9C]" />

              <h3 className="text-xl font-black text-white">{item.value}</h3>

              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/40">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
