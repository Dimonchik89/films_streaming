import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const baseState = (state: RootState) => state.moviesCategory;

export const currentMoviesCategory = createSelector(
  baseState,
  (state) => state.currentMoviesCategory
);
