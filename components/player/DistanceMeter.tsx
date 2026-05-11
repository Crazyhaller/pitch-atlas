import { PlayerMovementPoint } from '@/types/player'

import { formatNumber } from '@/lib/utils/formatNumber'

interface DistanceMeterProps {
  movement: PlayerMovementPoint[]
}

function calculateDistance(points: PlayerMovementPoint[]) {
  return points.reduce((total, point, index) => {
    const previous = points[index - 1]

    if (!previous) {
      return total
    }

    const dx = point.x - previous.x
    const dy = point.y - previous.y

    return total + Math.sqrt(dx * dx + dy * dy) * 0.105
  }, 0)
}

export default function DistanceMeter({ movement }: DistanceMeterProps) {
  const distance = calculateDistance(movement)

  return (
    <div className="premium-panel rounded-[24px] p-5 sm:p-6">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
        Traversal Distance
      </p>
      <h3 className="mt-4 text-4xl font-black text-white sm:text-5xl">
        {formatNumber(distance)}
        <span className="text-xl text-[#38FF9C]"> km</span>
      </h3>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/8">
        <div
          className="h-full rounded-full bg-[#38FF9C]"
          style={{ width: `${Math.min(distance * 8, 100)}%` }}
        />
      </div>
    </div>
  )
}
