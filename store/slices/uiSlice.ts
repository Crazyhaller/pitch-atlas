import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UIState {
  sidebarOpen: boolean

  searchOpen: boolean

  loading: boolean

  activeLeague: string

  selectedTheme: 'dark' | 'terrain'

  dashboardLayout: 'grid' | 'immersive'

  reducedMotion: boolean
}

const initialState: UIState = {
  sidebarOpen: true,

  searchOpen: false,

  loading: false,

  activeLeague: 'PL',

  selectedTheme: 'dark',

  dashboardLayout: 'grid',

  reducedMotion: false,
}

const uiSlice = createSlice({
  name: 'ui',

  initialState,

  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen
    },

    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload
    },

    toggleSearch: (state) => {
      state.searchOpen = !state.searchOpen
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },

    setActiveLeague: (state, action: PayloadAction<string>) => {
      state.activeLeague = action.payload
    },

    setTheme: (state, action: PayloadAction<'dark' | 'terrain'>) => {
      state.selectedTheme = action.payload
    },

    setDashboardLayout: (
      state,
      action: PayloadAction<'grid' | 'immersive'>,
    ) => {
      state.dashboardLayout = action.payload
    },

    setReducedMotion: (state, action: PayloadAction<boolean>) => {
      state.reducedMotion = action.payload
    },
  },
})

export const {
  toggleSidebar,
  setSidebarOpen,
  toggleSearch,
  setLoading,
  setActiveLeague,
  setTheme,
  setDashboardLayout,
  setReducedMotion,
} = uiSlice.actions

export default uiSlice.reducer
