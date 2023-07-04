import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import NavActive from "../navbar/NavActive";

export default function Navbar({ children }) {
  const [dropdown, setdropdown] = useState(false);
  function handleDropdown() {
    setdropdown(!dropdown);
  }

  return (
    <nav className="w-full border-gray-200 h-14 block lg:hidden">
      <div className="h-full flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
        <Logo />
        <div className="flex items-center xl:order-2">
          <Link
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-900/25 font-medium rounded-lg text-sm px-4 py-2 xl:px-4 xl:py-2.5 focus:outline-none capitalize flex items-center gap-2"
            to="/appointments"
          >
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.625 5H0.375C0.167906 5 0 4.83209 0 4.625V3.5C0 2.67156 0.671562 2 1.5 2H3V0.375C3 0.167906 3.16791 0 3.375 0H4.625C4.83209 0 5 0.167906 5 0.375V2H9V0.375C9 0.167906 9.16791 0 9.375 0H10.625C10.8321 0 11 0.167906 11 0.375V2H12.5C13.3284 2 14 2.67156 14 3.5V4.625C14 4.83209 13.8321 5 13.625 5ZM0.375 6H13.625C13.8321 6 14 6.16791 14 6.375V14.5C14 15.3284 13.3284 16 12.5 16H1.5C0.671562 16 0 15.3284 0 14.5V6.375C0 6.16791 0.167906 6 0.375 6ZM10.7905 8.99834L9.91022 8.11091C9.76438 7.96387 9.52694 7.96291 9.37991 8.10878L6.06625 11.3958L4.62937 9.94728C4.48353 9.80025 4.24606 9.79928 4.09903 9.94516L3.21162 10.8255C3.06459 10.9713 3.06363 11.2087 3.2095 11.3558L5.79078 13.9579C5.93662 14.105 6.17406 14.1059 6.32109 13.9601L10.7884 9.52866C10.9354 9.38281 10.9364 9.14537 10.7905 8.99834Z"
                fill="white"
              ></path>
            </svg>
            <span className="">Book Now</span>
          </Link>
          <button
            onClick={handleDropdown}
            type="button"
            className="inline-flex items-center px-2 py-2 ml-2 text-base text-green-700 rounded-lg xl:hidden hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          {dropdown ? (
            <div className="absolute right-0 top-full bg-white w-full h-screen">
              <ul className="flex flex-col mt-4 font-medium xl:flex-row xl:space-x-8 xl:mt-0">
                <DDLink to="/">Thuis</DDLink>
                <DDLink to="/about">Wat Betreft</DDLink>
                <div className="relative group px-6 py-2">
                  <button
                    className="hover:underline hover:underline-offset-4 hover:decoration-2 text-gray-900 transition-all ease-in flex gap-2 items-center capitalize"
                    type="button"
                  >
                    <span>massages</span>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </button>
                  <div className="z-10 w-44 hidden group-hover:block">
                    <ul className="py-2 text-sm text-gray-700">
                      <DDLink to="/massages/sports">sports</DDLink>
                      <DDLink to="/massages/shiatsu">shiatsu</DDLink>
                      <DDLink to="/massages/chair">stoel</DDLink>
                      {/* <DDLink to="/massages/relaxation">relaxation</DDLink> */}
                      <DDLink to="/massages/relaxation">ontspanning</DDLink>
                    </ul>
                  </div>
                </div>
                {/* <DDLink to="/ahmassage">ah massage</DDLink> */}
                <DDLink to="/contact">contact</DDLink>
                <DDItem to="/living">young living</DDItem>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}

const linkClass =
  "hover:underline hover:underline-offset-4 hover:decoration-2 text-gray-900 transition-all ease-in ";

export function NItem({ children, to }) {
  return (
    <li className="capitalize">
      <Link to={to} className={linkClass + NavActive(to)}>
        {children}
      </Link>
    </li>
  );
}
export function DDItem({ children, to }) {
  return (
    <li className="py-3 px-6 relative font-medium">
      <Link to={to} className={linkClass + NavActive(to)}>
        {children}
      </Link>
    </li>
  );
}

export function NLink({ children, to }) {
  return (
    <li className="capitalize">
      <Link to={to} className={linkClass + NavActive(to)}>
        {children}
      </Link>
    </li>
  );
}

export function DDLink({ children, to }) {
  return (
    <li className="py-3 px-6 relative font-medium capitalize">
      <Link to={to} className={linkClass + NavActive(to)}>
        {children}
      </Link>
    </li>
  );
}
