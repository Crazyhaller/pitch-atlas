import endurance from '@/mock/endurance.json'
import movement from '@/mock/playerMovement.json'

import { Player } from '@/types/player'
import { samplePlayers } from '@/lib/data/sampleFootball'

export async function fetchPlayer(
  playerId: number | string,
): Promise<Player | null> {
  try {
    const basePlayer =
      samplePlayers.find((player) => player.id === Number(playerId)) ??
      samplePlayers[0]

    return {
      ...basePlayer,

      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCYKXgmiH_3wipZVR5ElWUgo_VElLlzprBU9GfrxUvrSATGdobzthTQSKHjxz53giUrKeUQuOcoyoq59AP81weG8bX6ZIST8Ag_ccg-kY&s=10',

      height: '188 cm',

      weight: '82 kg',

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
  } catch {
    return null
  }
}
