'use client'

import { MatchMomentumPoint } from '@/types/match'

import AnimatedLineChart from './AnimatedLineChart'

interface ElevationChartProps {
  momentum: MatchMomentumPoint[]
  title?: string
  subtitle?: string
}

export default function ElevationChart({
  momentum,
  title = 'Momentum Elevation',
  subtitle = 'Tactical pressure curve',
}: ElevationChartProps) {
  return (
    <div className="premium-panel relative min-w-0 overflow-hidden rounded-[26px] p-5 sm:p-6">
      <div className="absolute inset-0 grid-overlay opacity-[0.04]" />
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-400/10 blur-[90px]" />

      <div className="relative z-10 mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h3 className="text-2xl font-black leading-tight text-white">
            {title}
          </h3>
          <p className="mt-2 text-sm text-white/45">{subtitle}</p>
        </div>

        <div className="w-fit rounded-full border border-emerald-400/15 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#38FF9C]">
          Live Curve
        </div>
      </div>

      <div className="relative z-10 rounded-[22px] border border-white/6 bg-[#06101b]/80 p-3 sm:p-4">
        <AnimatedLineChart
          points={momentum.map((point) => ({
            label: `${point.minute}'`,
            value: point.intensity,
          }))}
          heightClassName="h-72"
        />
      </div>
    </div>
  )
}
