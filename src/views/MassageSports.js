import Header from "../components/header/Header";
import MassageRatesIndivudual from "../components/products/massage-rates/MassageRatesIndivudual";
import Footer from "../components/footer/Footer";
import React, { useRef } from "react";
import SercviceArea from "../components/service-area/ServiceArea";
import PageLoader from "../components/page-loader/PageLoader";
import PVSports from "../components/product-viewer/PVSports";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: {
      main: green[900],
    },
  },
});

export default function MassageSports() {
  const myRef = useRef(null);
  // function startScroll() {
  //   myRef.current.scrollIntoView();
  // }

  return (
    <ThemeProvider theme={theme}>
      <div className="text-light-sky relative bg-gray-50">
        <PageLoader></PageLoader>
        <Header></Header>
        <PVSports></PVSports>
        <MassageRatesIndivudual
          myRef={myRef}
          index={["chair", "shiatsu", "relaxation"]}
        ></MassageRatesIndivudual>
        <SercviceArea></SercviceArea>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}
