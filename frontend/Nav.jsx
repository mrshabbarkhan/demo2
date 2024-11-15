import { Link } from "react-router-dom";
import logo from "/logooo.png";

export const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-5 lg:px-14 bg-white border-b shadow-md">
      <Link to={"/"}>
        <img className="w-20 scale-150" src={logo} alt="logo" />
      </Link>
      <ul className="sm:flex gap-8 text-xl hidden">
        <li>Home</li>
        <li>About us</li>
        <li>Join us</li>
        <li>Help</li>
      </ul>
    </nav>
  );
};
