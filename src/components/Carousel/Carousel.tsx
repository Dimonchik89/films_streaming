"use client";

import React, { useState } from "react";
import { Container } from "..";
import { CarouselContent, CarouselHead } from ".";

const Carousel = () => {
  const [sliderCurrentCategory, setSliderCurrentCategory] = useState(`movie`);

  const handleChangeCurrentSlideCategory = (data: "movie" | "tv") => {
    setSliderCurrentCategory(data);
  };

  return (
    <div className="py-4 bg-white dark:bg-black-800">
      <Container>
        <CarouselHead
          handleChangeCurrentSlideCategory={handleChangeCurrentSlideCategory}
        />
        <CarouselContent currentCategory={sliderCurrentCategory} />
      </Container>
    </div>
  );
};

export default Carousel;
