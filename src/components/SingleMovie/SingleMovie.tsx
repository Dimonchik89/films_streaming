"use client";
import React from "react";
import { useGetOneMovieQuery } from "../../store/api/moviesApi";
import { ErrorComponent, Spinner } from "..";
import { SingleMovieContent } from ".";

interface Props {
  id: string;
  media_type: "movie" | "tv";
}

const SingleMovie: React.FC<Props> = ({ id, media_type }) => {
  const { data, isLoading, isError, error } = useGetOneMovieQuery(
    `api/one_movie/${media_type}/${id}`
  );

  console.log("data", data);

  if (isError) {
    return <ErrorComponent error={error} />;
  }

  return (
    <div className="mt-5">
      {isLoading ? (
        <Spinner isLoading={isLoading} />
      ) : (
        <SingleMovieContent movie={data!} media_type={media_type} />
      )}
    </div>
  );
};

export default SingleMovie;
