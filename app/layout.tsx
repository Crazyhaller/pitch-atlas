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
    'PitchAtlas transforms football analytics into cinematic terrain exploration with immersive heatmaps, elevation timelines, and interactive match journeys.',

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
  ],

  authors: [
    {
      name: 'PitchAtlas',
    },
  ],

  creator: 'PitchAtlas',

  openGraph: {
    type: 'website',

    title: 'PitchAtlas',

    description:
      'Explore football matches as cinematic journeys through immersive analytics and terrain-inspired visualizations.',

    url: 'https://pitchAtlas.vercel.app',

    siteName: 'PitchAtlas',

    images: [
      {
        url: '/images/ui/og-image.png',
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

    images: ['/images/ui/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: '/icons/favicon.ico',
    shortcut: '/icons/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
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
      <body className="antialiased">
        <Providers>
          <TooltipProvider>{children}</TooltipProvider>
        </Providers>
      </body>
    </html>
  )
}
