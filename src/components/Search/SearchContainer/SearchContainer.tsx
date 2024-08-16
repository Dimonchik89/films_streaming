"use client";

import React from "react";
import { useGetSearchMovieListQuery } from "../../../store/api/moviesApi";
import { ErrorComponent, MovieList, Spinner } from "../..";
import { v4 as uuidv4 } from "uuid";
import Pagination from "materialui-pagination-component";
import { useSearchParams, useRouter } from "next/navigation";

interface Props {
  query: string;
}

type MediaType = "movie" | "tv";

const SearchContainer: React.FC<Props> = ({ query }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams.get("page") || 1;

  const mediaTypeFromParams = searchParams.get("media_type") || "movie";

  const mediaType: MediaType =
    mediaTypeFromParams === "movie" || mediaTypeFromParams === "tv"
      ? mediaTypeFromParams
      : "movie";

  const { data, isLoading, isError, error } = useGetSearchMovieListQuery(
    `api/search?query=${query}&page=${page}`
  );

  let actualData = data?.find((item) => item.media_type === mediaType);

  const buttons = data?.map((item) => (
    <button
      className={`border-2 border-gray-800 dark:border-gray-200 text-black-800 dark:text-gray-200  rounded-2xl px-4 py-1 text-md font-bold ${
        mediaType === item.media_type && "bg-blue-800 text-gray-200"
      }`}
      key={uuidv4()}
      onClick={() => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("media_type", item.media_type);

        params.set("page", "1");
        router.push(`search?${params.toString()}`);
      }}
    >
      {item.media_type}
    </button>
  ));

  const handleOnChange = (pageValue: any) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", pageValue || "1");
    router.push(`search?${params.toString()}`);
  };

  if (isError) {
    return <ErrorComponent error={error} />;
  }

  return (
    <div className="mt-5">
      <div className="flex gap-3">{buttons}</div>
      <div className="min-h-screen h-full flex flex-col mt-5">
        {isLoading ? (
          <Spinner isLoading={isLoading} />
        ) : (
          <MovieList
            movies={actualData?.results || []}
            lagreMovieContainer={true}
            media_type={mediaType}
          />
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
        totalPages={
          actualData?.total_pages || 1 <= 500 ? actualData?.total_pages : 500
        }
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SearchContainer;
