import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

const footerLinks = [
  {
    label: 'Dashboard',
    href: '/dashboard',
  },
  {
    label: 'Explorer',
    href: '/explorer',
  },
  {
    label: 'Matches',
    href: '/matches',
  },
  {
    label: 'Favourites',
    href: '/favourites',
  },
]

const socialLinks = [
  {
    icon: faGithub,
    href: 'https://github.com',
  },
  {
    icon: faLinkedin,
    href: 'https://linkedin.com',
  },
  {
    icon: faTwitter,
    href: 'https://twitter.com',
  },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/6 bg-[#040711]">
      {/* BACKGROUND GLOW */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-75 w-75 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[120px]" />
      </div>

      <div className="container-wrapper relative z-10">
        <div className="grid gap-14 py-20 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          {/* BRAND */}

          <div className="max-w-lg">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10">
                <span className="text-lg font-black text-[#38FF9C]">PA</span>
              </div>

              <div>
                <h3 className="text-xl font-black text-white">
                  Pitch
                  <span className="text-[#38FF9C]">Atlas</span>
                </h3>

                <p className="mt-1 text-xs uppercase tracking-[0.24em] text-white/40">
                  Terrain Driven Football Analytics
                </p>
              </div>
            </div>

            <p className="text-sm leading-8 text-white/60">
              A cinematic football analytics experience that transforms player
              movement, match momentum, and tactical data into immersive
              terrain-inspired visual journeys.
            </p>
          </div>

          {/* NAVIGATION */}

          <div>
            <h4 className="mb-10 text-sm font-bold uppercase tracking-[0.18em] text-white">
              Navigation
            </h4>

            <div className="flex flex-col gap-3 mt-5">
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/60 transition-colors duration-300 hover:text-[#38FF9C]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* SOCIALS */}

          <div>
            <h4 className="mb-10 text-sm font-bold uppercase tracking-[0.18em] text-white">
              Connect
            </h4>

            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 bg-white/3 text-white/70 transition-all duration-300 hover:border-emerald-400/20 hover:bg-emerald-400/10 hover:text-[#38FF9C]"
                >
                  <FontAwesomeIcon icon={social.icon} className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/6 py-6 text-center text-sm text-white/40 lg:flex-row">
          <p>(c) 2026 PitchAtlas. All rights reserved.</p>

          <p>Designed for immersive football intelligence.</p>
        </div>
      </div>
    </footer>
  )
}
