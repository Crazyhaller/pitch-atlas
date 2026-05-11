import { Match } from '@/types/match'
import { Player } from '@/types/player'
import { Team, TeamStanding } from '@/types/team'

export const sampleTeams: Team[] = [
  {
    id: 65,
    name: 'Manchester City',
    shortName: 'MCI',
    crest: 'https://crests.football-data.org/65.png',
    founded: 1880,
    venue: 'Etihad Stadium',
    clubColors: 'Sky Blue / White',
    area: {
      name: 'England',
    },
    coach: {
      name: 'Pep Guardiola',
      nationality: 'Spain',
    },
    form: ['W', 'W', 'D', 'W', 'L'],
  },
  {
    id: 57,
    name: 'Arsenal',
    shortName: 'ARS',
    crest: 'https://crests.football-data.org/57.png',
    founded: 1886,
    venue: 'Emirates Stadium',
    clubColors: 'Red / White',
    area: {
      name: 'England',
    },
    coach: {
      name: 'Mikel Arteta',
      nationality: 'Spain',
    },
    form: ['W', 'D', 'W', 'W', 'W'],
  },
  {
    id: 66,
    name: 'Manchester United',
    shortName: 'MUN',
    crest: 'https://crests.football-data.org/66.png',
    founded: 1878,
    venue: 'Old Trafford',
    clubColors: 'Red / White',
    area: {
      name: 'England',
    },
    coach: {
      name: 'Ruben Amorim',
      nationality: 'Portugal',
    },
    form: ['D', 'W', 'L', 'W', 'D'],
  },
  {
    id: 61,
    name: 'Chelsea',
    shortName: 'CHE',
    crest: 'https://crests.football-data.org/61.png',
    founded: 1905,
    venue: 'Stamford Bridge',
    clubColors: 'Blue / White',
    area: {
      name: 'England',
    },
    coach: {
      name: 'Enzo Maresca',
      nationality: 'Italy',
    },
    form: ['W', 'L', 'W', 'D', 'W'],
  },
]

export const sampleStandings: TeamStanding[] = sampleTeams.map(
  (team, index) => ({
    position: index + 1,
    team: {
      id: team.id,
      name: team.name,
      shortName: team.shortName,
      crest: team.crest,
    },
    playedGames: 34,
    won: 25 - index * 2,
    draw: 5 + index,
    lost: 4 + index,
    goalsFor: 79 - index * 7,
    goalsAgainst: 31 + index * 4,
    goalDifference: 48 - index * 10,
    points: 80 - index * 6,
    form: team.form?.join(''),
  }),
)

export const sampleMatches: Match[] = [
  {
    id: 1001,
    competition: 'Premier League',
    league: {
      id: 2021,
      name: 'Premier League',
      country: 'England',
    },
    utcDate: new Date('2026-05-08T18:30:00.000Z').toISOString(),
    status: {
      short: 'LIVE',
      long: 'Live',
    },
    venue: {
      name: 'Signal Dome Arena',
      city: 'London',
    },
    homeTeam: {
      id: 65,
      name: 'Manchester City',
      shortName: 'MCI',
      crest: 'https://crests.football-data.org/65.png',
    },
    awayTeam: {
      id: 57,
      name: 'Arsenal',
      shortName: 'ARS',
      crest: 'https://crests.football-data.org/57.png',
    },
    score: {
      home: 2,
      away: 1,
    },
  },
  {
    id: 1002,
    competition: 'Premier League',
    league: {
      id: 2021,
      name: 'Premier League',
      country: 'England',
    },
    utcDate: new Date('2026-05-09T16:00:00.000Z').toISOString(),
    status: {
      short: 'NS',
      long: 'Scheduled',
    },
    venue: {
      name: 'Old Trafford',
      city: 'Manchester',
    },
    homeTeam: {
      id: 66,
      name: 'Manchester United',
      shortName: 'MUN',
      crest: 'https://crests.football-data.org/66.png',
    },
    awayTeam: {
      id: 61,
      name: 'Chelsea',
      shortName: 'CHE',
      crest: 'https://crests.football-data.org/61.png',
    },
    score: {
      home: 0,
      away: 0,
    },
  },
  {
    id: 1003,
    competition: 'Premier League',
    league: {
      id: 2021,
      name: 'Premier League',
      country: 'England',
    },
    utcDate: new Date('2026-05-07T19:45:00.000Z').toISOString(),
    status: {
      short: 'FINISHED',
      long: 'Finished',
    },
    venue: {
      name: 'Emirates Stadium',
      city: 'London',
    },
    homeTeam: {
      id: 57,
      name: 'Arsenal',
      shortName: 'ARS',
      crest: 'https://crests.football-data.org/57.png',
    },
    awayTeam: {
      id: 66,
      name: 'Manchester United',
      shortName: 'MUN',
      crest: 'https://crests.football-data.org/66.png',
    },
    score: {
      home: 3,
      away: 1,
    },
  },
  {
    id: 1004,
    competition: 'Premier League',
    league: {
      id: 2021,
      name: 'Premier League',
      country: 'England',
    },
    utcDate: new Date('2026-05-10T14:00:00.000Z').toISOString(),
    status: {
      short: 'TIMED',
      long: 'Timed',
    },
    venue: {
      name: 'Stamford Bridge',
      city: 'London',
    },
    homeTeam: {
      id: 61,
      name: 'Chelsea',
      shortName: 'CHE',
      crest: 'https://crests.football-data.org/61.png',
    },
    awayTeam: {
      id: 65,
      name: 'Manchester City',
      shortName: 'MCI',
      crest: 'https://crests.football-data.org/65.png',
    },
    score: {
      home: 0,
      away: 0,
    },
  },
  {
    id: 1005,
    competition: 'Premier League',
    league: {
      id: 2021,
      name: 'Premier League',
      country: 'England',
    },
    utcDate: new Date('2026-05-06T20:00:00.000Z').toISOString(),
    status: {
      short: 'FINISHED',
      long: 'Finished',
    },
    venue: {
      name: 'Etihad Stadium',
      city: 'Manchester',
    },
    homeTeam: {
      id: 65,
      name: 'Manchester City',
      shortName: 'MCI',
      crest: 'https://crests.football-data.org/65.png',
    },
    awayTeam: {
      id: 66,
      name: 'Manchester United',
      shortName: 'MUN',
      crest: 'https://crests.football-data.org/66.png',
    },
    score: {
      home: 2,
      away: 2,
    },
  },
]

export const samplePlayers: Player[] = [
  {
    id: 1,
    name: 'Marcus Rashford',
    age: 28,
    nationality: 'England',
    team: 'Manchester United',
    position: 'Winger',
    height: '188 cm',
    weight: '82 kg',
    statistics: {
      appearances: 32,
      goals: 18,
      assists: 9,
      passes: 2140,
      shots: 88,
      tackles: 56,
      interceptions: 34,
      dribbles: 96,
      rating: 8.9,
    },
    endurance: [],
    sprintBursts: [],
    movement: [],
  },
  {
    id: 2,
    name: 'Kevin De Bruyne',
    age: 34,
    nationality: 'Belgium',
    team: 'Manchester City',
    position: 'Midfielder',
    statistics: {
      appearances: 27,
      goals: 9,
      assists: 18,
      passes: 2760,
      shots: 61,
      tackles: 34,
      interceptions: 22,
      dribbles: 54,
      rating: 8.7,
    },
    endurance: [],
    sprintBursts: [],
    movement: [],
  },
  {
    id: 3,
    name: 'Bukayo Saka',
    age: 24,
    nationality: 'England',
    team: 'Arsenal',
    position: 'Forward',
    statistics: {
      appearances: 35,
      goals: 20,
      assists: 13,
      passes: 1984,
      shots: 92,
      tackles: 45,
      interceptions: 19,
      dribbles: 118,
      rating: 8.8,
    },
    endurance: [],
    sprintBursts: [],
    movement: [],
  },
]
