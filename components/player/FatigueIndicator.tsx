import { EnduranceDataPoint } from '@/types/player'

interface FatigueIndicatorProps {
  endurance: EnduranceDataPoint[]
}

export default function FatigueIndicator({ endurance }: FatigueIndicatorProps) {
  const latest = endurance.at(-1)?.stamina ?? 100
  const fatigue = 100 - latest

  return (
    <div className="premium-panel rounded-[24px] p-5 sm:p-6">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
        Fatigue Load
      </p>
      <div className="mt-5 flex items-end justify-between gap-4">
        <h3 className="text-4xl font-black text-white sm:text-5xl">{fatigue}%</h3>
        <span className="rounded-full border border-emerald-400/15 bg-emerald-400/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#38FF9C] sm:px-4">
          {fatigue > 45 ? 'Critical' : 'Stable'}
        </span>
      </div>
      <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/8">
        <div
          className="h-full rounded-full bg-linear-to-r from-[#38FF9C] via-[#D9FF3F] to-[#FF6B3D]"
          style={{ width: `${fatigue}%` }}
        />
      </div>
    </div>
  )
}
