'use client'

import { motion } from 'motion/react'

import { FilterTab } from '@/types/ui'

interface FilterTabsProps {
  tabs: FilterTab[]
  activeTab: string
  onChange: (value: string) => void
}

export default function FilterTabs({
  tabs,
  activeTab,
  onChange,
}: FilterTabsProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {tabs.map((tab) => {
        const active = activeTab === tab.value

        return (
          <button
            key={tab.value}
            type="button"
            onClick={() => onChange(tab.value)}
            className={`relative overflow-hidden rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
              active
                ? 'text-[#38FF9C]'
                : 'border border-white/8 bg-white/3 text-white/60 hover:text-white'
            }`}
          >
            {/* ACTIVE BG */}

            {active && (
              <motion.div
                layoutId="filter-pill"
                className="absolute inset-0 border border-emerald-400/15 bg-emerald-400/10"
                transition={{
                  type: 'spring',
                  duration: 0.5,
                  bounce: 0.2,
                }}
              />
            )}

            <span className="relative z-10">{tab.label}</span>
          </button>
        )
      })}
    </div>
  )
}
