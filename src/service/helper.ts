import { useSearchParams } from "next/navigation";
import { movieHeaderButtonsCategory } from "../data/movieHeaderButtons";

const getCategoryMovieFromSearchParams = () => {
  const searchParams = useSearchParams();

  const category =
    searchParams.get("category") || movieHeaderButtonsCategory[0].path;

  return category;
};

const normalizeDate = (dateString: string = ""): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate.replace(/,|\s/g, " ");
};

export { getCategoryMovieFromSearchParams, normalizeDate };
