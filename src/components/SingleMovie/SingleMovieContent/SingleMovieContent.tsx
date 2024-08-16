import React from "react";
import { MovieDetails } from "../../../types/movie";
import { SeriesDetails } from "../../../types/series";
import Image from "next/image";
import { SingleMovieTable } from "..";

interface Props {
  movie: MovieDetails | SeriesDetails;
  media_type: "movie" | "tv";
}

const SingleMovieContent: React.FC<Props> = ({ movie, media_type }) => {
  return (
    <div>
      <div className="text-2xl capitalize font-bold text-black-800 dark:text-white">
        {"title" in movie ? movie.title : movie.name}
      </div>
      <div className="mt-4">
        <div className="flex gap-4 flex-col md:flex-row items-center md:items-start">
          <Image
            src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
            alt={`${movie.id}`}
            width={200}
            height={300}
          />

          <div className="flex flex-col">
            <SingleMovieTable movie={movie} />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="flex flex-col items-center">
          <span className="text-md font-bold text-black-800 dark:text-blue-200">
            Overview:
          </span>
          <span className="text-sm mt-3 text-black-800 dark:text-white">
            {movie.overview}
          </span>
        </div>
      </div>
      <div className="my-10 flex justify-center">
        <iframe
          src={`${process.env.NEXT_PUBLIC_MOVIE_URL}${media_type}?tmdb=${movie.id}&ds_lang=uk`}
          width={640}
          height={480}
          // frameborder="0"
          allowFullScreen={true}
          // style="height: 100%; width: 100%;"
        ></iframe>
      </div>
    </div>
  );
};

export default SingleMovieContent;
