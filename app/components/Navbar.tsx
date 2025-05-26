import { useState, useEffect } from "react"
const Navbar = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar py-1 flex items-center justify-center">
      {/* Navbar kanan : Menu */}
      <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0
        sm:opacity-100 bg-white/10 backdrop-blur-md p-5 mb-10 rounded-br-2xl rounded-bl-2xl 
        md:bg-transparent transition-all md:transition-none z-40
        ${active ? "top-0 opacity-100":"-top-10 opacity-0"}`}>
        <li><a href="#beranda" className="sm:text-lg text-base font-medium hover:text-lg">Home</a></li>
        <li><a href="#tentang" className="sm:text-lg text-base font-medium">About</a></li>
        <li><a href="#kontak" className="sm:text-lg text-base font-medium">Awards</a></li>
        <li><a href="#proyek" className="sm:text-lg text-base font-medium">Albums</a></li>
        <li><a href="#kontak" className="sm:text-lg text-base font-medium">Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar