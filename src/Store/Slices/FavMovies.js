import { createSlice } from "@reduxjs/toolkit";

const favMoviesSlice = createSlice({
  name: "favMovies",
  initialState: {
    favorites: [],
    count: 0, // New field for count of favorite movies
  },
  reducers: {
    addToFave: (state, action) => {
      state.favorites.push(action.payload);
      state.count++; // Increment count when adding a favorite
    },
    removeFav: (state, action) => {
      state.favorites = state.favorites.filter(
        (movieId) => movieId !== action.payload
      );
      state.count--; // Decrement count when removing a favorite
    },
  },
});

export const { addToFave, removeFav } = favMoviesSlice.actions;
export default favMoviesSlice.reducer;
