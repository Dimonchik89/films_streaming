"use client";

import React, { useState } from "react";
import { Container } from "..";
import { CarouselContent, CarouselHead } from ".";
import { useGetMovieListQuery } from "../../store/api/moviesApi";

const Carousel = () => {
  const [sliderCurrentCategory, setSliderCurrentCategory] = useState<
    "movie" | "tv"
  >(`movie`);
  const { data, isLoading, isError, error } = useGetMovieListQuery(
    `api/trending/${sliderCurrentCategory}?time=day`
  );

  const handleChangeCurrentSlideCategory = (data: "movie" | "tv") => {
    setSliderCurrentCategory(data);
  };

  return (
    <div className="py-4">
      <Container>
        <CarouselHead
          handleChangeCurrentSlideCategory={handleChangeCurrentSlideCategory}
          currentCategory={sliderCurrentCategory}
          disabled={isLoading}
        />
        <CarouselContent
          data={data}
          isLoading={isLoading}
          isError={isError}
          error={error!}
        />
      </Container>
    </div>
  );
};

export default Carousel;
