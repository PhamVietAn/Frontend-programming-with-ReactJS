import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  name: string;
  favorite: boolean;
}

interface FavoritesState {
  users: User[];
}

const initialState: FavoritesState = {
  users: [
    { id: 1, name: "Nguyễn Văn A", favorite: true },
    { id: 2, name: "Nguyễn Văn B", favorite: false },
    { id: 3, name: "Nguyễn Văn C", favorite: true },
    { id: 4, name: "Nguyễn Văn D", favorite: true },
  ],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const user = state.users.find((u) => u.id === action.payload);
      if (user) {
        user.favorite = !user.favorite;
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;