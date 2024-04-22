import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./swiper-slider.css";

import { Pagination, Autoplay, Navigation } from "swiper";
import HeroSection from "./HeroSection";
import HeroSection1 from "./HeroSection1";
import HeroSection2 from "./HeroSection2";
import SliderProvider, { SliderContext } from '../../context/sliderContext.js'

function SwiperSliderStatic() {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      loop={true}
      navigation={true}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <HeroSection />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSection1 />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSection2 />
      </SwiperSlide>
    </Swiper>
  )
}

export default SwiperSliderStatic;
