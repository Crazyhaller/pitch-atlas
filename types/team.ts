export interface TeamStanding {
  position: number

  playedGames: number

  won: number

  draw: number

  lost: number

  goalsFor: number

  goalsAgainst: number

  goalDifference: number

  points: number
}

export interface Team {
  id: number

  name: string

  shortName?: string

  crest?: string

  founded?: number

  venue?: string

  coach?: string

  form?: string[]

  standings?: TeamStanding
}
