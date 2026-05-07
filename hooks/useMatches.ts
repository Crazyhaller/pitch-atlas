'use client'

import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import type { AppDispatch, RootState } from '@/store'

import { getMatches } from '@/store/slices/matchSlice'

export function useMatches() {
  const dispatch = useDispatch<AppDispatch>()

  const { matches, loading, error } = useSelector(
    (state: RootState) => state.match,
  )

  useEffect(() => {
    dispatch(getMatches())
  }, [dispatch])

  return {
    matches,
    loading,
    error,
  }
}
