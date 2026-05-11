'use client'

import Link from 'next/link'
import { useState } from 'react'

import {
  faChartLine,
  faCompass,
  faFire,
  faRoute,
  faShieldHalved,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import DashboardLayout from '@/components/layout/DashboardLayout'
import LeagueTable from '@/components/dashboard/LeagueTable'
import RecentMatchesList from '@/components/dashboard/RecentMatchesList'
import StatsCard from '@/components/dashboard/StatsCard'
import TopPlayersCarousel from '@/components/dashboard/TopPlayersCarousel'
import SearchBar from '@/components/shared/SearchBar'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import ErrorState from '@/components/shared/ErrorState'
import ElevationChart from '@/components/charts/ElevationChart'
import GraphTooltip from '@/components/charts/GraphTooltip'
import PitchCanvas from '@/components/heatmap/PitchCanvas'
import HeatmapControls from '@/components/heatmap/HeatmapControls'
import IntensityLegend from '@/components/heatmap/IntensityLegend'
import PlayerSelector from '@/components/heatmap/PlayerSelector'

import { useHeatmapData } from '@/hooks/useHeatmapData'
import { useMatches } from '@/hooks/useMatches'
import { useMomentumData } from '@/hooks/useMomentumData'
import { samplePlayers, sampleStandings } from '@/lib/data/sampleFootball'
import { formatNumber } from '@/lib/utils/formatNumber'

export default function DashboardPage() {
  const { matches, loading, error } = useMatches()
  const momentum = useMomentumData()
  const { zones } = useHeatmapData()
  const [selectedPlayer, setSelectedPlayer] = useState('Marcus Rashford')
  const [intensityFloor, setIntensityFloor] = useState(25)
  const [showPaths, setShowPaths] = useState(true)
  const [dashboardMatchLimit, setDashboardMatchLimit] = useState(3)
  const [heatmapMode, setHeatmapMode] = useState<'density' | 'traversal'>(
    'density',
  )

  const visibleMatches = matches.length > 0 ? matches : []
  const liveStatuses = new Set(['LIVE', 'IN_PLAY', 'PAUSED', 'HT'])
  const activeMatches = visibleMatches.filter((match) =>
    liveStatuses.has(match.status.short),
  )
  const dashboardMatches = visibleMatches.slice(0, dashboardMatchLimit)
  const peakMomentum = Math.max(...momentum.map((point) => point.intensity))

  return (
    <DashboardLayout>
      <section className="premium-panel relative overflow-visible rounded-[28px] p-6 sm:p-8 md:p-10 z-20">
        <div className="absolute inset-0 grid-overlay opacity-[0.04]" />
        <div className="absolute right-[8%] top-0 h-56 w-56 rounded-full bg-emerald-400/10 blur-[120px]" />

        <div className="relative z-10 grid min-w-0 gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] xl:items-end">
          <div className="min-w-0">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-5 py-2">
              <span className="h-2 w-2 rounded-full bg-[#38FF9C]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#9FFFCF]">
                Live Football Terrain Command
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-6xl">
              Tactical Intelligence
              <span className="gradient-text block">Dashboard</span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-9 text-white/62">
              Monitor league tables, live match terrain, player traversal,
              momentum elevation, and heat intensity from one cinematic football
              analytics workspace.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/player/1" className="btn-primary justify-center">
                <FontAwesomeIcon icon={faUser} className="h-4 w-4" />
                Open Player Profile
              </Link>
              <Link href="/explorer" className="btn-secondary justify-center">
                <FontAwesomeIcon
                  icon={faCompass}
                  className="h-4 w-4 text-[#38FF9C]"
                />
                Launch Explorer
              </Link>
            </div>
          </div>

          <SearchBar placeholder="Search players, teams, and match terrain..." />
        </div>
      </section>

      <section className="relative z-0 mt-6 grid min-w-0 gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Live Matches"
          value={activeMatches.length}
          change="Synced"
          icon={faShieldHalved}
          description="Current football terrain feeds with live tactical state."
        />
        <StatsCard
          title="Peak Momentum"
          value={`${Math.round(peakMomentum)}%`}
          change="+12%"
          icon={faChartLine}
          description="Highest elevation point from the active momentum curve."
        />
        <StatsCard
          title="Heat Zones"
          value={zones.high}
          change="High"
          icon={faFire}
          description="High-intensity traversal zones detected on the pitch."
        />
        <StatsCard
          title="Traversal"
          value={`${formatNumber(8.4)}M`}
          change="Season"
          icon={faRoute}
          description="Aggregated movement events powering spatial analysis."
        />
      </section>

      <section className="mt-6 grid min-w-0 gap-6 sm:mt-8 sm:gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="min-w-0 space-y-6 sm:space-y-8">
          <LeagueTable
            standings={sampleStandings}
            leagueName="Premier League"
          />

          {loading && <LoadingSpinner />}

          {error && (
            <ErrorState
              title="Live Feed Fallback Active"
              description="The external match feed is unavailable, so PitchAtlas is using its local terrain simulation."
            />
          )}

          {!loading && !error && visibleMatches.length > 0 && (
            <div className="space-y-5">
              <RecentMatchesList matches={dashboardMatches} />

              {dashboardMatchLimit < visibleMatches.length && (
                <button
                  type="button"
                  onClick={() =>
                    setDashboardMatchLimit((current) => current + 3)
                  }
                  className="w-full rounded-[22px] border border-emerald-400/15 bg-emerald-400/10 px-5 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#38FF9C] transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/15"
                >
                  Show More Matches
                </button>
              )}
            </div>
          )}
        </div>

        <div className="min-w-0 space-y-6 sm:space-y-8">
          <div className="premium-panel min-w-0 rounded-[26px] p-5 sm:p-6">
            <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="min-w-0">
                <h2 className="text-3xl font-black text-white">
                  Terrain Heatmap
                </h2>
                <p className="mt-2 text-sm text-white/45">
                  {selectedPlayer} movement density
                </p>
              </div>
              <IntensityLegend />
            </div>

            <PitchCanvas
              intensityFloor={intensityFloor}
              showPaths={showPaths}
              className="min-h-[250px] sm:min-h-[300px]"
            />

            <div className="mt-4 grid min-w-0 gap-4 2xl:grid-cols-[minmax(0,1fr)_230px]">
              <HeatmapControls
                intensityFloor={intensityFloor}
                onIntensityFloorChange={setIntensityFloor}
                showPaths={showPaths}
                onShowPathsChange={setShowPaths}
                mode={heatmapMode}
                onModeChange={setHeatmapMode}
              />
              <div className="grid gap-4">
                <PlayerSelector
                  value={selectedPlayer}
                  onChange={setSelectedPlayer}
                />
                <GraphTooltip
                  label="Heat Mode"
                  value={heatmapMode}
                  detail={`${zones.high} peak zones active`}
                />
              </div>
            </div>
          </div>

          <ElevationChart
            momentum={momentum}
            title="Momentum Elevation"
            subtitle="Pressure, transitions, and tactical spikes"
          />
        </div>
      </section>

      <section className="mt-6 sm:mt-8">
        <TopPlayersCarousel players={samplePlayers} />
      </section>
    </DashboardLayout>
  )
}
