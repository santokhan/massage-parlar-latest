import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import NavActive from "./NavActive";


export const WhatsAppLink = () => {
  return (
    <Link
      className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-900/25 font-medium rounded-lg text-sm px-4 py-2 lg:px-4 lg:py-2.5 focus:outline-none capitalize flex items-center gap-2 order-3"
      to="/appointments"
    >
      {/* <svg
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
    </svg> */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 28L2.00894 20.5369C0.388779 17.6297 -0.12596 14.2372 0.559172 10.9819C1.2443 7.72669 3.08335 4.82707 5.73885 2.81515C8.39434 0.803227 11.6882 -0.186031 15.0159 0.0289026C18.3436 0.243836 21.482 1.64854 23.8552 3.98526C26.2284 6.32197 27.6772 9.43396 27.9357 12.7501C28.1942 16.0663 27.2451 19.3643 25.2626 22.0389C23.2801 24.7134 20.3971 26.5851 17.1427 27.3106C13.8883 28.0361 10.4808 27.5666 7.54537 25.9883L0 28ZM7.9092 23.1956L8.37584 23.4717C10.502 24.7287 12.9853 25.2489 15.4388 24.9511C17.8923 24.6534 20.1781 23.5545 21.9401 21.8257C23.7021 20.0968 24.8412 17.8352 25.18 15.3931C25.5188 12.9511 25.0381 10.4659 23.813 8.32478C22.5879 6.18366 20.6872 4.5069 18.4069 3.55582C16.1267 2.60473 13.5951 2.43273 11.2066 3.06663C8.8181 3.70052 6.70693 5.10471 5.20207 7.06035C3.69721 9.016 2.88319 11.4133 2.88686 13.8785C2.88486 15.9227 3.45162 17.9272 4.52406 19.6691L4.8167 20.1504L3.6936 24.3158L7.9092 23.1956Z"
          fill="#00D95F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.235 15.7949C18.9615 15.5748 18.6412 15.4199 18.2985 15.342C17.9559 15.2641 17.5999 15.2652 17.2577 15.3452C16.7437 15.5582 16.4115 16.3629 16.0793 16.7653C16.0092 16.8617 15.9063 16.9293 15.7898 16.9555C15.6733 16.9816 15.5513 16.9645 15.4465 16.9073C13.5644 16.172 11.9868 14.8236 10.9699 13.0811C10.8832 12.9723 10.8422 12.8343 10.8554 12.6959C10.8687 12.5576 10.9353 12.4298 11.0411 12.3395C11.4116 11.9736 11.6836 11.5205 11.832 11.022C11.865 10.4721 11.7387 9.92443 11.4682 9.44419C11.2591 8.7709 10.8612 8.17138 10.3214 7.71648C10.043 7.59158 9.73429 7.54971 9.43256 7.5959C9.13083 7.6421 8.84894 7.77439 8.6209 7.97682C8.22503 8.3175 7.9108 8.74242 7.70137 9.22029C7.49195 9.69815 7.39265 10.2168 7.4108 10.738C7.41202 11.0307 7.44921 11.3221 7.52153 11.6058C7.70518 12.2873 7.98762 12.9385 8.3599 13.5386C8.6285 13.9983 8.92155 14.4434 9.23782 14.8719C10.2657 16.2793 11.5577 17.4742 13.0421 18.3904C13.7871 18.856 14.5832 19.2345 15.4149 19.5185C16.2788 19.9092 17.2327 20.0591 18.1752 19.9524C18.7122 19.8714 19.221 19.6599 19.6568 19.3366C20.0927 19.0133 20.4421 18.5881 20.6745 18.0985C20.8111 17.8027 20.8525 17.472 20.7932 17.1518C20.6508 16.497 19.7729 16.1105 19.235 15.7949Z"
          fill="#00D95F"
        />
      </svg>
      {/* <span className="">Book Now</span> */}
      <span className="">Contact now</span>
    </Link>
  )
}

export default function Navbar({ children }) {
  return (
    <div className="w-full border-gray-200 h-14 hidden lg:block">
      <div className="h-full flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
        <Logo />
        <WhatsAppLink />
        <div className="items-center justify-between w-full text-base lg:flex lg:w-auto lg:order-1">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <NLink to="/">Home</NLink>
            <NLink to="/about">About</NLink>
            <div className="relative group">
              <button
                className="hover:underline hover:underline-offset-4 hover:decoration-2 text-gray-900 transition-all ease-in flex gap-2 items-center capitalize"
                type="button"
              >
                <span>massages</span>
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </button>
              <div className="z-10 w-44 hidden group-hover:block absolute top-full left-0 bg-transparent">
                <ul className="py-2 text-sm text-gray-700 bg-green-50 mt-5 shadow">
                  <DDLink to="/massages/sports">sports</DDLink>
                  <DDLink to="/massages/shiatsu">shiatsu</DDLink>
                  <DDLink to="/massages/chair">stoel</DDLink>
                  {/* <DDLink to="/massages/relaxation">relaxation</DDLink> */}
                  <DDLink to="/massages/relaxation">ontspanning</DDLink>
                </ul>
              </div>
            </div>
            {/* <NLink to="/ahmassage">ah massage</NLink> */}
            <NLink to="/contact">contact</NLink>
            <NItem to="/living">Bedrijfsmassages</NItem>
          </ul>
        </div>
      </div>
    </div>
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
