import { useLocation } from "react-router-dom";

export default function NavActive(to) {
  const { pathname, hash } = useLocation();

  const fullPath = pathname + hash;
  // console.log(fullPath, to);

  if (fullPath === to) {
    return "nav-active";
  }
}
