"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import required modules
import { Pagination, Navigation, Keyboard, Scrollbar } from "swiper/modules";

// Import Swiper core and required modules
import SwiperCore from "swiper/core";

// Initialize Swiper core modules
SwiperCore.use([Pagination, Navigation, Keyboard, Scrollbar]);

export default function SwiperCarousel() {
  const breakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroupSkip: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroupSkip: 1,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesPerGroupSkip: 1,
    },
  };
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        breakpoints={breakpoints}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-red-300 w-[300px] h-[280px]">1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-300 w-[300px] h-[280px]">2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-yellow-300 w-[300px] h-[280px]">3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-purple-300 w-[300px] h-[280px]">4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-300 w-[300px] h-[280px]">5</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-yellow-300 w-[300px] h-[280px]">3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-purple-300 w-[300px] h-[280px]">4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-300 w-[300px] h-[280px]">5</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-yellow-300 w-[300px] h-[280px]">3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-purple-300 w-[300px] h-[280px]">4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-300 w-[300px] h-[280px]">5</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
