'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

import { motion } from 'motion/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faCompass,
  faHeart,
  faHouse,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons'

import { APP_ROUTES } from '@/constants/routes'

const sidebarLinks = [
  {
    label: 'Dashboard',
    href: APP_ROUTES.DASHBOARD,
    icon: faHouse,
  },

  {
    label: 'Matches',
    href: APP_ROUTES.MATCHES,
    icon: faTrophy,
  },

  {
    label: 'Explorer',
    href: APP_ROUTES.EXPLORER,
    icon: faCompass,
  },

  {
    label: 'Favourites',
    href: APP_ROUTES.FAVOURITES,
    icon: faHeart,
  },
]

export default function AppSidebar() {
  const pathname = usePathname()
  const isRouteActive = (href: string) => {
    if (href === APP_ROUTES.DASHBOARD) {
      return (
        pathname === href ||
        pathname.startsWith('/player') ||
        pathname.startsWith('/team')
      )
    }
    if (href === APP_ROUTES.MATCHES) {
      return pathname === href || pathname.startsWith('/match')
    }
    return pathname === href
  }

  return (
    <aside className="sticky top-24 hidden h-[calc(100vh-6rem)] w-72.5 shrink-0 flex-col border-r border-white/6 bg-[#07101d]/70 backdrop-blur-2xl xl:flex">
      {/* ── HEADER (fixed, never scrolls) ── */}
      <div className="shrink-0 p-5 pb-0">
        <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 shadow-[0_0_20px_rgba(56,255,156,0.12)]">
              <span className="text-base font-black text-[#38FF9C]">PA</span>
            </div>
            <div>
              <h3 className="text-base font-black text-white">Terrain Hub</h3>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-white/40">
                Analytics System
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── NAV (scrollable middle zone) ── */}
      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4 scrollbar-hide">
        <p className="mb-3 px-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">
          Navigation
        </p>
        <nav className="space-y-1">
          {sidebarLinks.map((link) => {
            const active = isRouteActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative flex items-center gap-3 overflow-hidden rounded-2xl px-4 py-3.5 transition-all duration-300 ${
                  active
                    ? 'text-[#38FF9C]'
                    : 'text-white/55 hover:bg-white/[0.04] hover:text-white'
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="sidebar-pill"
                    className="absolute inset-0 rounded-2xl border border-emerald-400/15 bg-emerald-400/8"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}

                {/* Icon */}
                <div
                  className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                    active
                      ? 'border-emerald-400/20 bg-emerald-400/12 shadow-[0_0_16px_rgba(56,255,156,0.15)]'
                      : 'border-white/6 bg-white/[0.03] group-hover:border-white/10 group-hover:bg-white/[0.06]'
                  }`}
                >
                  <FontAwesomeIcon icon={link.icon} className="h-3.5 w-3.5" />
                </div>

                {/* Text */}
                <div className="relative z-10 min-w-0">
                  <h4 className="text-sm font-bold">{link.label}</h4>
                  <p className="mt-0.5 text-[10px] text-white/30">
                    Explore module
                  </p>
                </div>

                {/* Active dot */}
                {active && (
                  <div className="relative z-10 ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-[#38FF9C] shadow-[0_0_6px_rgba(56,255,156,0.8)]" />
                )}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* ── FOOTER (fixed, never scrolls) ── */}
      <div className="shrink-0 px-5 pb-5">
        <div className="overflow-hidden rounded-[20px] border border-emerald-400/12 bg-gradient-to-br from-emerald-400/8 via-emerald-400/4 to-transparent p-[1px]">
          <div className="rounded-[19px] bg-[#07101d]/90 px-4 py-3 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/10">
                <FontAwesomeIcon
                  icon={faCompass}
                  className="h-3.5 w-3.5 text-[#38FF9C]"
                />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-black text-white">
                  Match Explorer
                </h4>
                <p className="text-[10px] text-white/40">
                  Spatial terrain replay
                </p>
              </div>
            </div>
            <Link
              href={APP_ROUTES.EXPLORER}
              className="btn-primary mt-3 w-full justify-center text-xs"
            >
              Launch Explorer
            </Link>
          </div>
        </div>
      </div>
    </aside>
  )
}
