import { MatchMomentumPoint } from '@/types/match'

export function calculateMomentum(): MatchMomentumPoint[] {
  const points: MatchMomentumPoint[] = []

  for (let minute = 1; minute <= 90; minute += 3) {
    const wave = Math.sin(minute / 9) * 30

    const tacticalPulse = Math.cos(minute / 5) * 9

    const intensity = Math.max(10, Math.min(100, 55 + wave + tacticalPulse))

    points.push({
      minute,
      intensity: Number(intensity.toFixed(1)),
    })
  }

  return points
}
