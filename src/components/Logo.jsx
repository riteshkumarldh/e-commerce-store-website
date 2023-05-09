import { Link } from "react-router-dom";

// img
import logo from "../assets/img/logo.png";

export default function Logo() {
  return (
    <Link to={"/"}>
      <figure>
        <img src={logo} alt="logo" width={100} height={80} />
      </figure>
    </Link>
  );
}
