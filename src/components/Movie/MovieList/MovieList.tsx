import { Movie } from "@/types/movie";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MovieItem } from "..";

interface Props {
  movies: Movie[];
  lagreMovieContainer: boolean;
}

const MovieList: React.FC<Props> = ({ movies, lagreMovieContainer }) => {
  const content = movies?.map((item, i) => (
    <MovieItem key={item.id} data={item} index={i} />
  ));

  return (
    <div
      className={
        lagreMovieContainer ? "movie-container__lagre" : "movie-container"
      }
    >
      {content}
    </div>
  );
};

export default MovieList;
