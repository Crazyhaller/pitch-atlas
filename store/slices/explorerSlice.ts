import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { MatchEvent } from '@/types/match'

interface ExplorerState {
  playing: boolean
  speed: number
  currentTime: number
  selectedEvent: MatchEvent | null
}

const initialState: ExplorerState = {
  playing: false,
  speed: 1,
  currentTime: 0,
  selectedEvent: null,
}

const explorerSlice = createSlice({
  name: 'explorer',

  initialState,

  reducers: {
    setPlaying(state, action: PayloadAction<boolean>) {
      state.playing = action.payload
    },

    setPlaybackSpeed(state, action: PayloadAction<number>) {
      state.speed = action.payload
    },

    setCurrentTime(state, action: PayloadAction<number>) {
      state.currentTime = action.payload
    },

    setSelectedEvent(state, action: PayloadAction<MatchEvent | null>) {
      state.selectedEvent = action.payload
    },
  },
})

export const {
  setPlaying,
  setPlaybackSpeed,
  setCurrentTime,
  setSelectedEvent,
} = explorerSlice.actions

export default explorerSlice.reducer
