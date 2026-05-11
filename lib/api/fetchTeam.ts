import { Team } from '@/types/team'

import { sampleStandings, sampleTeams } from '@/lib/data/sampleFootball'

export async function fetchTeam(teamId: number | string): Promise<Team | null> {
  try {
    const id = Number(teamId)
    const sampleTeam = sampleTeams.find((team) => team.id === id) ?? sampleTeams[0]
    const standing = sampleStandings.find((item) => item.team.id === sampleTeam.id)

    return {
      ...sampleTeam,

      standings: standing,

      squad: [
        {
          id: 1,
          name: 'Marcus Rashford',
          position: 'Winger',
          nationality: 'England',
          age: 28,
        },
        {
          id: 2,
          name: 'Kevin De Bruyne',
          position: 'Midfielder',
          nationality: 'Belgium',
          age: 34,
        },
        {
          id: 3,
          name: 'Bukayo Saka',
          position: 'Forward',
          nationality: 'England',
          age: 24,
        },
      ],
    }
  } catch {
    return null
  }
}
