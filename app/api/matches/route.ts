import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch(
      'https://api.football-data.org/v4/competitions/PL/matches',
      {
        headers: {
          'X-Auth-Token': process.env.FOOTBALL_DATA_API_KEY ?? '',
        },

        next: {
          revalidate: 60,
        },
      },
    )

    if (!response.ok) {
      throw new Error('Failed to fetch matches')
    }

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Unknown error',
      },

      {
        status: 500,
      },
    )
  }
}
