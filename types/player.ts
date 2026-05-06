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

export interface Player {
  id: number

  name: string

  age: number

  nationality: string

  team: string

  position: string

  photo?: string

  height?: string

  weight?: string

  statistics: PlayerStatistics

  endurance: EnduranceDataPoint[]

  sprintBursts: SprintBurst[]

  movement: PlayerMovementPoint[]
}
