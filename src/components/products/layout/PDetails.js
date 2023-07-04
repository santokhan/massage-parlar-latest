import { Link } from "react-router-dom";

export default function PDetails({ to, children }) {
  return <Link to={to}>{children}</Link>;
}
