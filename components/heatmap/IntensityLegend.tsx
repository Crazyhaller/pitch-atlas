const legendItems = [
  {
    label: 'Low',
    color: '#38FF9C',
  },
  {
    label: 'Medium',
    color: '#D9FF3F',
  },
  {
    label: 'High',
    color: '#FF6B3D',
  },
]

export default function IntensityLegend() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {legendItems.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3 py-2"
        >
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/48">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}
