import React from "react";
import { movieHeaderButtonsCategory } from "../../../data/movieHeaderButtons";
import { MovieHeaderButton } from ".";

interface Props {}

const MovieHeader: React.FC<Props> = () => {
  const content = movieHeaderButtonsCategory.map((item) => (
    <MovieHeaderButton key={item.title} {...item} />
  ));

  return <ul className="flex items-center gap-2 mb-5">{content}</ul>;
};

export default MovieHeader;
