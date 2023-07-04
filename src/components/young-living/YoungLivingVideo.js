import React from "react";
import SLayout, { SDes, STitle } from "../section-layout/SectionLayout";

export default function YoungLivingVideo({ children }) {
  return (
    <div id="" className="relative">
      <SLayout>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full xl:w-1/2 flex justify-center order-2">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_LtZz__6pvo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-2xl"
            ></iframe>
          </div>
          <div className="w-full xl:w-1/2 px-3 py-4 backdrop-blur-sm rounded-xl">
            <div className="flex flex-col gap-4 relative mb-4">
              {/* <STitle>Young Living Information Evening</STitle> */}
              <STitle>Informatieavond Young Living</STitle>
              <SDes className="">
                Vanaf januari 2016 elke zaterdagavond informatieavonden absolute{" "}
                <span className="font-semibold">
                  Young Living Essential Oil!
                </span>
              </SDes>
              <div>
                <SDes>Van 19:00 tot 22:00 uur</SDes>
                {/* <SDes>In practice in Vlaardingen</SDes> */}
                <SDes>In de praktijk in Vlaardingen</SDes>
              </div>
              {/* <SDes>"What an enrichment this is for our family!"</SDes> */}
              <SDes>"Wat een verrijking is dit voor ons gezin!"</SDes>
              <SDes>
                Kom jij ook? Aanmelden kan via het{" "}
                <a href="#contact" className="text-green-800 hover:underline">
                  {/* contact form */}contactformulier
                </a>
                .
              </SDes>
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
