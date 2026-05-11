'use client'

interface HeatmapControlsProps {
  intensityFloor: number
  onIntensityFloorChange: (value: number) => void
  showPaths: boolean
  onShowPathsChange: (value: boolean) => void
  mode: 'density' | 'traversal'
  onModeChange: (value: 'density' | 'traversal') => void
}

export default function HeatmapControls({
  intensityFloor,
  onIntensityFloorChange,
  showPaths,
  onShowPathsChange,
  mode,
  onModeChange,
}: HeatmapControlsProps) {
  return (
    <div className="rounded-[22px] border border-white/8 bg-[#08111f]/75 p-4">
      <div className="grid grid-cols-2 gap-2 rounded-2xl border border-white/6 bg-white/[0.03] p-1">
        {(['density', 'traversal'] as const).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onModeChange(item)}
            className={`rounded-xl px-3 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition-all ${
              mode === item
                ? 'bg-emerald-400/15 text-[#38FF9C]'
                : 'text-white/46 hover:bg-white/[0.04] hover:text-white'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <label className="mt-4 block">
        <span className="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-[0.14em] text-white/40">
          <span>Intensity Floor</span>
          <span className="text-[#38FF9C]">{intensityFloor}%</span>
        </span>
        <input
          type="range"
          min={0}
          max={90}
          step={5}
          value={intensityFloor}
          onChange={(event) =>
            onIntensityFloorChange(Number(event.target.value))
          }
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-[#38FF9C]"
        />
      </label>

      <label className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3">
        <span className="text-sm font-semibold text-white/70">
          Traversal path
        </span>
        <input
          type="checkbox"
          checked={showPaths}
          onChange={(event) => onShowPathsChange(event.target.checked)}
          className="h-5 w-5 accent-[#38FF9C]"
        />
      </label>
    </div>
  )
}
