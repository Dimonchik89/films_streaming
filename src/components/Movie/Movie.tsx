"use client";

import React from "react";
import { MovieHeader, MovieList } from ".";
import { useGetMovieListQuery } from "../../store/api/moviesApi";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { movieHeaderButtonsCategory } from "../../data/movieHeaderButtons";
import { getCategoryMovieFromSearchParams } from "../../service/helper";
import { ErrorComponent, Spinner } from "..";
import Pagination from "materialui-pagination-component";

const Movie = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const moviePath = getCategoryMovieFromSearchParams();
  const page = searchParams.get("page") || 1;

  const { data, isLoading, isError, error } = useGetMovieListQuery(
    `api/movie/${moviePath}?page=${page}`
  );

  const handleOnChange = (pageValue: any) => {
    const params = new URLSearchParams(searchParams.toString());
    if (pathname === "/") {
      // if homepage empty add query params category=now_playing
      params.set("category", movieHeaderButtonsCategory[0].path);
    }
    params.set("page", pageValue || 1);
    router.push(`movies?${params.toString()}`);
  };

  if (isError) {
    return <ErrorComponent error={error} />;
  }

  return (
    <div className="flex flex-col">
      <MovieHeader />
      {isLoading ? (
        <Spinner isLoading={isLoading} />
      ) : (
        <MovieList movies={data?.results || []} />
      )}
      {!isLoading && ( // сделать чтоб пагинации небыло только при первой загрузке
        <Pagination
          className="!bg-transparent"
          variant="text"
          selectVariant="tab"
          navigationVariant="icon"
          pageWindowVariant="ellipsis"
          color="primary"
          indicatorColor="primary"
          hideNavigation={true}
          page={Number(searchParams.get("page")) || 1}
          totalPages={data?.total_pages}
          onChange={handleOnChange}
        />
      )}
    </div>
  );
};

export default Movie;
