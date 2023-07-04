import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swiper-slider.css";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";
import HeroSection from "./HeroSection";
import HeroSection1 from "./HeroSection1";
import HeroSection2 from "./HeroSection2";

export default function SwiperSlider({ startScroll }) {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <HeroSection startScroll={startScroll}></HeroSection>
        </SwiperSlide>
        <SwiperSlide>
          <HeroSection1 startScroll={startScroll}></HeroSection1>
        </SwiperSlide>
        <SwiperSlide>
          <HeroSection2 startScroll={startScroll}></HeroSection2>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
