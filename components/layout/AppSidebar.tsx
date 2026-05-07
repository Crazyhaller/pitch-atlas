'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

import { motion } from 'motion/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faChartLine,
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
    label: 'Analytics',
    href: '/analytics',
    icon: faChartLine,
  },

  {
    label: 'Favourites',
    href: APP_ROUTES.FAVOURITES,
    icon: faHeart,
  },
]

export default function AppSidebar() {
  const pathname = usePathname()

  return (
    <aside className="sticky top-24 hidden h-[calc(100vh-6rem)] w-72.5 shrink-0 border-r border-white/6 bg-[#07101d]/70 backdrop-blur-2xl xl:block">
      <div className="flex h-full flex-col justify-between p-6">
        {/* TOP */}

        <div>
          {/* HEADER */}

          <div className="mb-8 rounded-[28px] border border-white/8 bg-white/3 p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl border border-emerald-400/15 bg-emerald-400/10">
                <span className="text-lg font-black text-[#38FF9C]">AX</span>
              </div>

              <div>
                <h3 className="text-lg font-black text-white">Terrain Hub</h3>

                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/40">
                  Analytics System
                </p>
              </div>
            </div>
          </div>

          {/* NAVIGATION */}

          <nav className="space-y-2">
            {sidebarLinks.map((link) => {
              const active = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative flex items-center gap-4 overflow-hidden rounded-2xl px-5 py-4 transition-all duration-300 ${
                    active
                      ? 'bg-emerald-400/10 text-[#38FF9C]'
                      : 'text-white/65 hover:bg-white/3 hover:text-white'
                  }`}
                >
                  {/* ACTIVE BG */}

                  {active && (
                    <motion.div
                      layoutId="sidebar-pill"
                      className="absolute inset-0 border border-emerald-400/15 bg-emerald-400/10"
                      transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}

                  {/* ICON */}

                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-white/6 bg-white/3">
                    <FontAwesomeIcon icon={link.icon} className="h-4 w-4" />
                  </div>

                  {/* TEXT */}

                  <div className="relative z-10">
                    <h4 className="font-semibold">{link.label}</h4>

                    <p className="mt-1 text-xs text-white/35">Explore module</p>
                  </div>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* BOTTOM */}

        <div className="overflow-hidden rounded-[28px] border border-white/8 bg-linear-to-br from-emerald-400/10 to-transparent p-5">
          <div className="rounded-2xl border border-emerald-400/10 bg-black/20 p-5 backdrop-blur-xl">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/15 bg-emerald-400/10">
              <FontAwesomeIcon
                icon={faCompass}
                className="h-6 w-6 text-[#38FF9C]"
              />
            </div>

            <h4 className="text-xl font-black text-white">Match Explorer</h4>

            <p className="mt-3 text-sm leading-7 text-white/55">
              Replay tactical movements and terrain transitions through
              immersive spatial exploration.
            </p>

            <button
              type="button"
              className="btn-primary mt-6 w-full justify-center"
            >
              Launch Explorer
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
