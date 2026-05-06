import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FavouriteEntity {
  id: number | string
  type: 'player' | 'team'
  name: string
  image?: string
}

interface FavouritesState {
  items: FavouriteEntity[]
}

const initialState: FavouritesState = {
  items: [],
}

const favouritesSlice = createSlice({
  name: 'favourites',

  initialState,

  reducers: {
    addFavourite(state, action: PayloadAction<FavouriteEntity>) {
      const exists = state.items.find(
        (item) =>
          item.id === action.payload.id && item.type === action.payload.type,
      )

      if (!exists) {
        state.items.push(action.payload)
      }
    },

    removeFavourite(
      state,
      action: PayloadAction<{
        id: number | string
        type: 'player' | 'team'
      }>,
    ) {
      state.items = state.items.filter(
        (item) =>
          !(item.id === action.payload.id && item.type === action.payload.type),
      )
    },

    hydrateFavourites(state, action: PayloadAction<FavouriteEntity[]>) {
      state.items = action.payload
    },
  },
})

export const { addFavourite, removeFavourite, hydrateFavourites } =
  favouritesSlice.actions

export default favouritesSlice.reducer
