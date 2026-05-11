'use client'

interface TimelineSliderProps {
  value: number
  onChange: (value: number) => void
  max?: number
}

export default function TimelineSlider({
  value,
  onChange,
  max = 90,
}: TimelineSliderProps) {
  return (
    <label className="block">
      <span className="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-[0.16em] text-white/40">
        <span>Match Timeline</span>
        <span className="text-[#38FF9C]">{Math.round(value)}&apos;</span>
      </span>
      <input
        type="range"
        min={0}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-[#38FF9C]"
      />
    </label>
  )
}
