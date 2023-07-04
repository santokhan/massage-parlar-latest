import { Link } from "react-router-dom";

export default function BookNow({ to = "/", className = "" }) {
  return (
    <div className={"px-5 pb-5 flex justify-start " + className}>
      <Link
        to={to}
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-900/25 font-medium rounded-lg text-sm px-4 py-2 xl:px-4 xl:py-2.5 focus:outline-none capitalize flex items-center gap-2"
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
          />
        </svg>
        {/* Book Now< */}
        <span className="">Boek nu</span>
      </Link>
    </div>
  );
}
