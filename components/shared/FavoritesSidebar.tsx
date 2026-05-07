'use client'

import Link from 'next/link'

import { motion } from 'motion/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faHeart,
  faShieldHalved,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

import { useFavourites } from '@/hooks/useFavourites'

import EmptyState from './EmptyState'

export default function FavouritesSidebar() {
  const { favourites } = useFavourites()

  if (favourites.length === 0) {
    return (
      <EmptyState
        title="No Favourites Yet"
        description="Save your favourite players and teams to build your personalized football exploration hub."
      />
    )
  }

  return (
    <div className="rounded-4xl border border-white/8 bg-[#08111f]/75 p-6 backdrop-blur-2xl">
      {/* HEADER */}

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-black text-white">Favourites Hub</h3>

          <p className="mt-1 text-sm text-white/45">
            Personalized terrain collection
          </p>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-3xl border border-emerald-400/15 bg-emerald-400/10">
          <FontAwesomeIcon icon={faHeart} className="h-6 w-6 text-[#38FF9C]" />
        </div>
      </div>

      {/* LIST */}

      <div className="space-y-4">
        {favourites.map((favourite, index) => (
          <motion.div
            key={`${favourite.type}-${favourite.id}`}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.05,
            }}
          >
            <Link
              href={
                favourite.type === 'player'
                  ? `/player/${favourite.id}`
                  : `/team/${favourite.id}`
              }
              className="group flex items-center gap-5 rounded-3xl border border-white/6 bg-white/3 p-5 transition-all duration-300 hover:border-emerald-400/15 hover:bg-emerald-400/8"
            >
              {/* ICON */}

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/6 bg-[#0c1728] transition-all duration-300 group-hover:border-emerald-400/15 group-hover:bg-emerald-400/10">
                <FontAwesomeIcon
                  icon={favourite.type === 'player' ? faUser : faShieldHalved}
                  className="h-5 w-5 text-[#38FF9C]"
                />
              </div>

              {/* CONTENT */}

              <div className="flex-1">
                <h4 className="font-bold text-white transition-colors duration-300 group-hover:text-[#38FF9C]">
                  {favourite.name}
                </h4>

                <p className="mt-1 text-sm uppercase tracking-[0.12em] text-white/40">
                  {favourite.type}
                </p>
              </div>

              {/* STATUS */}

              <div className="rounded-full border border-emerald-400/15 bg-emerald-400/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#38FF9C]">
                Saved
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
