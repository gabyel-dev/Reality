import { MdOutlineClose } from "react-icons/md";

export default function NavbarDesktop({ isOpen, setIsOpenD }) {
  return (
    <div
      className={`
        fixed inset-0 z-50
        flex items-end justify-end
        transition-all duration-300 ease-in-out
        backdrop-blur-md
        ${
          isOpen
            ? "bg-black/30 opacity-100"
            : "bg-black/0 opacity-0 pointer-events-none"
        }
      `}
      onClick={() => setIsOpenD(false)}
    >
      {/* Panel */}
      <nav
        onClick={(e) => e.stopPropagation()}
        className={`
          relative h-screen
          w-[420px]
          border-l border-white/15
          bg-[var(--secondary)]
          overflow-hidden
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <MdOutlineClose
          className="text-white absolute right-11 top-10 text-4xl cursor-pointer"
          onClick={() => setIsOpenD(false)}
        />

        <section className="p-17 flex flex-col gap-4 text-white">
          <h1 className="text-3xl font-[oswald]">QUICK LINKS:</h1>
        </section>
      </nav>
    </div>
  );
}
