'use client'

import { motion } from 'motion/react'

import { TeamStanding } from '@/types/team'

interface LeagueTableProps {
  standings: TeamStanding[]
  leagueName?: string
}

export default function LeagueTable({
  standings,
  leagueName = 'League Standings',
}: LeagueTableProps) {
  return (
    <div className="relative overflow-hidden rounded-4xl border border-white/8 bg-[#08111f]/75 backdrop-blur-2xl">
      {/* GLOW */}

      <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-emerald-400/10 blur-[100px]" />

      {/* HEADER */}

      <div className="relative z-10 flex items-center justify-between border-b border-white/6 px-7 py-6">
        <div>
          <h2 className="text-3xl font-black text-white">{leagueName}</h2>

          <p className="mt-2 text-sm text-white/45">
            Terrain-driven competition overview
          </p>
        </div>

        <div className="rounded-full border border-emerald-400/15 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#38FF9C]">
          Live Table
        </div>
      </div>

      {/* TABLE */}

      <div className="relative z-10 overflow-x-auto">
        <table className="w-full min-w-205">
          <thead>
            <tr className="border-b border-white/6">
              {[
                '#',
                'Club',
                'Pts',
                'W',
                'D',
                'L',
                'GF',
                'GA',
                'GD',
                'Form',
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
            {standings.map((standing, index) => (
              <motion.tr
                key={standing.team.id}
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
                className="group border-b border-white/6 transition-all duration-300 hover:bg-white/3"
              >
                {/* POSITION */}

                <td className="px-6 py-5">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl font-black ${
                      standing.position <= 4
                        ? 'bg-emerald-400/10 text-[#38FF9C]'
                        : 'bg-white/3 text-white/65'
                    }`}
                  >
                    {standing.position}
                  </div>
                </td>

                {/* TEAM */}

                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/8 bg-[#0b1524]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={standing.team.crest}
                        alt={standing.team.name}
                        className="h-8 w-8 object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="font-bold text-white">
                        {standing.team.shortName}
                      </h3>

                      <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/35">
                        Terrain Club
                      </p>
                    </div>
                  </div>
                </td>

                {/* STATS */}

                <td className="px-6 py-5 text-xl font-black text-[#38FF9C]">
                  {standing.points}
                </td>

                <td className="px-6 py-5 font-semibold text-white/75">
                  {standing.won}
                </td>

                <td className="px-6 py-5 font-semibold text-white/75">
                  {standing.draw}
                </td>

                <td className="px-6 py-5 font-semibold text-white/75">
                  {standing.lost}
                </td>

                <td className="px-6 py-5 font-semibold text-white/75">
                  {standing.goalsFor}
                </td>

                <td className="px-6 py-5 font-semibold text-white/75">
                  {standing.goalsAgainst}
                </td>

                <td className="px-6 py-5 font-semibold text-white">
                  {standing.goalDifference}
                </td>

                {/* FORM */}

                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    {standing.form
                      ?.split('')
                      .slice(0, 5)
                      .map((result, idx) => (
                        <div
                          key={idx}
                          className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-black ${
                            result === 'W'
                              ? 'bg-emerald-400/10 text-[#38FF9C]'
                              : result === 'L'
                                ? 'bg-red-500/10 text-red-400'
                                : 'bg-yellow-400/10 text-yellow-300'
                          }`}
                        >
                          {result}
                        </div>
                      ))}
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
