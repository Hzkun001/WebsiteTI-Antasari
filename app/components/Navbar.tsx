import { useState, useEffect, useRef } from "react"
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState(false);
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

  return (
    <div className="navbar py-2 flex items-center justify-center w-full fixed top-0 left-0 z-50">
      <ul className={`menu flex items-center sm:gap-10 gap-4 md:static left-1/2 -translate-x-1/2 md:-translate-x-0
        bg-white/20 backdrop-blur-lg px-8 py-3 rounded-2xl border border-white/20 shadow-xl
        transition-all duration-300 z-40
        ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
        <li>
          <Link href="/" className="flex items-center gap-2 font-semibold text-white hover:text-[#f15a24] transition-colors">
            <FaHome className="text-[#f15a24] text-xl" />Home
          </Link>
        </li>
        <li><Link href="/about" className="font-semibold text-white hover:text-[#f15a24] transition-colors">About</Link></li>
        <li><Link href="/awards" className="font-semibold text-white hover:text-[#f15a24] transition-colors">Awards</Link></li>
        <li><Link href="/albums" className="font-semibold text-white hover:text-[#f15a24] transition-colors">Albums</Link></li>
        <li><Link href="/contact" className="font-semibold text-white hover:text-[#f15a24] transition-colors">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar