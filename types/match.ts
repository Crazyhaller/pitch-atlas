export interface TeamReference {
  id: number

  name: string

  shortName?: string

  crest?: string
}

export interface MatchLeague {
  id?: number

  name: string

  country?: string

  logo?: string
}

export interface MatchScore {
  home: number

  away: number
}

export interface MatchStatus {
  short: string

  long: string
}

export interface MatchVenue {
  name: string

  city?: string
}

export interface MatchEvent {
  id: number

  minute: number

  type:
    | 'goal'
    | 'assist'
    | 'yellow-card'
    | 'red-card'
    | 'substitution'
    | 'shot'
    | 'save'

  player: string

  team: string

  x: number

  y: number

  description?: string
}

export interface MatchMomentumPoint {
  minute: number

  intensity: number
}

export interface Match {
  id: number

  competition: string

  league: MatchLeague

  utcDate: string

  status: MatchStatus

  venue?: MatchVenue

  homeTeam: TeamReference

  awayTeam: TeamReference

  score: MatchScore

  events?: MatchEvent[]

  momentum?: MatchMomentumPoint[]
}
