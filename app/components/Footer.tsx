import { FaGithub, FaInstagram, FaReddit, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-32 py-8 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center bg-gradient-to-t from-[#23272f]/80 to-transparent border-t border-[#f15a24]/30 shadow-inner px-6">
        <h1 className="text-2xl font-bold text-white drop-shadow">Portfolio</h1>
        <div className="flex gap-7">
            <a href="#beranda" className="hover:text-[#f15a24] transition-colors">Beranda</a>
            <a href="#tentang" className="hover:text-[#f15a24] transition-colors">Tentang</a>
            <a href="#proyek" className="hover:text-[#f15a24] transition-colors">Proyek</a>
        </div>
        <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#f15a24] transition-colors"><FaGithub size={28} /></a>
            <a href="#" className="hover:text-[#f15a24] transition-colors"><FaInstagram size={28} /></a>
            <a href="#" className="hover:text-[#f15a24] transition-colors"><FaReddit size={28} /></a>
            <a href="#" className="hover:text-[#f15a24] transition-colors"><FaYoutube size={28} /></a>
        </div>
    </div>
  )
}

export default Footer