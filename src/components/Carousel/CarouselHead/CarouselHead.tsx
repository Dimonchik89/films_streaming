import React from "react";
import { carouselCategoryButtons } from "../../../data/carouselCategoryButton";

interface Props {
  handleChangeCurrentSlideCategory: (data: "movie" | "tv") => void;
  currentCategory: "movie" | "tv";
  disabled: boolean;
}

const CarouselHead: React.FC<Props> = ({
  handleChangeCurrentSlideCategory,
  currentCategory,
  disabled,
}) => {
  const content = carouselCategoryButtons.map((item) => (
    <li
      key={item.title}
      className={"carousel__links"}
      onClick={() => handleChangeCurrentSlideCategory(item.path)}
    >
      <button
        className={`${
          currentCategory === item.path &&
          "font-bold underline underline-offset-2	"
        }`}
        disabled={disabled}
      >
        {item.title}
      </button>
    </li>
  ));

  return (
    <div className="flex items-center mb-4">
      <h2 className="text-black-800 dark:text-white text-md lg:text-lg font-bold">
        New:
      </h2>
      <ul className="flex ml-3 lg:ml-5 gap-2 lg:gap-3">{content}</ul>
    </div>
  );
};

export default CarouselHead;
