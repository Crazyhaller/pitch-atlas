import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UIState {
  sidebarOpen: boolean
  searchOpen: boolean
  loading: boolean
  activeLeague: string
  selectedTheme: 'dark'
}

const initialState: UIState = {
  sidebarOpen: true,
  searchOpen: false,
  loading: false,
  activeLeague: 'PL',
  selectedTheme: 'dark',
}

const uiSlice = createSlice({
  name: 'ui',

  initialState,

  reducers: {
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen
    },

    setSidebarOpen(state, action: PayloadAction<boolean>) {
      state.sidebarOpen = action.payload
    },

    toggleSearch(state) {
      state.searchOpen = !state.searchOpen
    },

    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },

    setActiveLeague(state, action: PayloadAction<string>) {
      state.activeLeague = action.payload
    },
  },
})

export const {
  toggleSidebar,
  setSidebarOpen,
  toggleSearch,
  setLoading,
  setActiveLeague,
} = uiSlice.actions

export default uiSlice.reducer
