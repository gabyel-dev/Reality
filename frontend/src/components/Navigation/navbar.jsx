import { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useWindowSize } from "react-use";

export default function NavBar() {
  const [isActive, setIsActive] = useState("Home");
  const { width } = useWindowSize();

  return (
    <div className="__navbar__ relative z-4 w-full bg-[var(--base)] flex items-center justify-between border-b-1 border-white/15">
      <section className="__nav_logo__ md:w-30 md:h-30  w-26 h-26 bg-white cursor-pointer">
        <img src="/reality_prod_white.png" alt="" />
      </section>
      <section className="__nav_menu__">
        <ul className="__nav_items__ md:flex md:block hidden md:gap-14  lg:gap-20 text-white">
          <li
            className={`cursor-pointer ${isActive === "Home" ? "active" : ""}`}
            onClick={() => setIsActive("Home")}
          >
            Home
          </li>
          <li
            className={`cursor-pointer ${
              isActive === "Collections" ? "active" : ""
            }`}
            onClick={() => setIsActive("Collections")}
          >
            Collections
          </li>
          <li
            className={`cursor-pointer ${isActive === "Gear" ? "active" : ""}`}
            onClick={() => setIsActive("Gear")}
          >
            Gear
          </li>
          <li
            className={`cursor-pointer ${isActive === "About" ? "active" : ""}`}
            onClick={() => setIsActive("About")}
          >
            About
          </li>
        </ul>
      </section>
      <section className="__nav_menu md:w-30 md:h-30 w-26 h-26 bg-white flex items-center justify-center cursor-pointer">
        {width > 768 ? (
          <CgMenuGridR className="text-3xl text-[var(--primary)]" />
        ) : (
          <GiHamburgerMenu className="text-3xl text-[var(--primary)]" />
        )}
      </section>
    </div>
  );
}
