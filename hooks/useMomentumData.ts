'use client'

import { useMemo } from 'react'

import { calculateMomentum } from '@/lib/data/calculateMomentum'

export function useMomentumData() {
  const momentum = useMemo(() => {
    return calculateMomentum()
  }, [])

  return momentum
}
