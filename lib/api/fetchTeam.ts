import { Team } from '@/types/team'

export async function fetchTeam(teamId: number | string): Promise<Team | null> {
  try {
    return {
      id: Number(teamId),

      name: 'Manchester City',

      shortName: 'MCI',

      crest: 'https://crests.football-data.org/65.png',

      founded: 1880,

      venue: 'Etihad Stadium',

      coach: 'Pep Guardiola',

      form: ['W', 'W', 'D', 'W', 'L'],

      standings: {
        position: 1,
        playedGames: 34,
        won: 25,
        draw: 5,
        lost: 4,
        goalsFor: 79,
        goalsAgainst: 31,
        goalDifference: 48,
        points: 80,
      },
    }
  } catch (error) {
    console.error(error)

    return null
  }
}
