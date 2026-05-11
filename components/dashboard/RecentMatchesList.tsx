'use client'

import { Match } from '@/types/match'

import MatchCard from './MatchCard'

interface RecentMatchesListProps {
  matches: Match[]
}

export default function RecentMatchesList({ matches }: RecentMatchesListProps) {
  return (
    <div className="grid min-w-0 gap-5 2xl:grid-cols-2">
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  )
}
