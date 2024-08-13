import React from "react";
import { carouselCategoryButtons } from "../../../data/carouselCategoryButton";

interface Props {
  handleChangeCurrentSlideCategory: (data: "movie" | "tv") => void;
  currentCategory: "movie" | "tv";
}

const CarouselHead: React.FC<Props> = ({
  handleChangeCurrentSlideCategory,
  currentCategory,
}) => {
  const content = carouselCategoryButtons.map((item) => (
    <li
      key={item.title}
      className={`carousel__links ${
        currentCategory === item.path &&
        "font-bold underline underline-offset-2	"
      }`}
      onClick={() => handleChangeCurrentSlideCategory(item.path)}
    >
      {item.title}
    </li>
  ));

  return (
    <div className="flex items-center mb-4">
      <h2 className="text-black-800 dark:text-white text-md lg:text-lg font-bold">
        Очiкуванi:
      </h2>
      <ul className="flex ml-3 lg:ml-5 gap-2 lg:gap-3">{content}</ul>
    </div>
  );
};

export default CarouselHead;
