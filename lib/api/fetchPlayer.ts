import endurance from '@/mock/endurance.json'
import movement from '@/mock/playerMovement.json'

import { Player } from '@/types/player'

export async function fetchPlayer(
  playerId: number | string,
): Promise<Player | null> {
  try {
    return {
      id: Number(playerId),

      name: 'Marcus Rashford',

      age: 28,

      nationality: 'England',

      team: 'FC Barcelona',

      position: 'Winger',

      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCYKXgmiH_3wipZVR5ElWUgo_VElLlzprBU9GfrxUvrSATGdobzthTQSKHjxz53giUrKeUQuOcoyoq59AP81weG8bX6ZIST8Ag_ccg-kY&s=10',

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

      endurance,

      sprintBursts: [
        {
          minute: 12,
          speed: 31,
          distance: 18,
        },
        {
          minute: 34,
          speed: 29,
          distance: 14,
        },
        {
          minute: 67,
          speed: 33,
          distance: 22,
        },
      ],

      movement,
    }
  } catch (error) {
    console.error(error)

    return null
  }
}
