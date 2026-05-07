'use client'

import Link from 'next/link'

import { motion } from 'motion/react'

import { Match } from '@/types/match'

interface MatchCardProps {
  match: Match
}

export default function MatchCard({ match }: MatchCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <Link
        href={`/match/${match.id}`}
        className="group relative block overflow-hidden rounded-[30px] border border-white/8 bg-[#08111f]/75 p-6 transition-all duration-300 hover:border-emerald-400/15"
      >
        {/* GLOW */}

        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-400/0 blur-[80px] transition-all duration-500 group-hover:bg-emerald-400/10" />

        <div className="relative z-10">
          {/* HEADER */}

          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                {match.league.name}
              </p>

              <p className="mt-2 text-sm text-white/55">{match.status.long}</p>
            </div>

            <div className="rounded-full border border-emerald-400/15 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#38FF9C]">
              {match.status.short}
            </div>
          </div>

          {/* TEAMS */}

          <div className="space-y-5">
            {/* HOME */}

            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/8 bg-[#0b1524]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={match.homeTeam.crest}
                    alt={match.homeTeam.name}
                    className="h-9 w-9 object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-black text-white">
                    {match.homeTeam.shortName}
                  </h3>

                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/40">
                    Home
                  </p>
                </div>
              </div>

              <div className="text-4xl font-black text-white">
                {match.score.home}
              </div>
            </div>

            {/* AWAY */}

            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/8 bg-[#0b1524]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={match.awayTeam.crest}
                    alt={match.awayTeam.name}
                    className="h-9 w-9 object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-black text-white">
                    {match.awayTeam.shortName}
                  </h3>

                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/40">
                    Away
                  </p>
                </div>
              </div>

              <div className="text-4xl font-black text-white">
                {match.score.away}
              </div>
            </div>
          </div>

          {/* FOOTER */}

          <div className="mt-8 flex items-center justify-between border-t border-white/6 pt-5">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-white/35">
                Terrain Intensity
              </p>

              <h4 className="mt-2 text-xl font-black text-[#38FF9C]">91%</h4>
            </div>

            <div>
              <p className="text-right text-xs uppercase tracking-[0.12em] text-white/35">
                Momentum
              </p>

              <h4 className="mt-2 text-right text-xl font-black text-[#38FF9C]">
                Peak
              </h4>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
