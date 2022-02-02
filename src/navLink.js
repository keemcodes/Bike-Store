import { Link } from "react-router-dom";
import "./styles.css";

export function NavLink({ text, linkTo }) {
  return (
    <li>
      <Link to={linkTo}>{text}</Link>
    </li>
  );
}
