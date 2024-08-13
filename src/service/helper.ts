import { useSearchParams } from "next/navigation";
import { movieHeaderButtonsCategory } from "../data/movieHeaderButtons";

const getCategoryMovieFromSearchParams = () => {
  const searchParams = useSearchParams();

  const category =
    searchParams.get("category") || movieHeaderButtonsCategory[0].path;

  return category;
};

export { getCategoryMovieFromSearchParams };
