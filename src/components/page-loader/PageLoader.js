import { useState, useEffect } from "react";
import logo from "../header/logo/logo.png";

export default function PageLoader() {
  const [load, setload] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[rgb(185,214,138)] from-[#012701] to-[#e3f1d8] fixed left-0 top-0 slide-up z-[2100]">
      <img
        src={logo}
        alt="loader logo"
        className="w-40 xl:w-60 object-contain"
      />
      <div className="playfair text-green-800 text-5xl mt-4">AH Massage</div>
      <div className="loader"></div>
    </div>
  );
}
