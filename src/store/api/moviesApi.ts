import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie, MovieDetails } from "../../types/movie";
import { Response, ResponseData, ResponseSearch } from "../../types/response";
import { SeriesDetails } from "../../types/series";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_LOCAL_URL }),
  tagTypes: ["Movie", "OneMovie", "Search"],
  endpoints: (builder) => ({
    getMovieList: builder.query<Response<Movie[]>, string>({
      query: (url) => url,
      providesTags: (response, error, url) => [{ type: "Movie", id: url }],
    }),
    getOneMovie: builder.query<MovieDetails | SeriesDetails, string>({
      query: (url) => url,
      providesTags: (response, error, url) => [{ type: "OneMovie", id: url }],
    }),
    getSearchMovieList: builder.query<Array<ResponseSearch<Movie[]>>, string>({
      query: (url) => url,
      providesTags: (response, error, url) => [{ type: "Search", id: url }],
    }),
  }),
});

export const {
  useGetMovieListQuery,
  useGetOneMovieQuery,
  useGetSearchMovieListQuery,
} = moviesApi;
