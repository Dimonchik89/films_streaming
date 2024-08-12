"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { fetchLocalData } from "../../../service/api";
import { ResponseData } from "../../../types/response";
import { Movie } from "../../../types/movie";
import { CarouselItem } from "..";
import { ErrorComponent, Spinner } from "../..";

import "swiper/css";

interface Props {
  currentCategory: string;
}

const CarouselContent: React.FC<Props> = ({ currentCategory }) => {
  const swiperRef = useRef<SwiperRef>(null);
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["swiper", currentCategory],
    queryFn: () =>
      fetchLocalData<ResponseData<Movie[]>>(
        `${process.env.NEXT_PUBLIC_LOCAL_URL}api/trending/${currentCategory}?time=day`
      ),
  });

  const nextSlide = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  };

  const prevSlide = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  };

  const content = data?.results.map((item) => (
    <SwiperSlide key={item.id} className="!w-[140px]">
      <CarouselItem movie={item} />
    </SwiperSlide>
  ));

  if (isError) {
    return <ErrorComponent error={error} />;
  }

  return (
    <div className="flex items-center justify-between min-h-[296px] w-full">
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
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={
            {
              // when window width is >= 480px
              // 480: {
              //   slidesPerView: 3,
              //   // spaceBetween: 10,
              //   slideToClickedSlide: true,
              // },
              // // when window width is >= 640px
              // 640: {
              //   slidesPerView: 4,
              //   // spaceBetween: 10,
              //   slideToClickedSlide: true,
              // },
              // 1024: {
              //   slidesPerView: 6,
              // },
              // 1140: {
              //   slidesPerView: 7,
              // },
              // 1320: {
              //   slidesPerView: 8,
              //   // spaceBetween: 10,
              //   slideToClickedSlide: true,
              // },
            }
          }
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
