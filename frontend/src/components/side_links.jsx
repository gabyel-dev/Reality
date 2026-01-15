import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

export default function SideLinks() {
  return (
    <div className="__side_links__ z-3 absolute w-full h-[120%] flex items-center justify-between text-white overflow-hidden">
      {/* Left side: Branding */}
      <section className="rotate-270 h-fit origin-left uppercase flex items-center translate-x-14 font-[oswald]">
        <p>Reality Production</p>
      </section>

      {/* Right side: Social Links */}
      <section className="__social_links__ flex flex-col gap-25 justify-center translate-x-8">
        {/* Facebook */}
        <span className="rotate-270 flex items-center gap-0 font-[oswald] origin-left cursor-pointer group">
          <AiFillFacebook className="mr-2 text-white" />
          {"FACEBOOK".split("").map((letter, i) => (
            <span
              key={i}
              style={{ transitionDelay: `${i * 20}ms` }}
              className="transition-colors duration-400 text-white/50  group-hover:text-white"
            >
              {letter}
            </span>
          ))}
        </span>

        {/* Instagram per-letter animation */}
        <span className="rotate-270 flex items-center gap-0 font-[oswald] origin-left cursor-pointer group">
          <AiFillInstagram className="mr-2 text-white" />
          {"INSTAGRAM".split("").map((letter, i) => (
            <span
              key={i}
              style={{ transitionDelay: `${i * 20}ms` }}
              className="transition-colors duration-200 text-white/50 group-hover:text-white"
            >
              {letter}
            </span>
          ))}
        </span>
      </section>
    </div>
  );
}
