import { Link } from "react-router-dom";
import logo from "./logo.png";

export default function Logo() {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="logo"
        className="h-16 lg:h-20 object-contain mx-auto xl:mx-0"
      />
    </Link>
  );
}
