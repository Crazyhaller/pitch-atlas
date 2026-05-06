import { configureStore } from '@reduxjs/toolkit'

import matchReducer from './slices/matchSlice'
import playerReducer from './slices/playerSlice'
import teamReducer from './slices/teamSlice'
import uiReducer from './slices/uiSlice'
import favouritesReducer from './slices/favouritesSlice'
import explorerReducer from './slices/explorerSlice'

export const store = configureStore({
  reducer: {
    match: matchReducer,
    player: playerReducer,
    team: teamReducer,
    ui: uiReducer,
    favourites: favouritesReducer,
    explorer: explorerReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
