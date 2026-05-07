'use client'

import DashboardLayout from '@/components/layout/DashboardLayout'

import FavoritesSidebar from '@/components/shared/FavoritesSidebar'
import UserDashboardConfig from '@/components/shared/UserDashboardConfig'

export default function FavoritesPage() {
  return (
    <DashboardLayout>
      {/* HERO */}

      <section className="relative overflow-hidden rounded-[36px] border border-white/8 bg-[#08111f]/75 p-8 shadow-[0_0_100px_rgba(56,255,156,0.08)] backdrop-blur-2xl md:p-10">
        {/* GLOW */}

        <div className="absolute left-[10%] top-0 h-48 w-48 rounded-full bg-emerald-400/10 blur-[100px]" />

        <div className="absolute bottom-0 right-[10%] h-56 w-56 rounded-full bg-lime-300/10 blur-[120px]" />

        {/* GRID */}

        <div className="absolute inset-0 grid-overlay opacity-[0.04]" />

        <div className="relative z-10">
          <div className="max-w-4xl">
            {/* BADGE */}

            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-5 py-2">
              <div className="h-2 w-2 rounded-full bg-[#38FF9C]" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#9FFFCF]">
                Personalized Terrain Hub
              </span>
            </div>

            {/* TITLE */}

            <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-6xl">
              Your Football
              <span className="gradient-text block">Exploration Space</span>
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-7 max-w-3xl text-lg leading-9 text-white/62">
              Save favorite teams, players, and terrain experiences to create a
              personalized football intelligence workspace with immersive
              analytics access.
            </p>
          </div>

          {/* STATS */}

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                value: '24',
                label: 'Saved Terrain Profiles',
              },

              {
                value: '91%',
                label: 'Momentum Tracking',
              },

              {
                value: '8.4M',
                label: 'Traversal Data',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/6 bg-white/3 p-6"
              >
                <h3 className="text-4xl font-black text-white">{item.value}</h3>

                <p className="mt-3 text-xs uppercase tracking-[0.14em] text-white/40">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}

      <section className="mt-8 grid gap-8 xl:grid-cols-[1fr_380px]">
        {/* LEFT */}

        <div>
          <FavoritesSidebar />
        </div>

        {/* RIGHT */}

        <div>
          <UserDashboardConfig />
        </div>
      </section>
    </DashboardLayout>
  )
}
