import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  theme: "light" | "dark";
}

const initialState = {
  theme: "light",
} satisfies CounterState as CounterState;

const themeSlide = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlide.actions;
export default themeSlide.reducer;
