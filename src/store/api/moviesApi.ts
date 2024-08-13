import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie } from "../../types/movie";
import { Response } from "../../types/response";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_LOCAL_URL }),
  tagTypes: ["Movie", "Slider"],
  endpoints: (builder) => ({
    getMovieList: builder.query<Response<Movie[]>, string>({
      query: (url) => url,
      providesTags: (response, error, url) => [{ type: "Slider", id: url }],
    }),
  }),
});

export const { useGetMovieListQuery } = moviesApi;
