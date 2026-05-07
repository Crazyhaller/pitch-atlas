'use client'

import { useEffect, useRef, useState } from 'react'

import { motion } from 'motion/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'

import { useSearch } from '@/hooks/useSearch'

import SearchResultsDropdown from './SearchResultsDropdown'

interface SearchBarProps {
  placeholder?: string
}

export default function SearchBar({
  placeholder = 'Search players, teams, matches...',
}: SearchBarProps) {
  const [query, setQuery] = useState('')

  const [open, setOpen] = useState(false)

  const wrapperRef = useRef<HTMLDivElement>(null)

  const { results, loading } = useSearch(query)

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

  useEffect(() => {
    if (query.trim()) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [query])

  return (
    <div ref={wrapperRef} className="relative w-full">
      <motion.div
        animate={{
          borderColor: open
            ? 'rgba(56,255,156,0.18)'
            : 'rgba(255,255,255,0.08)',
        }}
        className="relative flex h-16 items-center overflow-hidden rounded-3xl border bg-[#08111f]/75 backdrop-blur-2xl"
      >
        {/* ICON */}

        <div className="flex h-full items-center pl-6">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="h-5 w-5 text-[#38FF9C]"
          />
        </div>

        {/* INPUT */}

        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          className="h-full flex-1 bg-transparent px-5 text-[15px] font-medium text-white outline-none placeholder:text-white/30"
        />

        {/* CLEAR */}

        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/6 bg-white/3 text-white/45 transition-all duration-300 hover:border-emerald-400/15 hover:bg-emerald-400/10 hover:text-white"
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
