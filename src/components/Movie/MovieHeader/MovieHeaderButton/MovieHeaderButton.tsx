"use client";

import {
  MovieHeaderButtonPath,
  MovieHeaderButtonType,
} from "../../../../types/type";
import { useRouter } from "next/navigation";
import { getCategoryMovieFromSearchParams } from "../../../../service/helper";

interface Props extends MovieHeaderButtonType {
  // handleChangeMoviePath: (str: MovieHeaderButtonPath) => void;
}

const MovieHeaderButton: React.FC<Props> = ({ title, path }) => {
  const router = useRouter();

  const category = getCategoryMovieFromSearchParams();

  const handleChangeMoviePath = (str: MovieHeaderButtonPath) => {
    router.push(`/movies?category=${str}`, { scroll: false });
  };

  return (
    <li
      className={`text-sm text-black-800 dark:text-white cursor-pointer select-none ${
        category === path && "font-bold"
      }`}
      onClick={() => handleChangeMoviePath(path)}
    >
      {title}
    </li>
  );
};

export default MovieHeaderButton;
