import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import NavActive from "../navbar/NavActive";
import { WhatsAppLink } from "../navbar/Navbar";

export default function Navbar({ children }) {
  const [dropdown, setdropdown] = useState(false);
  function handleDropdown() {
    setdropdown(!dropdown);
  }

  return (
    <nav className="w-full border-gray-200 h-14 block lg:hidden">
      <div className="h-full flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
        <Logo />
        <div className="flex items-center xl:order-2 flex-row-reverse">
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
          <WhatsAppLink />
          {dropdown ? (
            <div className="absolute right-0 top-full bg-white w-full h-screen">
              <ul className="flex flex-col mt-4 font-medium xl:flex-row xl:space-x-8 xl:mt-0">
                <DDLink to="/">Home</DDLink>
                <DDLink to="/about">About</DDLink>
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
                <DDItem to="/stoelmassage">Bedrijfsmassages</DDItem>
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
