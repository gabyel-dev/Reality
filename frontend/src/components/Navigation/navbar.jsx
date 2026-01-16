import { useEffect, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { useWindowSize } from "react-use";
import NavbarMobile from "./navbar_mobile";
import NavbarDesktop from "./navbar_desktop";

export default function NavBar() {
  const [isActive, setIsActive] = useState("Home");
  const [isOpenM, setIsOpenM] = useState(false);
  const [isOpenD, setIsOpenD] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width >= 768) {
      setIsOpenM(false);
    }
  }, [width]);
  useEffect(() => {
    if (width <= 768) {
      setIsOpenD(false);
    }
  }, [width]);

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
          <section
            onClick={() => setIsOpenD((prev) => !prev)}
            className="cursor-pointer"
          >
            <div
              className={`relative w-6 h-6 transition-transform duration-100 ease-in-out ${
                isOpenD ? "rotate-180" : "rotate-0"
              }`}
            >
              <CgMenuGridR
                className={`
        absolute inset-0/5 text-2xl text-[var(--primary)]
        transition-opacity duration-100
        ${isOpenD ? "opacity-100" : "opacity-100"}
      `}
              />
            </div>
          </section>
        ) : (
          <section
            onClick={() => setIsOpenM((prev) => !prev)}
            className="cursor-pointer"
          >
            <div
              className={`relative w-6 h-6 transition-transform duration-100 ease-in-out ${
                isOpenM ? "rotate-180" : "rotate-0"
              }`}
            >
              <GiHamburgerMenu
                className={`
        absolute inset-0/5 text-2xl text-[var(--primary)]
        transition-opacity duration-100
        ${isOpenM ? "opacity-0" : "opacity-100"}
      `}
              />

              {/* Close */}
              <MdOutlineClose
                className={`
        absolute -inset-1 text-3xl text-[var(--primary)]
        transition-opacity duration-100
        ${isOpenM ? "opacity-100" : "opacity-0"}
      `}
              />
            </div>
          </section>
        )}
      </section>

      {width < 768 && <NavbarMobile isOpen={isOpenM} />}
      {width > 768 && (
        <NavbarDesktop isOpen={isOpenD} setIsOpenD={setIsOpenD} />
      )}
    </div>
  );
}
