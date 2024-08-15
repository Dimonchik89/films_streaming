import React from "react";
import { MovieDetails } from "../../../types/movie";
import { SeriesDetails } from "../../../types/series";

interface Props {
  movie: MovieDetails | SeriesDetails;
}

const SingleMovieTable: React.FC<Props> = ({ movie }) => {
  return (
    <table className="text-sm">
      <tr>
        <td>
          <span className="font-bold text-black-800 dark:text-blue-200">
            Ratings:
          </span>
        </td>
        <td>
          <span className="text-black-800 dark:text-white font-semibold">
            {movie.vote_average.toFixed(1)}
          </span>
        </td>
      </tr>
      <tr>
        <td>
          <span className="font-bold text-black-800 dark:text-blue-200">
            Release date:
          </span>
        </td>
        <td>
          <span className="text-black-800 dark:text-white font-semibold">
            {"release_date" in movie
              ? movie?.release_date
              : movie.first_air_date}
          </span>
        </td>
      </tr>
      <tr>
        <td className="font-bold text-black-800 dark:text-blue-200">
          Country:
        </td>
        <td>
          {movie.production_countries.map((item) => (
            <span className="mr-1 text-black-800 dark:text-white font-semibold">
              {item.name};
            </span>
          ))}
        </td>
      </tr>
      <tr>
        <td className="font-bold text-black-800 dark:text-blue-200">
          Production Companies:
        </td>
        <td>
          {movie.production_companies.map((item) => (
            <span className="mr-1 text-black-800 dark:text-white font-semibold">
              {item.name};
            </span>
          ))}
        </td>
      </tr>
      <tr>
        <td className="font-bold text-black-800 dark:text-blue-200">Genres:</td>
        <td>
          {movie.genres.map((item) => (
            <span className="mr-1 text-black-800 dark:text-white font-semibold">
              {item.name};
            </span>
          ))}
        </td>
      </tr>
    </table>
  );
};

export default SingleMovieTable;
