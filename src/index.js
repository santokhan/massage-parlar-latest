import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import BookOnline from "./views/BookOnline";
import YoungLiving from "./views/YoungLiving";
import PageLoader from "./components/page-loader/PageLoader";
import About from "./views/About";
// import TermsAndConditions from "./views/TermsAndConditions";
import MassageShiatsu from "./views/MassageShiatsu";
import MassageSports from "./views/MassageSports";
import MassageChair from "./views/MassageChair";
import Massages from "./views/Massages";
import Contact from "./views/Contact";
import MassageRelaxation from "./views/MassageRelaxation";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/appointments" element={<BookOnline />}></Route>
        <Route path="/living" element={<YoungLiving />}></Route>
        <Route path="/pageloader" element={<PageLoader />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/terms" element={<MassageChair />}></Route>
        <Route path="/massages" element={<Massages />}></Route>
        <Route path="/massages/shiatsu" element={<MassageShiatsu />}></Route>
        <Route path="/massages/sports" element={<MassageSports />}></Route>
        <Route path="/massages/chair" element={<MassageChair />}></Route>
        <Route
          path="/massages/relaxation"
          element={<MassageRelaxation />}
        ></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
