import React, { useState } from "react";
import PLayout from "../layout/PLayout";
import PHeader, { PTitle } from "../layout/PHeader";
import PMain from "../layout/PMain";
import PCard, { CImg, CTitle, CDes, Price } from "../layout/PCard";
import { AgriculturalContext } from "../../../context/tabs/AgriculturalContext";
import BookNow from "../layout/BookNow";
import PDetails from "../layout/PDetails";

export default function MassageRatesIndivudual({
  myRef,
  index = ["sports", "shiatsu", "chair"],
}) {
  const [tab, settab] = useState(1);
  function handleTab(id) {
    settab(id);
  }

  return (
    <AgriculturalContext.Provider value={{ tab, handleTab }}>
      <div id="agricultural">
        <PLayout myRef={myRef}>
          <PHeader>
            {/* <PTitle>RELATED MASSAGES</PTitle> */}
            <PTitle>GERELATEERDE MASSAGES</PTitle>
          </PHeader>
          <PMain>
            {index.includes("sports") ? (
              <PCard category={4} id="/sports">
                <PDetails to="/massages/sports">
                  <CImg src="/images/massages/card/sport.jpg" />
                  <CTitle>Sportmassage</CTitle>
                  <CDes>Travel 25 km 10,-</CDes>
                </PDetails>
                <Price price={65} time={60}>
                  <BookNow to="/appointments"></BookNow>
                </Price>
              </PCard>
            ) : (
              ""
            )}
            {index.includes("shiatsu") ? (
              <PCard category={4} id="shiatsu">
                <PDetails to="/massages/shiatsu">
                  <CImg src="/images/massages/card/shiatsu.jpg" />
                  <CTitle>Shiatsumassage</CTitle>
                  <CDes>Travel 25 km 10,-</CDes>
                </PDetails>
                <Price price={65} time={60}>
                  <BookNow to="/appointments"></BookNow>
                </Price>
              </PCard>
            ) : (
              ""
            )}
            {index.includes("relaxation") ? (
              <PCard category={2}>
                <PDetails to="/massages/relaxation">
                  <CImg src="/images/massages/card/relax.jpg" />
                  {/* <CTitle>relaxation</CTitle> */}
                  <CTitle>Ontspanningsmassage</CTitle>
                  <CDes>Travel 25 km 10,-</CDes>
                </PDetails>
                <Price price={65} time={60}>
                  <BookNow to="/appointments"></BookNow>
                </Price>
              </PCard>
            ) : (
              ""
            )}
            {index.includes("chair") ? (
              <PCard category={2} id="chair">
                <PDetails to="/massages/chair">
                  <CImg src="/images/massages/card/chair.png" />
                  {/* <CTitle>chair</CTitle> */}
                  <CTitle>Stoelmassage</CTitle>
                  <CDes>Travel 25 km 10,-</CDes>
                </PDetails>
                <Price price={65} time={60}>
                  <BookNow to="/appointments"></BookNow>
                </Price>
              </PCard>
            ) : (
              ""
            )}
          </PMain>
        </PLayout>
      </div>
    </AgriculturalContext.Provider>
  );
}
