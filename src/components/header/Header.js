import { useLayoutEffect, useState, useEffect } from "react";
import Logo from "./logo/Logo";
import Navbar from "./navbar/Navbar";
import Social from "../social/Social";
import MobileMenu from "./navbar-mobile/Mobile";

export default function Header({ children }) {
  const [scrollY, setscrollY] = useState(0);
  const [H, setH] = useState(600);

  function handleH() {
    // const h = window.innerHeight;
    // setH(h);
    // console.log({ H });
  }
  function handleScroll() {
    const position = window.scrollY;
    setscrollY(position);
    // console.log(scrollY);
  }

  useEffect(() => {
    window.addEventListener("load", handleH, { passive: true });

    return () => {
      window.addEventListener("load", handleH);
    };
  }, [H]);

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div id="home">
      <header
        className={
          scrollY > H
            ? "w-full h-14 lg:h-16 flex justify-between items-center px-4 shadow z-[100] b-white/75 bg-green-50/75 backdrop-blur-sm fixed drop-navbar"
            : "w-full h-16 lg:h-24 flex justify-between items-center px-4 shadow z-[100] b-white/75 bg-green-50/75 backdrop-blur-sm absolute top-0"
        }
      >
        <Navbar></Navbar>
        <MobileMenu></MobileMenu>
      </header>
    </div>
  );
}
