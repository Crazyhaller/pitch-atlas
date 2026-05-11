'use client'

import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/store/hooks'

import {
  addFavourite,
  FavouriteEntity,
  hydrateFavourites,
  removeFavourite,
} from '@/store/slices/favouritesSlice'

import { APP_CONFIG } from '@/constants/config'

export function useFavourites() {
  const dispatch = useAppDispatch()

  const favourites = useAppSelector((state) => state.favourites.items)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(APP_CONFIG.storage.favourites)

      if (stored) {
        dispatch(hydrateFavourites(JSON.parse(stored)))
      }
    } catch {
      dispatch(hydrateFavourites([]))
    }
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem(
      APP_CONFIG.storage.favourites,
      JSON.stringify(favourites),
    )
  }, [favourites])

  const toggleFavourite = (entity: FavouriteEntity) => {
    const exists = favourites.some(
      (item) => item.id === entity.id && item.type === entity.type,
    )

    if (exists) {
      dispatch(
        removeFavourite({
          id: entity.id,
          type: entity.type,
        }),
      )
    } else {
      dispatch(addFavourite(entity))
    }
  }

  return {
    favourites,

    toggleFavourite,
  }
}
