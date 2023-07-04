import React from "react";
import SLayout, { STitle } from "../section-layout/SectionLayout";

export default function WhyChooseUs({ children }) {
  return (
    <div className="bg-white relative why-choose-us">
      <SLayout>
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-1/2"></div>
          <div className="w-full lg:w-1/2 px-8 lg:px-8 py-4 bg-white/75 backdrop-blur-sm rounded-xl">
            <div className="flex flex-col gap-4 relative mb-4">
              {/* <STitle>WHY CHOOSE AH Massage?</STitle> */}
              <STitle>Waarom kiezen voor MassageWorks?</STitle>
              <div className="text-gray-500 text-xl font-medium">
                Onze massage technieken zijn aan te passen aan individuele
                behoefte en is dus maatwerk. De verschillen per client in
                huidtypes, spiertonus, hydratatie van weefsels, persoonlijke
                condities en levenstylen Vraagt dat de masseur altijd
                individueel afstemt in druk, olie soorten, behandeltechnieken en
                druk intensiteit. Dit leert men met de tijd en maakt het
                verschil tussen een hobby en pro masseur.
              </div>
              <div className="text-gray-500">
                Door ruime ervaring en goede vragen vooraf, kunnen masseurs van
                MassageWorks aanvoelen en inschatten welke technieken en druk de
                clienten langdurige verbeteringen brengen. De masseurs van
                MassageWorks hebben altijd een opleiding in de energetische
                huishouding van het endocriene systeem. Behandelingen zijn
                daarom kwalitatief vaak onderscheidend door holistische
                benadering van de behandelaar.
              </div>
              <div className="text-gray-500">
                Voor werkgevers word ook gelet op werkhouding van de werknemer,
                buro hoogte, aftelling van stoel, werkplek en beeldscherm. Ook
                zijn er voor bedrijfmassages fiscale voordelen en bieden
                masseurs advies voor ondersteunende ergonomische hulpmiddelen
                waar nodig. Lees vooraf onze algemene voorwaarden.
              </div>
            </div>
          </div>
        </div>
      </SLayout>
    </div>
  );
}
export function Row({ children, className }) {
  return (
    <div
      className={
        "flex flex-wrap lg:flex-nowrap items-start rounded-[2rem] p-3 gap-4 " +
        className
      }
    >
      {children}
    </div>
  );
}
export function Col({ children, order, className }) {
  return (
    <div
      className={
        "w-full lg:w-1/3 max-w-sm mx-auto flex flex-col justify-center " +
        className
      }
    >
      {children}
    </div>
  );
}
export function Box({ children, className }) {
  return (
    <div className={"p-5 flex flex-col gap-3 " + className}>{children}</div>
  );
}
export function Title({ children, className }) {
  return (
    <div className={"font-bold py-2 text-center " + className}>{children}</div>
  );
}
export function Image({ children, className, src }) {
  return (
    <img
      className={"text-xl font-bold " + className}
      src={"images/after-sales-services/" + src}
      alt="services"
    />
  );
}
