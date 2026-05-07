export interface TeamArea {
  name: string
}

export interface TeamCoach {
  id?: number

  name: string

  nationality?: string
}

export interface TeamPlayer {
  id: number

  name: string

  position?: string

  nationality?: string

  age?: number
}

export interface TeamReference {
  id: number

  name: string

  shortName?: string

  crest?: string
}

export interface TeamStanding {
  position: number

  team: TeamReference

  playedGames: number

  won: number

  draw: number

  lost: number

  goalsFor: number

  goalsAgainst: number

  goalDifference: number

  points: number

  form?: string
}

export type Standing = TeamStanding

export interface Team {
  id: number

  name: string

  shortName?: string

  crest?: string

  founded?: number

  venue?: string

  clubColors?: string

  area?: TeamArea

  coach?: TeamCoach

  squad?: TeamPlayer[]

  form?: string[]

  standings?: TeamStanding
}
