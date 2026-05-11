'use client'

import { useEffect, useRef, useState } from 'react'

import { motion } from 'motion/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'

import { useSearch } from '@/hooks/useSearch'

import SearchResultsDropdown from './SearchResultsDropdown'

interface SearchBarProps {
  placeholder?: string
  value?: string
  onQueryChange?: (query: string) => void
}

export default function SearchBar({
  placeholder = 'Search players, teams, matches...',
  value,
  onQueryChange,
}: SearchBarProps) {
  const [internalQuery, setInternalQuery] = useState('')

  const [open, setOpen] = useState(false)

  const wrapperRef = useRef<HTMLDivElement>(null)
  const query = value ?? internalQuery

  const { results, loading } = useSearch(query)

  function updateQuery(nextQuery: string) {
    if (value === undefined) {
      setInternalQuery(nextQuery)
    }

    onQueryChange?.(nextQuery)
  }

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    window.addEventListener('mousedown', handleOutsideClick)

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <div ref={wrapperRef} className="relative w-full z-50">
      <motion.div
        animate={{
          borderColor: open
            ? 'rgba(56,255,156,0.18)'
            : 'rgba(255,255,255,0.08)',
        }}
        className="relative flex h-14 items-center overflow-hidden rounded-[22px] border bg-[#08111f]/75 backdrop-blur-2xl sm:h-16 sm:rounded-3xl"
      >
        {/* ICON */}

        <div className="flex h-full items-center pl-4 sm:pl-6">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="h-5 w-5 text-[#38FF9C]"
          />
        </div>

        {/* INPUT */}

        <input
          type="text"
          value={query}
          onChange={(event) => {
            updateQuery(event.target.value)
            setOpen(Boolean(event.target.value.trim()))
          }}
          onFocus={() => setOpen(Boolean(query.trim()))}
          placeholder={placeholder}
          className="h-full min-w-0 flex-1 bg-transparent px-4 text-sm font-medium text-white outline-none placeholder:text-white/30 sm:px-5 sm:text-[15px]"
        />

        {/* CLEAR */}

        {query && (
          <button
            type="button"
            onClick={() => {
              updateQuery('')
              setOpen(false)
            }}
            className="mr-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/6 bg-white/3 text-white/45 transition-all duration-300 hover:border-emerald-400/15 hover:bg-emerald-400/10 hover:text-white sm:mr-3 sm:h-10 sm:w-10"
          >
            <FontAwesomeIcon icon={faXmark} className="h-4 w-4" />
          </button>
        )}
      </motion.div>

      {/* DROPDOWN */}

      <SearchResultsDropdown
        open={open}
        loading={loading}
        results={results}
        onClose={() => setOpen(false)}
      />
    </div>
  )
}
