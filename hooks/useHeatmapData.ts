'use client'

import { useMemo } from 'react'

import movementData from '@/mock/playerMovement.json'

import { generateHeatmapData } from '@/lib/data/generateHeatmapData'
import { calculateIntensityZones } from '@/lib/visualization/calculateIntensityZones'

export function useHeatmapData() {
  const points = useMemo(() => {
    return [...movementData, ...generateHeatmapData(36)]
  }, [])

  const zones = useMemo(() => {
    return calculateIntensityZones(points)
  }, [points])

  return {
    points,
    zones,
  }
}
