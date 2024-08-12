import React from "react";
import { Container } from "..";

const Carousel = () => {
  return (
    <div className="py-4 bg-white dark:bg-black-800">
      <Container>
        <div className="flex">
          <h2 className="text-black-800 dark:text-white text-lg font-bold">
            Очiкуванi:
          </h2>
          <ul className="flex ml-5 gap-2">
            <li className="text-black-800 dark:text-blue-200 text-md">
              Фiльми
            </li>
            <li className="text-black-800 dark:text-blue-200 text-md">
              Серiали
            </li>
            <li className="text-black-800 dark:text-blue-200 text-md">
              Мультфiльми
            </li>
            <li className="text-black-800 dark:text-blue-200 text-md">Анiме</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Carousel;
