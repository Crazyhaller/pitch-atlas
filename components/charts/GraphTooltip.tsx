interface GraphTooltipProps {
  label: string
  value: string | number
  detail?: string
}

export default function GraphTooltip({
  label,
  value,
  detail,
}: GraphTooltipProps) {
  return (
    <div className="rounded-2xl border border-emerald-400/15 bg-[#08111f]/90 px-5 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
        {label}
      </p>
      <h4 className="mt-2 text-3xl font-black text-[#38FF9C]">{value}</h4>
      {detail && <p className="mt-1 text-sm text-white/50">{detail}</p>}
    </div>
  )
}
