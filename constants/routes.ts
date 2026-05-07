export const PUBLIC_ROUTES = {
  HOME: '/',
  EXPLORE_PREVIEW: '/explore-preview',
} as const

export const APP_ROUTES = {
  DASHBOARD: '/dashboard',
  MATCHES: '/matches',
  EXPLORER: '/explorer',
  FAVOURITES: '/favourites',
} as const

export const DYNAMIC_ROUTES = {
  MATCH: (id: number | string) => `/match/${id}`,
  PLAYER: (id: number | string) => `/player/${id}`,
  TEAM: (id: number | string) => `/team/${id}`,
} as const

export const NAVIGATION_LINKS = [
  {
    label: 'Dashboard',
    href: APP_ROUTES.DASHBOARD,
  },
  {
    label: 'Matches',
    href: APP_ROUTES.MATCHES,
  },
  {
    label: 'Explorer',
    href: APP_ROUTES.EXPLORER,
  },
  {
    label: 'Favourites',
    href: APP_ROUTES.FAVOURITES,
  },
] as const

export const LANDING_LINKS = [
  {
    label: 'Features',
    href: '#features',
  },
  {
    label: 'Visualizations',
    href: '#visualizations',
  },
  {
    label: 'Explorer',
    href: '#explorer',
  },
  {
    label: 'Dashboard',
    href: APP_ROUTES.DASHBOARD,
  },
] as const
