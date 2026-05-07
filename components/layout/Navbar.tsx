'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { motion } from 'motion/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faChartLine,
  faCompass,
  faHeart,
  faMountain,
  faTrophy,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

import { useEffect, useState } from 'react'

import { APP_ROUTES, LANDING_LINKS } from '@/constants/routes'

const appNavigation = [
  {
    label: 'Dashboard',
    href: APP_ROUTES.DASHBOARD,
    icon: faChartLine,
  },
  {
    label: 'Explorer',
    href: APP_ROUTES.EXPLORER,
    icon: faCompass,
  },
  {
    label: 'Matches',
    href: APP_ROUTES.MATCHES,
    icon: faTrophy,
  },
  {
    label: 'Favorites',
    href: APP_ROUTES.FAVORITES,
    icon: faHeart,
  },
]

export default function Navbar() {
  const pathname = usePathname()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const isLandingPage = pathname === '/'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/6 bg-[#050816]/80 backdrop-blur-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wrapper">
        <div className="flex h-20 items-center justify-between">
          {/* LOGO */}

          <Link href="/" className="group flex items-center gap-3">
            <motion.div
              whileHover={{
                rotate: 8,
                scale: 1.08,
              }}
              transition={{
                duration: 0.25,
              }}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 shadow-[0_0_30px_rgba(56,255,156,0.18)]"
            >
              <FontAwesomeIcon
                icon={faMountain}
                className="h-5 w-5 text-[#38FF9C]"
              />
            </motion.div>

            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-white">
                Pitch
                <span className="text-[#38FF9C]">Atlas</span>
              </span>

              <span className="text-[10px] uppercase tracking-[0.28em] text-white/40">
                Terrain Analytics
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-2 lg:flex">
            {isLandingPage
              ? LANDING_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative rounded-full px-5 py-2.5 text-sm font-medium text-white/72 transition-all duration-300 hover:text-white"
                  >
                    <span className="relative z-10">{item.label}</span>

                    <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </Link>
                ))
              : appNavigation.map((item) => {
                  const active = pathname === item.href

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`group relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                        active
                          ? 'bg-emerald-400/12 text-[#38FF9C]'
                          : 'text-white/72 hover:text-white'
                      }`}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="h-3.5 w-3.5"
                      />

                      <span>{item.label}</span>

                      {active && (
                        <motion.div
                          layoutId="navbar-pill"
                          className="absolute inset-0 rounded-full border border-emerald-400/20 bg-emerald-400/10"
                          transition={{
                            type: 'spring',
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}
                    </Link>
                  )
                })}
          </nav>

          {/* CTA */}

          <div className="hidden items-center gap-3 lg:flex">
            <Link href={APP_ROUTES.DASHBOARD} className="btn-primary">
              Launch Platform
            </Link>
          </div>

          {/* MOBILE TOGGLE */}

          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-emerald-400/20 hover:bg-emerald-400/10 lg:hidden"
          >
            <FontAwesomeIcon
              icon={mobileMenuOpen ? faXmark : faBars}
              className="h-4 w-4"
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}

      <motion.div
        initial={false}
        animate={{
          height: mobileMenuOpen ? 'auto' : 0,

          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className="overflow-hidden border-t border-white/6 bg-[#07101d]/95 backdrop-blur-2xl lg:hidden"
      >
        <div className="container-wrapper py-6">
          <div className="flex flex-col gap-2">
            {(isLandingPage ? LANDING_LINKS : appNavigation).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.03] px-5 py-4 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-emerald-400/20 hover:bg-emerald-400/10 hover:text-white"
              >
                {'icon' in item && (
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="h-4 w-4 text-[#38FF9C]"
                  />
                )}

                <span>{item.label}</span>
              </Link>
            ))}

            <Link
              href={APP_ROUTES.DASHBOARD}
              className="btn-primary mt-4 justify-center"
            >
              Launch Platform
            </Link>
          </div>
        </div>
      </motion.div>
    </header>
  )
}
