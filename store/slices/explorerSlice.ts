import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ExplorerEvent {
  id: number
  minute: number
  x: number
  y: number
  type: string
  player: string
}

interface ExplorerState {
  playing: boolean
  speed: number
  currentTime: number
  selectedEvent: ExplorerEvent | null
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

    setSelectedEvent(state, action: PayloadAction<ExplorerEvent | null>) {
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
