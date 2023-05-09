import { useState } from "react";

// react-icons
import { RiShoppingCartFill } from "react-icons/ri";
import { RiMenu3Fill } from "react-icons/ri";

// components
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header className="shadow-md">
      <div className="container mx-auto px-4 py-10 flex justify-between items-center md:px-8">
        <Logo />
        <div className="flex items-center gap-8 md:gap-10">
          <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
          <RiShoppingCartFill size={28} className="cursor-pointer" />
          <RiMenu3Fill
            size={28}
            className="cursor-pointer md:hidden"
            onClick={() => setMobileMenu((prev) => !prev)}
          />
        </div>
      </div>
    </header>
  );
}
