import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie, MovieDetails } from "../../types/movie";
import { Response } from "../../types/response";
import { SeriesDetails } from "../../types/series";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_LOCAL_URL }),
  tagTypes: ["Movie", "OneMovie"],
  endpoints: (builder) => ({
    getMovieList: builder.query<Response<Movie[]>, string>({
      query: (url) => url,
      providesTags: (response, error, url) => [{ type: "Movie", id: url }],
    }),
    getOneMovie: builder.query<MovieDetails | SeriesDetails, string>({
      query: (url) => url,
      providesTags: (response, error, url) => [{ type: "OneMovie", id: url }],
    }),
  }),
});

export const { useGetMovieListQuery, useGetOneMovieQuery } = moviesApi;
