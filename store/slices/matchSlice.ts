import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { fetchMatches } from '@/lib/api/fetchMatches'

import { Match } from '@/types/match'

interface MatchState {
  matches: Match[]

  selectedMatch: Match | null

  loading: boolean

  error: string | null
}

const initialState: MatchState = {
  matches: [],

  selectedMatch: null,

  loading: false,

  error: null,
}

export const getMatches = createAsyncThunk<
  Match[],
  void,
  {
    rejectValue: string
  }
>(
  'match/getMatches',

  async (_, thunkAPI) => {
    try {
      const matches = await fetchMatches()

      return matches
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : 'Failed to fetch matches',
      )
    }
  },
)

const matchSlice = createSlice({
  name: 'match',

  initialState,

  reducers: {
    setSelectedMatch: (
      state,
      action: {
        payload: Match | null
      },
    ) => {
      state.selectedMatch = action.payload
    },

    clearSelectedMatch: (state) => {
      state.selectedMatch = null
    },
  },

  extraReducers: (builder) => {
    builder

      // PENDING

      .addCase(getMatches.pending, (state) => {
        state.loading = true

        state.error = null
      })

      // FULFILLED

      .addCase(getMatches.fulfilled, (state, action) => {
        state.loading = false

        state.matches = action.payload
      })

      // REJECTED

      .addCase(getMatches.rejected, (state, action) => {
        state.loading = false

        state.error = action.payload ?? 'Failed to fetch matches'
      })
  },
})

export const { setSelectedMatch, clearSelectedMatch } = matchSlice.actions

export default matchSlice.reducer
