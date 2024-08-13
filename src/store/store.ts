import { configureStore } from "@reduxjs/toolkit";
import { genreApi } from "./api/genresApi";
import { moviesApi } from "./api/moviesApi";

const store = configureStore({
  reducer: {
    [genreApi.reducerPath]: genreApi.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(genreApi.middleware, moviesApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
