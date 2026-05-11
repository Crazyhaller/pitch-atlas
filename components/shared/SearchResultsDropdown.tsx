'use client'

import Link from 'next/link'

import { motion, AnimatePresence } from 'motion/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faCompass,
  faFutbol,
  faShieldHalved,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

import { SearchResult } from '@/types/ui'

interface SearchResultsDropdownProps {
  open: boolean
  loading?: boolean
  results: SearchResult[]
  onClose?: () => void
}

function getResultIcon(type: SearchResult['type']) {
  switch (type) {
    case 'player':
      return faUser

    case 'team':
      return faShieldHalved

    case 'match':
      return faFutbol

    default:
      return faCompass
  }
}

function getResultHref(result: SearchResult) {
  switch (result.type) {
    case 'player':
      return `/player/${result.id}`

    case 'team':
      return `/team/${result.id}`

    case 'match':
      return `/match/${result.id}`

    default:
      return '/'
  }
}

export default function SearchResultsDropdown({
  open,
  loading = false,
  results,
  onClose,
}: SearchResultsDropdownProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: 12,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 8,
            scale: 0.98,
          }}
          transition={{
            duration: 0.2,
          }}
          className="absolute top-full left-0 right-0 mt-2 z-[9999] w-full overflow-hidden rounded-[22px] border border-white/8 bg-[#08111f]/95 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:rounded-[28px]"
        >
          {/* HEADER */}

          <div className="flex items-center justify-between gap-4 border-b border-white/6 px-4 py-4 sm:px-6 sm:py-5">
            <div className="min-w-0">
              <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                Search Results
              </h4>

              <p className="mt-1 text-xs text-white/40">
                Terrain discovery system
              </p>
            </div>

            <div className="shrink-0 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#38FF9C]">
              {results.length} Found
            </div>
          </div>

          {/* LOADING */}

          {loading && (
            <div className="flex items-center justify-center py-16">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="h-10 w-10 rounded-full border-2 border-emerald-400/20 border-t-[#38FF9C]"
              />
            </div>
          )}

          {/* EMPTY */}

          {!loading && results.length === 0 && (
            <div className="px-8 py-16 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-white/6 bg-white/3">
                <FontAwesomeIcon
                  icon={faCompass}
                  className="h-8 w-8 text-[#38FF9C]"
                />
              </div>

              <h3 className="mt-6 text-2xl font-black text-white">
                No Results Found
              </h3>

              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/50">
                Try searching for players, teams, or matches using different
                keywords.
              </p>
            </div>
          )}

          {/* RESULTS */}

          {!loading && results.length > 0 && (
            <div className="max-h-105 overflow-y-auto p-2 sm:p-3">
              {results.map((result) => (
                <Link
                  key={`${result.type}-${result.id}`}
                  href={getResultHref(result)}
                  onClick={onClose}
                  className="group flex items-center gap-3 rounded-2xl border border-transparent px-3 py-4 transition-all duration-300 hover:border-emerald-400/12 hover:bg-emerald-400/6 sm:gap-5 sm:px-5 sm:py-5"
                >
                  {/* ICON */}

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/6 bg-white/3 transition-all duration-300 group-hover:border-emerald-400/15 group-hover:bg-emerald-400/10 sm:h-14 sm:w-14">
                    <FontAwesomeIcon
                      icon={getResultIcon(result.type)}
                      className="h-5 w-5 text-[#38FF9C]"
                    />
                  </div>

                  {/* CONTENT */}

                  <div className="min-w-0 flex-1">
                    <h4 className="truncate font-bold text-white transition-colors duration-300 group-hover:text-[#38FF9C]">
                      {result.title}
                    </h4>

                    {result.subtitle && (
                      <p className="mt-1 text-sm text-white/45">
                        {result.subtitle}
                      </p>
                    )}
                  </div>

                  {/* TYPE */}

                  <div className="hidden rounded-full border border-white/8 bg-white/3 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/45 sm:block">
                    {result.type}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
