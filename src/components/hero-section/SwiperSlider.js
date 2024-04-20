import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./swiper-slider.css";

import { Pagination, Autoplay, Navigation } from "swiper";
import HeroSection from "./HeroSection";
import HeroSection1 from "./HeroSection1";
import HeroSection2 from "./HeroSection2";
import headerImg from '../../assets/images/ahmassage-header.jpg'

function SwiperSlider({ startScroll }) {
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
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <HeroSection startScroll={startScroll}></HeroSection>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

const HeaderImage = () => {
  return <>
    <img src={headerImg} alt="header" className="w-full min-h-svh object-cover" />
  </>;
};

export default HeaderImage;
