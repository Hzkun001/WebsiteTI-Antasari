import { useState, useEffect, useRef } from "react"
import Link from "next/link";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/awards", label: "Awards" },
  { href: "/albums", label: "Albums" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const ticking = useRef(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setActive(window.scrollY > 150);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Hamburger animasi
  const HamburgerIcon = ({ open }: { open: boolean }) => (
    <div className="relative w-8 h-8 flex flex-col justify-center items-center cursor-pointer z-50">
      <span className={`absolute h-1 w-8 bg-white rounded transition-all duration-300 ${open ? "rotate-45 top-4" : "top-2"}`}></span>
      <span className={`absolute h-1 w-8 bg-white rounded transition-all duration-300 ${open ? "opacity-0" : "top-4"}`}></span>
      <span className={`absolute h-1 w-8 bg-white rounded transition-all duration-300 ${open ? "-rotate-45 top-4" : "top-6"}`}></span>
    </div>
  );

  return (
    <nav className="navbar py-2 w-full fixed top-0 left-0 z-50 px-2 sm:px-0 flex items-center justify-center pointer-events-none">
      {/* Desktop/Tablet Centered Menu */}
      <ul className={`menu hidden sm:flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0
        bg-white/20 backdrop-blur-lg p-5 mb-10 rounded-br-2xl rounded-bl-2xl border border-white/20
        shadow-xl md:bg-transparent z-40
        transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)]
        ${active
          ? "top-0 opacity-100 translate-y-0 scale-100 blur-0 pointer-events-auto shadow-2xl"
          : "-top-10 opacity-0 -translate-y-8 scale-95 blur-sm pointer-events-none shadow-none"}
      `}>
        <li>
          <Link href="/" className="flex items-center gap-2 font-bold text-white text-lg hover:text-[#f15a24] transition-colors">
            <FaHome className="text-[#f15a24] text-2xl" /> Home
          </Link>
        </li>
        {navLinks.map((link, i) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-semibold text-white hover:text-[#f15a24] transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      {/* Hamburger icon for mobile */}
      <div className="flex sm:hidden items-center justify-between w-full pointer-events-auto">
        <Link href="/" className="flex items-center gap-2 font-bold text-white text-lg">
          <FaHome className="text-[#f15a24] text-2xl" /> Home
        </Link>
        <button
          className="flex items-center justify-center text-white text-2xl focus:outline-none z-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <HamburgerIcon open={open} />
        </button>
      </div>
      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/40 z-40 transition-all duration-300
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      {/* Mobile Drawer */}
      <ul className={`fixed top-0 right-0 h-full w-64 bg-[#181c23] shadow-2xl border-l border-[#f15a24]/30 flex flex-col gap-6 pt-24 px-8 z-50
        transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)]
        ${open ? 'translate-x-0 scale-100 opacity-100' : 'translate-x-full scale-90 opacity-0'} sm:hidden`}
        style={{ transitionProperty: 'transform, opacity, box-shadow, scale' }}
      >
        {navLinks.map((link, i) => (
          <li key={link.href}
            style={{ transitionDelay: open ? `${i * 60 + 100}ms` : '0ms' }}
            className={`transition-all duration-500 ${open ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'} hover:scale-105`}
          >
            <Link
              href={link.href}
              className="font-semibold text-white hover:text-[#f15a24] transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar