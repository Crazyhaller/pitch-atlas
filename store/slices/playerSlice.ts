import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PlayerState {
  selectedPlayerId: number | null
}

const initialState: PlayerState = {
  selectedPlayerId: null,
}

const playerSlice = createSlice({
  name: 'player',

  initialState,

  reducers: {
    setSelectedPlayer(state, action: PayloadAction<number | null>) {
      state.selectedPlayerId = action.payload
    },
  },
})

export const { setSelectedPlayer } = playerSlice.actions

export default playerSlice.reducer
