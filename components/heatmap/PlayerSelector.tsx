'use client'

interface PlayerSelectorProps {
  value: string
  onChange: (value: string) => void
}

const players = [
  'Marcus Rashford',
  'Kevin De Bruyne',
  'Bukayo Saka',
  'Erling Haaland',
]

export default function PlayerSelector({ value, onChange }: PlayerSelectorProps) {
  return (
    <label className="block">
      <span className="mb-3 block text-xs font-bold uppercase tracking-[0.16em] text-white/40">
        Player Terrain
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-2xl border border-white/8 bg-[#08111f] px-4 text-sm font-semibold text-white outline-none transition-all focus:border-emerald-400/25"
      >
        {players.map((player) => (
          <option key={player} value={player}>
            {player}
          </option>
        ))}
      </select>
    </label>
  )
}
