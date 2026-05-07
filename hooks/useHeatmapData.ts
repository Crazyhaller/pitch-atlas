'use client'

import { useMemo } from 'react'

import movementData from '@/mock/playerMovement.json'

import { calculateIntensityZones } from '@/lib/visualization/calculateIntensityZones'

export function useHeatmapData() {
  const zones = useMemo(() => {
    return calculateIntensityZones(movementData)
  }, [])

  return {
    points: movementData,
    zones,
  }
}
