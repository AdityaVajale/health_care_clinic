import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "/#home"],
    ["Services", "/#services"],
    ["About", "/#about"],
    ["Doctor", "/#doctor"],
    ["Reviews", "/#reviews"],
    ["Gallery", "/gallery"],
    ["Contact", "/#contact"],
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[#dce8e2]/80 bg-[#f7f8f4]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <a href="/#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#14544f] text-xl font-bold text-white">
            +
          </div>

          <div>
            <h1 className="text-base font-bold tracking-tight text-[#163c3a]">
              HealthCare
            </h1>

            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#71837e]">
              Clinic & Hospital
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              className="text-sm font-medium text-[#49625d] transition hover:text-[#14544f]"
            >
              {name}
            </a>
          ))}
        </nav>

        {/* Desktop Appointment Button */}
        <div className="hidden md:block">
          <a
            href="/#appointment"
            className="rounded-full bg-[#14544f] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#14544f]/15 transition hover:-translate-y-0.5 hover:bg-[#0e403c]"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e5f0eb] text-[#14544f] transition hover:bg-[#d8eae4] md:hidden"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-[#dce8e2] bg-white px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-[#49625d] transition hover:text-[#14544f]"
              >
                {name}
              </a>
            ))}

            <a
              href="/#appointment"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[#14544f] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#0e403c]"
            >
              Book Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}