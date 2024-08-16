"use client";

import React from "react";
import { Movie } from "../../../types/movie";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  movie: Movie;
  index: number;
  sliderCurrentCategory: "movie" | "tv";
}

const CarouselItem: React.FC<Props> = ({
  movie,
  index = 0,
  sliderCurrentCategory,
}) => {
  const releaseYear =
    movie?.release_date?.split("-")[0] || movie?.first_air_date?.split("-")[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 * index }}
    >
      <Link href={`/${sliderCurrentCategory}/${movie.id}`}>
        <div className="rounded-md overflow-hidden pb-1">
          <div className="image__wrapper">
            <Image
              src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
              alt={`${movie.id}`}
              width={140}
              height={240}
              priority
            />
            <Image
              src={"/icons/play-circle.svg"}
              alt="play"
              width={50}
              height={50}
              className="card__icon"
            />
          </div>
          <div className="mt-2">
            <h4 className="dotted__text text-black-800 text-md font-semibold dark:text-blue-200">
              {movie?.title || movie?.name}
            </h4>
            <div className="flex flex-col mt-1">
              <span className="text-black-800 dark:text-white text-xs font-medium">
                {releaseYear}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CarouselItem;
