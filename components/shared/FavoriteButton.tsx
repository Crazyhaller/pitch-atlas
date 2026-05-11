'use client'

import { motion } from 'motion/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'

import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'

import { FavouriteEntity } from '@/store/slices/favouritesSlice'

import { useFavourites } from '@/hooks/useFavourites'

interface FavouriteButtonProps {
  entity: FavouriteEntity
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: {
    button: 'h-10 w-10 rounded-xl',
    icon: 'h-4 w-4',
  },

  md: {
    button: 'h-12 w-12 rounded-2xl',
    icon: 'h-5 w-5',
  },

  lg: {
    button: 'h-14 w-14 rounded-3xl',
    icon: 'h-6 w-6',
  },
}

export default function FavouriteButton({
  entity,
  size = 'md',
}: FavouriteButtonProps) {
  const { favourites, toggleFavourite } = useFavourites()

  const isFavourite = favourites.some(
    (item) => item.id === entity.id && item.type === entity.type,
  )

  return (
    <motion.button
      whileTap={{
        scale: 0.92,
      }}
      whileHover={{
        scale: 1.05,
      }}
      type="button"
      onClick={() => toggleFavourite(entity)}
      className={`relative flex items-center justify-center border transition-all duration-300 ${
        sizeClasses[size].button
      } ${
        isFavourite
          ? 'border-emerald-400/20 bg-emerald-400/10 text-[#38FF9C] shadow-[0_0_30px_rgba(56,255,156,0.18)]'
          : 'border-white/8 bg-white/3 text-white/55 hover:border-emerald-400/15 hover:bg-emerald-400/10 hover:text-[#38FF9C]'
      }`}
    >
      {/* GLOW */}

      {isFavourite && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.6,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          className="absolute inset-0 rounded-[inherit] bg-emerald-400/10 blur-xl"
        />
      )}

      {/* ICON */}

      <FontAwesomeIcon
        icon={isFavourite ? solidHeart : regularHeart}
        className={`relative z-10 ${sizeClasses[size].icon}`}
      />
    </motion.button>
  )
}
