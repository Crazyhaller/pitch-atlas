'use client'

import { useMemo, useState } from 'react'

import DashboardLayout from '@/components/layout/DashboardLayout'

import SearchBar from '@/components/shared/SearchBar'
import FilterTabs from '@/components/shared/FilterTabs'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import ErrorState from '@/components/shared/ErrorState'
import EmptyState from '@/components/shared/EmptyState'

import RecentMatchesList from '@/components/dashboard/RecentMatchesList'

import { useMatches } from '@/hooks/useMatches'

const matchTabs = [
  {
    label: 'All Matches',
    value: 'all',
  },

  {
    label: 'Live',
    value: 'live',
  },

  {
    label: 'Finished',
    value: 'finished',
  },

  {
    label: 'Scheduled',
    value: 'scheduled',
  },
]

export default function MatchesPage() {
  const [activeTab, setActiveTab] = useState('all')

  const { matches, loading, error } = useMatches()

  const filteredMatches = useMemo(() => {
    if (activeTab === 'all') {
      return matches
    }

    if (activeTab === 'live') {
      return matches.filter((match) => match.status.short === 'LIVE')
    }

    if (activeTab === 'finished') {
      return matches.filter((match) => match.status.short === 'FT')
    }

    if (activeTab === 'scheduled') {
      return matches.filter((match) => match.status.short === 'NS')
    }

    return matches
  }, [matches, activeTab])

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
          {/* HEADER */}

          <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-5 py-2">
                <div className="h-2 w-2 rounded-full bg-[#38FF9C]" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#9FFFCF]">
                  Match Terrain Feed
                </span>
              </div>

              <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-6xl">
                Explore Live Football
                <span className="gradient-text block">Match Terrain</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-9 text-white/62">
                Monitor momentum shifts, traversal intensity, spatial
                transitions, and tactical movement patterns across live football
                terrain experiences.
              </p>
            </div>

            {/* QUICK STATS */}

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:w-130">
              {[
                {
                  label: 'Matches',
                  value: matches.length,
                },

                {
                  label: 'Live Terrain',
                  value: filteredMatches.filter(
                    (match) => match.status.short === 'LIVE',
                  ).length,
                },

                {
                  label: 'Momentum Peaks',
                  value: '91%',
                },

                {
                  label: 'Traversal',
                  value: '8.4M',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/6 bg-white/3 p-5"
                >
                  <h3 className="text-3xl font-black text-white">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/40">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SEARCH */}

          <div className="mt-10">
            <SearchBar placeholder="Search football matches..." />
          </div>

          {/* FILTERS */}

          <div className="mt-8">
            <FilterTabs
              tabs={matchTabs}
              activeTab={activeTab}
              onChange={setActiveTab}
            />
          </div>
        </div>
      </section>

      {/* CONTENT */}

      <section className="mt-8">
        {loading && <LoadingSpinner />}

        {error && <ErrorState />}

        {!loading && !error && filteredMatches.length === 0 && (
          <EmptyState
            title="No Matches Found"
            description="No football terrain experiences match the selected filters right now."
          />
        )}

        {!loading && !error && filteredMatches.length > 0 && (
          <RecentMatchesList matches={filteredMatches} />
        )}
      </section>
    </DashboardLayout>
  )
}
