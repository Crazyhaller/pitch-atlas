'use client'

import Link from 'next/link'

import { motion } from 'motion/react'

import { Player } from '@/types/player'

interface PlayerStatsTableProps {
  players: Player[]
}

export default function PlayerStatsTable({ players }: PlayerStatsTableProps) {
  return (
    <div className="premium-panel relative min-w-0 overflow-hidden rounded-[26px]">
      {/* HEADER */}

      <div className="flex flex-col gap-4 border-b border-white/6 px-5 py-5 sm:px-7 sm:py-6 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <h2 className="text-2xl font-black text-white sm:text-3xl">
            Player Terrain Stats
          </h2>

          <p className="mt-2 text-sm text-white/45">
            Traversal and tactical performance overview
          </p>
        </div>

        <div className="rounded-full border border-emerald-400/15 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#38FF9C]">
          Analytics
        </div>
      </div>

      {/* TABLE */}

      <div className="x-scroll">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="border-b border-white/6">
              {[
                'Player',
                'Position',
                'Age',
                'Nationality',
                'Terrain',
                'Traversal',
              ].map((item) => (
                <th
                  key={item}
                  className="px-6 py-5 text-left text-xs font-bold uppercase tracking-[0.16em] text-white/35"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {players.map((player, index) => (
              <motion.tr
                key={player.id}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.03,
                }}
                className="border-b border-white/6 transition-all duration-300 hover:bg-white/3"
              >
                {/* PLAYER */}

                <td className="px-6 py-5">
                  <Link
                    href={`/player/${player.id}`}
                    className="group/player block rounded-xl"
                  >
                    <h3 className="font-bold text-white transition-colors group-hover/player:text-[#38FF9C]">
                      {player.name}
                    </h3>

                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/35">
                      Open explorer profile
                    </p>
                  </Link>
                </td>

                {/* POSITION */}

                <td className="px-6 py-5">
                  <div className="rounded-full border border-white/8 bg-white/3 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/65">
                    {player.position}
                  </div>
                </td>

                {/* AGE */}

                <td className="px-6 py-5 font-semibold text-white/75">
                  {player.age}
                </td>

                {/* NATIONALITY */}

                <td className="px-6 py-5 font-semibold text-white/75">
                  {player.nationality}
                </td>

                {/* TERRAIN */}

                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-28 overflow-hidden rounded-full bg-white/8">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        animate={{
                          width: `${70 + (index % 20)}%`,
                        }}
                        transition={{
                          duration: 1,
                        }}
                        className="h-full rounded-full bg-[#38FF9C]"
                      />
                    </div>

                    <span className="text-sm font-bold text-[#38FF9C]">
                      {70 + (index % 20)}%
                    </span>
                  </div>
                </td>

                {/* TRAVERSAL */}

                <td className="px-6 py-5 text-sm font-semibold text-white">
                  {(8 + (index % 4) * 0.7).toFixed(1)}
                  km
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
