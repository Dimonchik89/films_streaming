import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  currentMoviesCategory: string | null;
}

const initialState = {
  currentMoviesCategory: null,
} satisfies InitialState as InitialState;

const moviesCategory = createSlice({
  name: "moviesCategory",
  initialState,
  reducers: {
    setCurrentMoviesCategory: (state, action) => {
      state.currentMoviesCategory = action.payload;
    },
  },
});

export const { setCurrentMoviesCategory } = moviesCategory.actions;
export default moviesCategory.reducer;
