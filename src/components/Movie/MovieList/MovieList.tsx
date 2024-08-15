import { Movie } from "@/types/movie";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MovieItem } from "..";

interface Props {
  movies: Movie[];
}

const MovieList: React.FC<Props> = ({ movies }) => {
  const content = movies?.map((item, i) => (
    <MovieItem key={item.id} data={item} index={i} />
  ));

  return <div className="movie-container">{content}</div>;
};

export default MovieList;
