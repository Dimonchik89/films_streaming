"use client";

import {
  MovieHeaderButtonPath,
  MovieHeaderButtonType,
} from "../../../../types/type";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { movieHeaderButtonsCategory } from "../../../../data/movieHeaderButtons";
import { getCategoryMovieFromSearchParams } from "../../../../service/helper";

interface Props extends MovieHeaderButtonType {
  // handleChangeMoviePath: (str: MovieHeaderButtonPath) => void;
}

const MovieHeaderButton: React.FC<Props> = ({ title, path }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  // const category =
  //   searchParams.get("category") || movieHeaderButtonsCategory[0].path;
  const category = getCategoryMovieFromSearchParams();

  const handleChangeMoviePath = (str: MovieHeaderButtonPath) => {
    console.log(`/movies?category=${str}`);

    router.push(`/movies?category=${str}`, { scroll: false });
  };

  return (
    <li
      className={`text-sm text-black-800 dark:text-white cursor-pointer ${
        category === path && "font-bold"
      }`}
      onClick={() => handleChangeMoviePath(path)}
    >
      {title}
    </li>
  );
};

export default MovieHeaderButton;
