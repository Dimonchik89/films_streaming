"use client";

import React from "react";
import { Container } from "../..";
import { useGetMovieListQuery } from "../../../store/api/moviesApi";

interface Props {
  genreId: string;
}

const CategoryMoviesContainer: React.FC<Props> = ({ genreId }) => {
  const { data } = useGetMovieListQuery(
    `api/with_genres/discover/movie?with_genres=${genreId}`
  );

  console.log(data);

  return (
    <Container>
      <div className="mt-5">CategoryMoviesContainer</div>
    </Container>
  );
};

export default CategoryMoviesContainer;
