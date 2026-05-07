import { PlayerMovementPoint } from '@/types/player'

export function calculateIntensityZones(points: PlayerMovementPoint[]) {
  return points.reduce(
    (zones, point) => {
      if (point.intensity >= 80) {
        zones.high += 1
      } else if (point.intensity >= 50) {
        zones.medium += 1
      } else {
        zones.low += 1
      }

      return zones
    },
    {
      low: 0,
      medium: 0,
      high: 0,
    },
  )
}
