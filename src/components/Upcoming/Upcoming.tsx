"use client";

import React from "react";
import { useGetMovieListQuery } from "../../store/api/moviesApi";
import { normalizeDate } from "../../service/helper";
import { ErrorComponent, Spinner } from "..";

const Upcoming = () => {
  const { data, isLoading, isError, error } =
    useGetMovieListQuery("api/movie/upcoming");

  const content = data?.results.map((item, i) => (
    <li
      key={item.id}
      className={`py-2 flex justify-between items-center px-1 ${
        i % 2 ? "bg-gray-100 dark:bg-gray-800" : "bg-transparent"
      }`}
    >
      <p className="text-md text-black-800 dark:text-white dotted__text__long">
        {"title" in item ? item.title : item.name}
      </p>
      <p className="text-sm text-black-800 dark:text-white">
        {"release_date" in item
          ? normalizeDate(item.release_date)
          : normalizeDate(item.first_air_date)}
      </p>
    </li>
  ));

  if (isError) {
    <ErrorComponent error={error} />;
  }

  return (
    <div>
      {isLoading ? (
        <Spinner isLoading={isLoading} />
      ) : (
        <>
          <h2 className="mb-3 text-xl font-bold text-black-800 dark:text-white">
            Upcoming
          </h2>
          <ul>{content}</ul>
        </>
      )}
    </div>
  );
};

export default Upcoming;
