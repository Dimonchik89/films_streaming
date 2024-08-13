"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { CarouselItem } from "..";
import { ErrorComponent, Spinner } from "../..";
import { Movie } from "../../../types/movie";
import { Response } from "../../../types/response";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit/react";

import "swiper/css";

interface Props {
  data: Response<Movie[]> | undefined;
  isLoading: boolean;
  isError: boolean;
  error: FetchBaseQueryError | SerializedError;
}

const CarouselContent: React.FC<Props> = ({
  data = { results: []},
  error,
  isError,
  isLoading,
}) => {
  const swiperRef = useRef<SwiperRef>(null);

  const nextSlide = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  };

  const prevSlide = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  };

  const content = data?.results.map((item, i) => (
    <SwiperSlide key={item.id} className="!w-[140px]">
      <CarouselItem movie={item} index={i} />
    </SwiperSlide>
  ));

  if (isError) {
    return <ErrorComponent error={error} />;
  }

  return (
    <div className="flex items-center justify-between h-[266px] w-full">
      <button className="carousel__btn rotate-180" onClick={prevSlide}>
        <Image src="/icons/arrow.png" width="15" height="25" alt="arrow" />
      </button>
      {isLoading ? (
        <Spinner isLoading={isLoading} />
      ) : (
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={"auto"}
          loop={true}
          className="max-w-[1200px]"
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {content}
        </Swiper>
      )}
      <button className="carousel__btn" onClick={nextSlide}>
        <Image src="/icons/arrow.png" width="15" height="25" alt="arrow" />
      </button>
    </div>
  );
};

export default CarouselContent;
