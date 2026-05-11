import type { Metadata, Viewport } from 'next'

import { Inter, JetBrains_Mono } from 'next/font/google'

import './globals.css'

import Providers from './providers'

import { TooltipProvider } from '@/components/ui/tooltip'

const inter = Inter({
  subsets: ['latin'],

  variable: '--font-inter',

  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],

  variable: '--font-jetbrains',

  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://pitchAtlas.vercel.app'),

  title: {
    default: 'PitchAtlas',

    template: '%s | PitchAtlas',
  },

  description:
    'PitchAtlas transforms football analytics into cinematic terrain exploration with immersive heatmaps, elevation timelines, traversal intelligence, and interactive match journeys.',

  applicationName: 'PitchAtlas',

  category: 'Sports Analytics',

  keywords: [
    'football analytics',

    'soccer analytics',

    'sports dashboard',

    'football heatmap',

    'match explorer',

    'football SaaS',

    'sports visualization',

    'football statistics',

    'nextjs football app',

    'interactive football analytics',

    'terrain analytics',

    'football terrain',

    'match traversal',

    'football intelligence',
  ],

  authors: [
    {
      name: 'PitchAtlas',
    },
  ],

  creator: 'PitchAtlas',

  publisher: 'PitchAtlas',

  alternates: {
    canonical: 'https://pitchAtlas.vercel.app',
  },

  openGraph: {
    type: 'website',

    title: 'PitchAtlas',

    description:
      'Explore football matches as cinematic journeys through immersive terrain intelligence and interactive spatial analytics.',

    url: 'https://pitchAtlas.vercel.app',

    siteName: 'PitchAtlas',

    images: [
      {
        url: 'https://pitchAtlas.vercel.app/og-image.png',

        width: 1200,

        height: 630,

        alt: 'PitchAtlas Open Graph Preview',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'PitchAtlas',

    description:
      'Immersive football analytics reimagined as terrain exploration.',

    images: ['https://pitchAtlas.vercel.app/og-image.png'],
  },

  robots: {
    index: true,

    follow: true,
  },

  icons: {
    icon: 'https://pitchAtlas.vercel.app/favicon.ico',

    shortcut: 'https://pitchAtlas.vercel.app/favicon.ico',

    apple: 'https://pitchAtlas.vercel.app/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#050816',

  colorScheme: 'dark',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#02060d] font-sans antialiased text-white selection:bg-emerald-400/30 selection:text-white"
      >
        <Providers>
          <TooltipProvider>{children}</TooltipProvider>
        </Providers>
      </body>
    </html>
  )
}
