import React from "react";

interface Props {
  handleChangeCurrentSlideCategory: (data: "movie" | "tv") => void;
}

const CarouselHead: React.FC<Props> = ({
  handleChangeCurrentSlideCategory,
}) => {
  return (
    <div className="flex items-center mb-4">
      <h2 className="text-black-800 dark:text-white text-md lg:text-lg font-bold">
        Очiкуванi:
      </h2>
      <ul className="flex ml-3 lg:ml-5 gap-2 lg:gap-3">
        <li
          className="carousel__links"
          onClick={() => handleChangeCurrentSlideCategory("movie")}
        >
          Фiльми
        </li>
        <li
          className="carousel__links"
          onClick={() => handleChangeCurrentSlideCategory("tv")}
        >
          Серiали
        </li>
        {/* <li className="carouselLinks">Мультфiльми</li>
        <li className="carouselLinks">Анiме</li> */}
      </ul>
    </div>
  );
};

export default CarouselHead;
