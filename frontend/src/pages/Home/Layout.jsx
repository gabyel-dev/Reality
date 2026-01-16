import NavBar from "../../components/Navigation/navbar";
import SideLinks from "../../components/side_links";
import { MdArrowOutward } from "react-icons/md";

export default function HomeLayout() {
  return (
    <div className="w-full h-screen relative z-1">
      <div className="fixed  h-screen w-full -z-1 flex">
        <section className="bg-[var(--base)] h-screen w-[50%]  md:w-[33.3%] border-r-1 border-white/15"></section>
        <section className="bg-[var(--base)] md:block  hidden  h-screen md:w-[33.3%] border-r-1 border-white/15"></section>
        <section className="bg-[var(--base)] h-screen w-[50%] md:w-[33.4%] "></section>
      </div>
      <section className="hidden md:block">
        <SideLinks />
      </section>
      <NavBar />
      <section className="flex flex-col h-screen items-center">
        <section className="flex items-center  md:w-full h-[calc(100%-10rem)] justify-center text-center z-1">
          <p className="__intro__ text-white uppercase text-3xl md:text-5xl lg:text-6xl w-[90%] md:w-[74%] leading-tight">
            Hello! We are{" "}
            <span className="text-[var(--primary)]">Reality Production.</span>{" "}
            <span className="opacity-50">
              a creative team specializing in video production, editing, and
              photography
            </span>{" "}
            based in Metro Manila.
          </p>
        </section>
        <section className="__View_Collection_BTN__  bg-[var(--base)] shadow-[inset_0_4px_4px_rgba(0,0,0,0.5)] pl-5 pr-4 py-3 rounded-lg border-1 border-white/15 w-fit flex text-white items-center gap-3">
          <button className=" font-[oswald] text-xs md:text-base uppercase ">
            View Collection
          </button>
          <MdArrowOutward className="__v_arrow__ text-2xl " />
        </section>
      </section>
    </div>
  );
}
