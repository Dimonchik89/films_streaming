import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const baseState = (state: RootState) => state.theme;

const theme = createSelector(baseState, (state) => state.theme);

export { theme };
