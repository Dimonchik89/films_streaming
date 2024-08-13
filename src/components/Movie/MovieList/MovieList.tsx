"use client";

import { LANGUAGE } from "@/constants";
import { Movie } from "@/types/movie";
import { Response } from "@/types/response";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import MovieItem from "../MovieItem/MovieItem";
import Link from "next/link";
import Image from "next/image";

interface Props {
  movies: Movie[];
}

const MovieList: React.FC<Props> = ({ movies }) => {
  const content = movies?.map((item, i) => (
    <Link href={`/movie/${item.id}`}>
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt={`${item.id}`}
          width={140}
          height={240}
          priority
        />
      </div>
    </Link>
  ));

  return <div className="flex flex-wrap justify-between gap-3">{content}</div>;
};

export default MovieList;
