"use client";

import { LANGUAGE } from "@/constants";
import fetchData from "@/service/api";
import { Movie } from "@/types/movie";
import { Response } from "@/types/response";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import MovieItem from "../MovieItem/MovieItem";

const MovieList = () => {
  const { data, isError, isLoading, error } = useQuery<Response<Movie[]>>({
    queryKey: ["movies"],
    queryFn: () =>
      fetchData(
        `${process.env.NEXT_PUBLIC_BASE_URL}movie/now_playing?language=${LANGUAGE}&page=1`
      ),
  });

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  const content = data?.results.map((item) => (
    <MovieItem key={item.id} data={item} />
  ));

  return <div className="flex flex-col">{content}</div>;
};

export default MovieList;
