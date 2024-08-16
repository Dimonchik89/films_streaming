import { configureStore } from "@reduxjs/toolkit";
import { genreApi } from "./api/genresApi";
import { moviesApi } from "./api/moviesApi";
import themeReducer from "./theme/themeSlice";
import moviesCategory from "./movieCategory/moviesCategory";

const store = configureStore({
  reducer: {
    [genreApi.reducerPath]: genreApi.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    theme: themeReducer,
    moviesCategory: moviesCategory,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(genreApi.middleware, moviesApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
