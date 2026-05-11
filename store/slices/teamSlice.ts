import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TeamState {
  selectedTeamId: number | null
}

const initialState: TeamState = {
  selectedTeamId: null,
}

const teamSlice = createSlice({
  name: 'team',

  initialState,

  reducers: {
    setSelectedTeam(state, action: PayloadAction<number | null>) {
      state.selectedTeamId = action.payload
    },
  },
})

export const { setSelectedTeam } = teamSlice.actions

export default teamSlice.reducer
