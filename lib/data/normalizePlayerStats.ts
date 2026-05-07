import { PlayerStatistics } from '@/types/player'

export function normalizePlayerStats(stats: PlayerStatistics) {
  return {
    ...stats,

    rating: Math.min(10, Math.max(0, stats.rating)),

    passAccuracy: Math.min(
      100,
      Math.round((stats.passes / Math.max(stats.passes + 15, 1)) * 100),
    ),
  }
}
