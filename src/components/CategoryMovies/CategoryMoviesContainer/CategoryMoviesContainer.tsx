"use client";

import React from "react";
import { ErrorComponent, MovieList, Spinner } from "../..";
import { useGetMovieListQuery } from "../../../store/api/moviesApi";
import Pagination from "materialui-pagination-component";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { currentMoviesCategory } from "../../../store/movieCategory/selectors";
import { createStructuredSelector } from "reselect";
import { connect, ConnectedProps } from "react-redux";

interface Props extends Connector {
  genreId: string;
  media_type: "movie" | "tv";
}

const CategoryMoviesContainer: React.FC<Props> = ({
  genreId,
  media_type,
  currentMoviesCategory,
}) => {
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
          <div className="text-center text-2xl font-bold text-black-800 dark:text-white mb-4">
            {currentMoviesCategory}
          </div>
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
          totalPages={data?.total_pages! <= 500 ? data?.total_pages : 500}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentMoviesCategory,
});

const connector = connect(mapStateToProps);
type Connector = ConnectedProps<typeof connector>;

export default connector(CategoryMoviesContainer);
