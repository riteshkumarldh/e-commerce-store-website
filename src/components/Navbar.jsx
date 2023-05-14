// react-icon
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

// menu data
import { menu } from "../assets/data/menuData";

export default function Navbar({ mobileMenu, setMobileMenu }) {
  return (
    <nav
      className={`fixed z-50 top-0 ${
        mobileMenu ? "right-0" : "right-[-384px]"
      } transition-all duration-300 max-w-sm w-full h-screen bg-slate-100 unset`}
    >
      <IoCloseSharp
        size={28}
        className="absolute top-12 right-12 cursor-pointer md:hidden"
        onClick={() => setMobileMenu((prev) => !prev)}
      />
      <ul className="h-screen flex flex-col items-center justify-center gap-5 unset md:flex md:gap-8 md:list-none">
        {menu.map((menu) => {
          return (
            <li key={menu.id}>
              <Link
                to={menu.path}
                className="hover:underline transition-all font-semibold uppercase md:font-normal"
                onClick={() => setMobileMenu((prev) => !prev)}
              >
                {menu.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
