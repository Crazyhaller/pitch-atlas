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
  const [searchQuery, setSearchQuery] = useState('')

  const { matches, loading, error } = useMatches()

  const filteredMatches = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()
    const queryFilteredMatches = normalizedQuery
      ? matches.filter((match) => {
          const haystack = [
            match.homeTeam.name,
            match.homeTeam.shortName,
            match.awayTeam.name,
            match.awayTeam.shortName,
            match.league.name,
            match.status.long,
            match.status.short,
          ]
            .filter(Boolean)
            .join(' ')
            .toLowerCase()

          return haystack.includes(normalizedQuery)
        })
      : matches

    if (activeTab === 'all') {
      return queryFilteredMatches
    }

    if (activeTab === 'live') {
      const liveStatuses = new Set(['LIVE', 'IN_PLAY', 'PAUSED', 'HT'])

      return queryFilteredMatches.filter((match) =>
        liveStatuses.has(match.status.short),
      )
    }

    if (activeTab === 'finished') {
      const finishedStatuses = new Set(['FT', 'FINISHED', 'AWARDED'])

      return queryFilteredMatches.filter((match) =>
        finishedStatuses.has(match.status.short),
      )
    }

    if (activeTab === 'scheduled') {
      const scheduledStatuses = new Set(['NS', 'TIMED', 'SCHEDULED'])

      return queryFilteredMatches.filter((match) =>
        scheduledStatuses.has(match.status.short),
      )
    }

    return queryFilteredMatches
  }, [matches, activeTab, searchQuery])

  return (
    <DashboardLayout>
      {/* HERO */}

      <section className="premium-panel relative z-20 overflow-visible rounded-[28px] p-6 sm:p-8 md:p-10">
        {/* GLOW */}

        <div className="absolute left-[10%] top-0 h-48 w-48 rounded-full bg-emerald-400/10 blur-[100px]" />

        <div className="absolute bottom-0 right-[10%] h-56 w-56 rounded-full bg-lime-300/10 blur-[120px]" />

        {/* GRID */}

        <div className="absolute inset-0 grid-overlay opacity-[0.04]" />

        <div className="relative z-10">
          {/* HEADER */}

          <div className="flex min-w-0 flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
            <div className="min-w-0 max-w-3xl">
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

            <div className="grid w-full grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 xl:w-130">
              {[
                { label: 'Matches', value: matches.length },
                {
                  label: 'Live Terrain',
                  value: filteredMatches.filter(
                    (match) => match.status.short === 'LIVE',
                  ).length,
                },
                { label: 'Momentum Peaks', value: '91%' },
                { label: 'Traversal', value: '8.4M' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[18px] border border-white/6 bg-white/[0.03] p-3 sm:p-4 flex flex-col items-center justify-center text-center"
                >
                  <h3 className="text-lg font-black text-white sm:text-xl">
                    {item.value}
                  </h3>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/40">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SEARCH */}

          <div className="mt-10">
            <SearchBar
              value={searchQuery}
              onQueryChange={setSearchQuery}
              placeholder="Search clubs, leagues, statuses..."
            />
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

      <section className="relative z-0 mt-6 min-w-0 sm:mt-8">
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
