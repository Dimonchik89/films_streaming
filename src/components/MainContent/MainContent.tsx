"use client";

import React, { Suspense } from "react";
import { Container, Movie } from "..";
import { getCategoryMovieFromSearchParams } from "../../service/helper";
import { useGetMovieListQuery } from "../../store/api/moviesApi";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Pagination from "materialui-pagination-component";
import { movieHeaderButtonsCategory } from "../../data/movieHeaderButtons";

interface Props {
  lagreMovieContainer: boolean;
  media_type: "movie" | "tv";
}

const MainContent: React.FC<Props> = ({ lagreMovieContainer, media_type }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const moviePath = getCategoryMovieFromSearchParams();
  const page = searchParams.get("page") || 1;

  const { data, isLoading, isError, error } = useGetMovieListQuery(
    `api/${media_type}/${moviePath}?page=${page}`
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

  return (
    <div className="min-h-screen h-full flex flex-col">
      <Movie
        data={data?.results || []}
        isError={isError}
        isLoading={isLoading}
        error={error!}
        total_pages={data?.total_pages || 1}
        lagreMovieContainer={lagreMovieContainer}
        media_type={media_type}
      />
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
  );
};

export default MainContent;
