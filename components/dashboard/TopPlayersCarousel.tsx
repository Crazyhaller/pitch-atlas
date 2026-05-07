'use client'

import Link from 'next/link'

import { motion } from 'motion/react'

import { Player } from '@/types/player'

interface TopPlayersCarouselProps {
  players: Player[]
}

export default function TopPlayersCarousel({
  players,
}: TopPlayersCarouselProps) {
  return (
    <div className="relative overflow-hidden rounded-4xl border border-white/8 bg-[#08111f]/75 p-7 backdrop-blur-2xl">
      {/* GLOW */}

      <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-emerald-400/10 blur-[100px]" />

      {/* HEADER */}

      <div className="relative z-10 mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-white">
            Top Terrain Players
          </h2>

          <p className="mt-2 text-sm text-white/45">
            Elite traversal and momentum performers
          </p>
        </div>

        <div className="rounded-full border border-emerald-400/15 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#38FF9C]">
          Elite
        </div>
      </div>

      {/* CAROUSEL */}

      <div className="relative z-10 flex gap-6 overflow-x-auto pb-2 scrollbar-hide">
        {players.map((player, index) => (
          <motion.div
            key={player.id}
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
            whileHover={{
              y: -8,
            }}
            className="min-w-[320px]"
          >
            <Link
              href={`/player/${player.id}`}
              className="group relative block overflow-hidden rounded-[30px] border border-white/8 bg-[#0b1524]/70 p-6 transition-all duration-300 hover:border-emerald-400/15"
            >
              {/* GLOW */}

              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-400/0 blur-[80px] transition-all duration-500 group-hover:bg-emerald-400/10" />

              {/* PLAYER */}

              <div className="relative z-10">
                {/* TOP */}

                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-emerald-400/15 bg-emerald-400/10 text-2xl font-black text-[#38FF9C]">
                      {player.name
                        .split(' ')
                        .map((part) => part[0])
                        .slice(0, 2)
                        .join('')}
                    </div>

                    <h3 className="mt-5 text-2xl font-black text-white">
                      {player.name}
                    </h3>

                    <p className="mt-2 text-sm text-white/45">
                      {player.position}
                    </p>
                  </div>

                  <div className="rounded-full border border-emerald-400/15 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#38FF9C]">
                    Top Form
                  </div>
                </div>

                {/* METRICS */}

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    {
                      label: 'Traversal',
                      value: `${(9 + (index % 4) * 0.8).toFixed(1)}km`,
                    },

                    {
                      label: 'Intensity',
                      value: `${82 + (index % 10)}%`,
                    },

                    {
                      label: 'Momentum',
                      value: 'Peak',
                    },

                    {
                      label: 'Terrain',
                      value: 'Elite',
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/6 bg-white/3 p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.12em] text-white/35">
                        {item.label}
                      </p>

                      <h4 className="mt-3 text-xl font-black text-white">
                        {item.value}
                      </h4>
                    </div>
                  ))}
                </div>

                {/* FOOTER */}

                <div className="mt-6 border-t border-white/6 pt-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-white/45">
                      Spatial analytics enabled
                    </p>

                    <div className="h-2 w-2 rounded-full bg-[#38FF9C]" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
