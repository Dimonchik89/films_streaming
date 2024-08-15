"use client";

import React, { useState } from "react";
import { Container, ErrorComponent, Spinner } from "..";
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

  if (isError) {
    return <ErrorComponent error={error} />;
  }

  return (
    <div className="py-4">
      <Container>
        {isLoading ? (
          <Spinner isLoading={isLoading} />
        ) : (
          <>
            <CarouselHead
              handleChangeCurrentSlideCategory={
                handleChangeCurrentSlideCategory
              }
              currentCategory={sliderCurrentCategory}
              disabled={isLoading}
            />
            <CarouselContent
              data={data}
              sliderCurrentCategory={sliderCurrentCategory}
            />
          </>
        )}
      </Container>
    </div>
  );
};

export default Carousel;
