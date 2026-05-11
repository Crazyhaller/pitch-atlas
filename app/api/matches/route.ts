import { NextResponse } from 'next/server'

import { sampleMatches } from '@/lib/data/sampleFootball'

export async function GET() {
  try {
    const token = process.env.FOOTBALL_DATA_API_KEY

    if (!token) {
      return NextResponse.json(sampleMatches)
    }

    const response = await fetch(
      'https://api.football-data.org/v4/competitions/PL/matches',
      {
        headers: {
          'X-Auth-Token': token,
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
  } catch {
    return NextResponse.json(sampleMatches)
  }
}
