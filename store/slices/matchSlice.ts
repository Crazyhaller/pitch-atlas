import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { fetchMatches } from '@/lib/api/fetchMatches'

export interface Match {
  id: number
  homeTeam: string
  awayTeam: string
  score: string
  status: string
  date: string
}

interface MatchState {
  matches: Match[]
  loading: boolean
  error: string | null
}

const initialState: MatchState = {
  matches: [],
  loading: false,
  error: null,
}

export const getMatches = createAsyncThunk('match/getMatches', async () => {
  return await fetchMatches()
})

const matchSlice = createSlice({
  name: 'match',

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getMatches.pending, (state) => {
        state.loading = true
        state.error = null
      })

      .addCase(getMatches.fulfilled, (state, action) => {
        state.loading = false
        state.matches = action.payload
      })

      .addCase(getMatches.rejected, (state, action) => {
        state.loading = false

        state.error = action.error.message ?? 'Failed to fetch matches'
      })
  },
})

export default matchSlice.reducer
