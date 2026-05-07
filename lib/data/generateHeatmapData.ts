import { PlayerMovementPoint } from '@/types/player'

export function generateHeatmapData(count = 250): PlayerMovementPoint[] {
  const data: PlayerMovementPoint[] = []

  for (let i = 0; i < count; i++) {
    data.push({
      x: Math.random() * 100,
      y: Math.random() * 100,

      intensity: Math.floor(Math.random() * 100),

      minute: Math.floor(Math.random() * 90),
    })
  }

  return data
}
