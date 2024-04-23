// store.js

import { configureStore } from "@reduxjs/toolkit";
import FavMoviesReducer from "./Slices/FavMovies"; // Import the default export

const store = configureStore({
  reducer: {
    // Add reducers to the store
    favMovies: FavMoviesReducer, // Use the imported reducer
  },
});

export default store;
