import SideLinks from "../components/side_links";
import HomeLayout from "./Home/Layout";
import { scrollToSection } from "../utility/scrollTo";

export default function MainLayout() {
  return (
    <div className="relative h-screen w-full ">
      <div className="fixed h-screen w-full -z-3 flex ">
        <section className="bg-[var(--base)] h-screen w-[50%]  md:w-[30%] border-r-1 border-white/15"></section>
        <section className="bg-[var(--base)] h-screen w-[80%] md:w-[20%] border-r-1 border-white/15"></section>
        <section className="bg-[var(--base)] md:block  hidden  h-screen md:w-[20%] border-r-1 border-white/15"></section>
        <section className="bg-[var(--base)] h-screen w-[50%] md:w-[30%] "></section>
      </div>

      <HomeLayout />
    </div>
  );
}
