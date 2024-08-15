import React from "react";
import { MovieHeader, MovieList } from ".";
import { ErrorComponent, Spinner } from "..";
import { Movie as MovieType } from "../../types/movie";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

interface Props {
  data: MovieType[];
  isLoading: boolean;
  isError: boolean;
  error: FetchBaseQueryError | SerializedError;
  total_pages: number;
  lagreMovieContainer: boolean;
}

const Movie: React.FC<Props> = ({
  data,
  error,
  isError,
  isLoading,
  lagreMovieContainer,
}) => {
  if (isError) {
    return <ErrorComponent error={error} />;
  }

  return (
    <div className="flex flex-col flex-[1_0_auto]">
      {isLoading ? (
        <Spinner isLoading={isLoading} />
      ) : (
        <>
          <MovieHeader />
          <MovieList
            movies={data || []}
            lagreMovieContainer={lagreMovieContainer}
          />
        </>
      )}
    </div>
  );
};

export default Movie;
