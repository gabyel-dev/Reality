import NavBar from "../../components/Navigation/navbar";
import SideLinks from "../../components/side_links";
import { MdArrowOutward } from "react-icons/md";
import useHideOnScroll from "../../utility/useHideOnScroll";
import { useState } from "react";
import { scrollToSection } from "../../utility/scrollTo";

export default function HomeLayout() {
  const isVisible = useHideOnScroll();
  const [isDesktopOpen, setIsDesktopOpen] = useState(false);

  return (
    <div id="home" className=" w-full h-screen relative  pt-[120px]">
      <section className="hidden md:block"></section>

      <header
        className={`
          fixed  top-0 left-0 w-full z-[999]
          transition-all duration-400 ease-in-out
          ${isDesktopOpen ? "h-screen" : "h-auto"}
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <NavBar isOpenD={isDesktopOpen} setIsOpenD={setIsDesktopOpen} />
      </header>
      <section className="hidden md:block">
        <SideLinks />
      </section>
      <section className="flex flex-col h-screen items-center justify-center z-4 ">
        <section className="flex flex-col gap-30 items-center   md:w-full h-[calc(100%-10rem)] justify-center text-center ">
          <p className="__intro__ text-white uppercase text-3xl md:text-4xl lg:text-6xl w-[90%] md:w-[70%] lg:w-[80%] leading-tight">
            Hello! We are{" "}
            <span className="text-[var(--primary)]">Reality Production.</span>{" "}
            <span className="opacity-50">
              a creative team specializing in video production, editing, and
              photography
            </span>{" "}
            based in Metro Manila.
          </p>

          <section className="__View_Collection_BTN__  cursor-pointer bg-[var(--base)] shadow-[inset_0_4px_4px_rgba(0,0,0,0.5)] pl-5 pr-4 py-3 rounded-lg border-1 border-white/15 w-fit flex text-white items-center gap-3">
            <button
              onClick={() => scrollToSection("collection")}
              className=" font-[oswald] cursor-pointer text-xs md:text-base uppercase "
            >
              View Collection
            </button>
            <MdArrowOutward className="__v_arrow__ text-2xl " />
          </section>
        </section>
      </section>
    </div>
  );
}
