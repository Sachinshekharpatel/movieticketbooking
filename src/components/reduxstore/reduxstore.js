import { configureStore, createSlice } from "@reduxjs/toolkit";
// install redux toolkit

const initialState = {
  movieToBook: null,
};

const movieSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movieToBook = action.payload;
    },
  },
});

// Configure Redux store
const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
  },
});
export const reduxActions = movieSlice.actions;

export default store;
