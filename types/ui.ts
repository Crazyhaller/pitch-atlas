export interface NavigationItem {
  label: string
  href: string
}

export interface StatsCardData {
  title: string
  value: string | number
  change?: number
  description?: string
}

export interface FilterTab {
  label: string
  value: string
}

export interface SearchResult {
  id: number | string

  type: 'player' | 'team' | 'match'

  title: string

  subtitle?: string

  image?: string
}
