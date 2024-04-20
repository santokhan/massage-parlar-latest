import React from "react";
import SLayout, { STitle } from "../section-layout/SectionLayout";

export default function SercviceArea({ children }) {
  return (
    <div id="servicearea" className="bg-green-50 relative">
      <SLayout>
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center">
          <div className="w-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d92845.42675261447!2d5.270353828423261!3d52.301605495357464!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1713639077512!5m2!1sen!2sbd"
              className="h-[360px] aspect-square rounded-full hover:rounded-xl border-2 border-green-500 transition-all ease-in duration-300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
              id="gmap"
            ></iframe>
          </div>
          <div className="w-full px-8 lg:px-8 py-4 rounded-xl">
            <div className="flex flex-col gap-4 relative mb-4">
              {/* <STitle>Our service area</STitle> */}
              <STitle>ONS SERVICEGEBIED</STitle>
              <div className="text-gray-500 text-xl font-medium">
                Heb je ooit een massage gehad waardoor je lichaam ontspannen en
                verjongd aanvoelt? Een die je het gevoel geeft alsof je in de
                lucht zweeft? Dat is precies wat wij bieden bij onze service.
              </div>
              <div className="text-gray-500 text-xl font-medium">
                Wij zijn gespecialiseerd in het bieden van de beste massage die
                beschikbaar is, binnen{" "}
                <span className="font-bold whitespace-nowrap">
                  25 kilometer
                </span>{" "}
                van onze locatie. Ons team bestaat uit gediplomeerde therapeuten
                met jarenlange ervaring in massagetherapie en biedt een scala
                aan behandelingen die aansluiten bij uw individuele behoeften.{" "}
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
