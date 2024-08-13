import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ResponseGenre } from "@/types/response";
import { Genre } from "@/types/genre";

export const genreApi = createApi({
  reducerPath: "genreApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_LOCAL_URL }),
  tagTypes: ["Genre"],
  endpoints: (builder) => ({
    getFilmsGenre: builder.query<ResponseGenre<Genre[]>, string>({
      query: (url) => url,
      providesTags: (result, error, url) =>
        result ? [{ type: "Genre", id: url }] : [],
    }),
  }),
});

export const { useGetFilmsGenreQuery } = genreApi;
