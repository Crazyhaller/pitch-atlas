export interface PlayerStatistics {
  appearances: number

  goals: number

  assists: number

  passes: number

  shots: number

  tackles: number

  interceptions: number

  dribbles: number

  rating: number

  distanceCovered?: number

  sprintBursts?: number

  stamina?: number
}

export interface SprintBurst {
  minute: number

  speed: number

  distance: number
}

export interface EnduranceDataPoint {
  minute: number

  stamina: number
}

export interface PlayerMovementPoint {
  x: number

  y: number

  intensity: number

  minute: number
}

export interface PlayerTeam {
  id: number

  name: string

  crest?: string
}

export interface Player {
  id: number

  name: string

  firstname?: string

  lastname?: string

  age: number

  nationality: string

  team: string | PlayerTeam

  position: string

  photo?: string

  height?: string

  weight?: string

  injured?: boolean

  statistics: PlayerStatistics

  endurance: EnduranceDataPoint[]

  sprintBursts: SprintBurst[]

  movement: PlayerMovementPoint[]
}
