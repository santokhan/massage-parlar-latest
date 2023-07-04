import Header from "../components/header/Header";
import MassageRates from "../components/products/massage-rates/MassageRates";
import Footer from "../components/footer/Footer";
import WhyIcon from "../components/why-icon/WhyIcon";
import ContactFrom from "../components/contact/ContactFrom";
import Gallary from "../components/gallary/Gallary";
import React, { useRef } from "react";
import SwiperSlider from "../components/hero-section/SwiperSlider";
import About from "../components/about-company/AboutCompany";
import MassageVertical from "../components/mui/tabs/MassageVertical";
import WhyChooseUs from "../components/why-choose-us/WhyChooseUs";
import WhatWeProvide from "../components/what-we-provide/WhatWeProvide";
import ClientSay from "../components/client-say/ClientSay";
import Gallery from "../components/mui/gallery/Gallery";
import SercviceArea from "../components/service-area/ServiceArea";
import PageLoader from "../components/page-loader/PageLoader";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: {
      main: green[900],
    },
  },
});

export default function MassageChair() {
  const myRef = useRef(null);
  function startScroll() {
    myRef.current.scrollIntoView();
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="text-light-sky relative bg-gray-50">
        <PageLoader></PageLoader>
        <Header></Header>
        <MassageRates myRef={myRef}></MassageRates>
        <SercviceArea></SercviceArea>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}
