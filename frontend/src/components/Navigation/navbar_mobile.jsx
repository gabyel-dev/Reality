export default function NavbarMobile({ isOpen }) {
  return (
    <nav
      className={`
        absolute top-full left-0 w-full 
        border-y-1 border-white/15
        bg-[var(--secondary)]
        overflow-hidden
        transition-all duration-300 ease-in-out
        ${
          isOpen
            ? "max-h-96 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-0"
        }
      `}
    >
      <section className="p-6 flex flex-col gap-4 text-xs font-[oswald] text-white">
        <span>Home</span>
        <span>Collections</span>
        <span>Gear</span>
        <span>About</span>
      </section>
    </nav>
  );
}
