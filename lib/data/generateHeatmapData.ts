import { PlayerMovementPoint } from '@/types/player'

export function generateHeatmapData(count = 250): PlayerMovementPoint[] {
  const data: PlayerMovementPoint[] = []

  for (let i = 0; i < count; i++) {
    const phase = i / Math.max(count - 1, 1)
    const wave = Math.sin(phase * Math.PI * 4)

    data.push({
      x: 10 + phase * 80,
      y: 50 + wave * 28,

      intensity: Math.floor(35 + Math.abs(wave) * 60),

      minute: Math.floor(phase * 90),
    })
  }

  return data
}
