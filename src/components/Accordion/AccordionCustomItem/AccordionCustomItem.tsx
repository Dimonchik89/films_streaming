"use client";

import { Genre } from "@/types/genre";
import Link from "next/link";
import { bindActionCreators } from "@reduxjs/toolkit";
import { setCurrentMoviesCategory } from "../../../store/movieCategory/moviesCategory";
import { connect, ConnectedProps } from "react-redux";
import { AppDispatch } from "../../../store/store";
interface Props extends Connector {
  el: Genre;
  basePath: string;
}

const AccordionCustomItem: React.FC<Props> = ({
  el,
  basePath,
  setCurrentMoviesCategory,
}) => {
  return (
    <Link
      key={el.id}
      className="text-black-800 dark:text-white text-sm ml-2"
      href={`${basePath}/${el.id}`}
      onClick={() => {
        document.querySelector("body")?.classList.remove("no-scroll");
        setCurrentMoviesCategory(el.name);
      }}
    >
      {el.name}
    </Link>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setCurrentMoviesCategory: bindActionCreators(
    setCurrentMoviesCategory,
    dispatch
  ),
});

const connector = connect(null, mapDispatchToProps);
type Connector = ConnectedProps<typeof connector>;

export default connector(AccordionCustomItem);
