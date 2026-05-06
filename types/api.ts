export interface FootballDataTeam {
  id: number
  name: string
  shortName: string
  crest: string
}

export interface FootballDataMatch {
  id: number

  utcDate: string

  status: string

  homeTeam: FootballDataTeam

  awayTeam: FootballDataTeam

  score: {
    fullTime: {
      home: number | null
      away: number | null
    }
  }
}

export interface FootballDataMatchesResponse {
  matches: FootballDataMatch[]
}

export interface FootballDataStanding {
  position: number

  team: FootballDataTeam

  playedGames: number

  won: number

  draw: number

  lost: number

  goalsFor: number

  goalsAgainst: number

  goalDifference: number

  points: number
}

export interface FootballDataStandingsResponse {
  standings: Array<{
    table: FootballDataStanding[]
  }>
}
