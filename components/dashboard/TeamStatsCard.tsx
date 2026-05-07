'use client'

import { motion } from 'motion/react'

import { Team } from '@/types/team'

interface TeamStatsCardProps {
  team: Team
}

export default function TeamStatsCard({ team }: TeamStatsCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className="group relative overflow-hidden rounded-[30px] border border-white/8 bg-[#08111f]/75 p-6 backdrop-blur-2xl"
    >
      {/* GLOW */}

      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-400/0 blur-[80px] transition-all duration-500 group-hover:bg-emerald-400/10" />

      <div className="relative z-10">
        {/* HEADER */}

        <div className="flex items-start justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-3xl border border-white/8 bg-[#0b1524]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={team.crest}
                alt={team.name}
                className="h-10 w-10 object-contain"
              />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">
                {team.shortName}
              </h3>

              <p className="mt-1 text-sm text-white/45">{team.area.name}</p>
            </div>
          </div>

          <div className="rounded-full border border-emerald-400/15 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#38FF9C]">
            Active
          </div>
        </div>

        {/* STATS */}

        <div className="mt-8 grid grid-cols-2 gap-4">
          {[
            {
              label: 'Founded',
              value: team.founded,
            },

            {
              label: 'Venue',
              value: team.venue,
            },

            {
              label: 'Club Colors',
              value: team.clubColors,
            },

            {
              label: 'Squad Size',
              value: team.squad?.length ?? 0,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/6 bg-white/3 p-5"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-white/35">
                {item.label}
              </p>

              <h4 className="mt-3 text-lg font-black leading-7 text-white">
                {item.value}
              </h4>
            </div>
          ))}
        </div>

        {/* FOOTER */}

        <div className="mt-6 border-t border-white/6 pt-5">
          <p className="text-sm leading-7 text-white/55">
            Tactical terrain visualization enabled for {team.name}.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
