import React from "react";
import { Movie } from "../../../types/movie";
import Image from "next/image";
import Link from "next/link";

interface Props {
  movie: Movie;
}

const CarouselItem: React.FC<Props> = ({ movie }) => {
  console.log(movie);

  const releaseYear =
    movie?.release_date?.split("-")[0] || movie?.first_air_date?.split("-")[0];

  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="rounded-md overflow-hidden pb-1">
        <div className="carousel__image__wrapper">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="lalala"
            width={140}
            height={240}
          />
          <Image
            src={"/icons/play-circle.svg"}
            alt="play"
            width={50}
            height={50}
            className="carousel__card__icon"
          />
        </div>
        <div className="mt-2">
          <h4 className="slider__dotted__text text-black-800 text-md font-semibold dark:text-blue-200">
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
  );
};

export default CarouselItem;
