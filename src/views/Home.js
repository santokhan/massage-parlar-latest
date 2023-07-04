import Header from "../components/header/Header";
import MassageRates from "../components/products/massage-rates/MassageRates";
import Footer from "../components/footer/Footer";
import ContactFrom from "../components/contact/ContactFrom";
import Gallary from "../components/gallary/Gallary";
import React, { useRef } from "react";
import SwiperSlider from "../components/hero-section/SwiperSlider";
import About from "../components/about-company/AboutCompany";
import MassageVertical from "../components/mui/tabs/MassageVertical";
import WhyChooseUs from "../components/why-choose-us/WhyChooseUs";
import WhatWeProvide from "../components/what-we-provide/WhatWeProvide";
import ClientSay from "../components/client-say/ClientSay";
import SercviceArea from "../components/service-area/ServiceArea";
import PageLoader from "../components/page-loader/PageLoader";
import Appointments from "../components/mui/apppointment/Appointment";
import Chat from "../components/Chat/Chat";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import SLayout, {
  SHeader,
  SMain,
  STitle,
} from "../components/section-layout/SectionLayout";
const theme = createTheme({
  palette: {
    primary: {
      main: green[900],
    },
  },
});

export default function Home() {
  const myRef = useRef(null);
  function startScroll() {
    myRef.current.scrollIntoView();
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="text-light-sky relative bg-gray-50">
        <PageLoader></PageLoader>
        <Header></Header>
        <SwiperSlider startScroll={startScroll}></SwiperSlider>
        <About></About>
        <MassageVertical></MassageVertical>
        <WhyChooseUs></WhyChooseUs>
        <WhatWeProvide></WhatWeProvide>
        <MassageRates myRef={myRef}></MassageRates>
        {/* <SLayout>
          <div className="bg-white pt-10">
            <SHeader>
              <STitle>BOEK NU EEN AFSPRAAK</STitle>
            </SHeader>
            <SMain>
              <Appointments></Appointments>
            </SMain>
          </div>
        </SLayout> */}
        <ClientSay></ClientSay>
        <Gallary></Gallary>
        <ContactFrom></ContactFrom>
        <SercviceArea></SercviceArea>
        <Footer></Footer>
      </div>
      <Chat></Chat>
    </ThemeProvider>
  );
}
