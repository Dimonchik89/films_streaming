"use client";

import React from "react";
import { Container, ErrorComponent, Movie, MovieList, Spinner } from "../..";
import { useGetMovieListQuery } from "../../../store/api/moviesApi";
import Pagination from "materialui-pagination-component";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface Props {
  genreId: string;
  media_type: "movie" | "tv";
}

const CategoryMoviesContainer: React.FC<Props> = ({ genreId, media_type }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const page = searchParams.get("page") || 1;

  const { data, isLoading, isError, error } = useGetMovieListQuery(
    `api/with_genres/discover/${media_type}?with_genres=${genreId}&page=${page}`
  );

  const handleOnChange = (pageValue: any) => {
    router.push(`${pathname}?page=${pageValue || 1}`);
  };

  if (isError) {
    return <ErrorComponent error={error} />;
  }

  return (
    <div className="mt-5">
      <div className="min-h-screen h-full flex flex-col">
        <div className="flex flex-col flex-[1_0_auto]">
          {isLoading ? (
            <Spinner isLoading={isLoading} />
          ) : (
            <>
              <MovieList
                movies={data?.results || []}
                lagreMovieContainer={true}
                media_type={media_type}
              />
            </>
          )}
        </div>
        <Pagination
          className="!bg-transparent mt-3 w-full"
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
      </div>
    </div>
  );
};

export default CategoryMoviesContainer;
