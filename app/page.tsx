"use client";

import Image from "next/image";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Squares from "./components/Squares/Squares";
import CircularText from "./components/CircularText/CircularText";
import Navbar from "./components/Navbar";
import LogoWall from "./components/LogoWall";
import ClickSpark from "./components/ClickSpark/ClickSpark";
import { useRef } from 'react';
import VariableProximity from './components/VariableProximity/VariableProximity';
import dynamic from "next/dynamic";
import Section from "./components/Section";
import Card from "./components/Card";
import Button from "./components/Button";

const Silk = dynamic(() => import("./components/Silk/Silk"), { ssr: false });

export default function Home() {
  const containerRef = useRef(null);

  return (
    <div className="relative min-h-screen overflow-x-hidden flex flex-col items-center justify-start">
      <Navbar />
      <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-none">
        <Silk speed={5} scale={1} color="#000000" noiseIntensity={1.5} rotation={0} />
      </div>

      {/* HERO SECTION */}
      <div className="w-full flex flex-col items-center justify-center z-10 pt-24 pb-10 sm:pb-16 px-2 sm:px-4">
        <ClickSpark sparkColor='#fff' sparkSize={11} sparkRadius={20} sparkCount={8} duration={400}>
          <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto text-center gap-6 sm:gap-8">
            <AnimatedContent distance={180} direction="vertical" reverse={false} config={{ tension: 30, friction: 15 }} initialOpacity={0.0} animateOpacity scale={1.0} threshold={0.4}>
              <div className="relative flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 mb-8 sm:mb-10 md:mb-20 mr-1">
                <Image src="/images/logo/kabinet.png" alt="Logo Himpunan" width={120} height={120} className="mr-3 mt-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />
                <CircularText text="*KABINET*ARNANTA" onHover="speedUp" spinDuration={16} className="mx-auto text-[#ffffff] " />
              </div>
            </AnimatedContent>
            <AnimatedContent distance={120} direction="vertical" reverse={false} config={{ tension: 90, friction: 18 }} initialOpacity={0.2} animateOpacity scale={1.1} threshold={0.2}>
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white font-bold mt-8 sm:mt-15">Himpunan Mahasiswa <br className="block sm:hidden" /> Teknologi Informasi</h1>
                <RotatingText texts={['- Religius -', '- Sains - ', '- Teknologi -']} mainClassName="px-1 sm:px-2 md:px-3 bg-[#f15a24] text-white overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-lg sm:text-xl md:text-2xl font-bold inline-flex transition-all" staggerFrom={"last"} initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-120%" }} staggerDuration={0.025} splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1" transition={{ type: "spring", damping: 30, stiffness: 400 }} rotationInterval={2000} />
              </div>
            </AnimatedContent>
            <div className="flex flex-col items-center gap-1 sm:gap-2">
              <SplitText text="Bersama membangun Kolaborasi dari HMTI" className="text-base sm:text-xl md:text-2xl font-semibold text-center text-white mt-8 sm:mt-15" delay={50} animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }} animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }} threshold={0.2} rootMargin="-50px" />
            </div>
            <div className="flex items-center justify-center mt-6 sm:mt-10 text-white w-full overflow-x-auto">
              <LogoWall />
            </div>
          </div>
        </ClickSpark>
      </div>

      {/* SECTION BAWAH */}
      <div className="w-full flex flex-col items-center justify-center z-20 px-2 sm:px-4">
        <div id="about" className="w-full">
          <Section title="Tentang Himpunan Mahasiswa TI">
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto mt-4">
              Himpunan Mahasiswa Teknologi Informasi (HMTI) UIN Antasari adalah organisasi mahasiswa yang berfokus pada pengembangan keilmuan, kolaborasi, dan inovasi di bidang teknologi informasi. Kami berkomitmen membangun komunitas yang religius, sains, dan teknologi.
            </p>
            <div className="mt-8 sm:mt-10">
              <Section title="Visi & Misi">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6">
                  <div className="rounded-2xl bg-gradient-to-br from-[#181c23] via-[#23272f] to-[#f15a24]/30 shadow-xl border border-[#f15a24]/30 p-6 sm:p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                    <span className="absolute top-4 right-4 bg-[#f15a24] text-white text-xs font-bold px-3 py-1 rounded-full shadow">Visi</span>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#f15a24]">Visi</h3>
                    <p className="text-gray-100">Menjadi himpunan mahasiswa yang unggul, religius, dan inovatif dalam pengembangan teknologi informasi di tingkat nasional.</p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-[#181c23] via-[#23272f] to-[#f15a24]/30 shadow-xl border border-[#f15a24]/30 p-6 sm:p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                    <span className="absolute top-4 right-4 bg-[#f15a24] text-white text-xs font-bold px-3 py-1 rounded-full shadow">Misi</span>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#f15a24]">Misi</h3>
                    <ul className="list-disc ml-6 text-gray-100 space-y-2">
                      <li>Mengembangkan potensi dan kreativitas mahasiswa TI.</li>
                      <li>Meningkatkan kolaborasi dan jejaring dengan dunia industri dan akademik.</li>
                      <li>Mendorong inovasi dan riset di bidang teknologi informasi.</li>
                      <li>Mewujudkan lingkungan belajar yang religius dan inklusif.</li>
                    </ul>
                  </div>
                </div>
              </Section>
            </div>
          </Section>
        </div>

        <div id="awards">
          <Section title="Awards & Prestasi">
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <Card title="Juara 1 Lomba Coding" desc="Tingkat Nasional, 2024" />
              <Card title="Best Innovation" desc="Hackathon 2023" />
              <Card title="Finalis Data Science" desc="Kompetisi Kampus Merdeka 2023" />
            </div>
          </Section>
        </div>

        <div id="albums">
          <Section title="Albums & Dokumentasi">
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <Card title="Kegiatan Seminar" desc="Dokumentasi seminar dan workshop." />
              <Card title="Kunjungan Industri" desc="Kunjungan ke perusahaan IT." />
              <Card title="Kebersamaan" desc="Momen kebersamaan anggota HMTI." />
            </div>
          </Section>
        </div>

        <div id="contact">
          <Section title="Kontak Himpunan">
            <form className="max-w-xl mx-auto flex flex-col gap-4 mt-6">
              <input type="text" placeholder="Nama" className="p-3 rounded bg-gray-800 text-white" required />
              <input type="email" placeholder="Email" className="p-3 rounded bg-gray-800 text-white" required />
              <textarea placeholder="Pesan" className="p-3 rounded bg-gray-800 text-white" rows={4} required />
              <Button type="submit">Kirim Pesan</Button>
            </form>
          </Section>
        </div>

        <Section title="Kenapa Memilih TI UIN Antasari?">
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <Card title="Kurikulum Up-to-date" desc="Materi selalu mengikuti perkembangan teknologi terbaru." />
            <Card title="Dosen Berpengalaman" desc="Pengajar profesional dan praktisi industri." />
            <Card title="Komunitas Aktif" desc="Banyak kegiatan, lomba, dan pelatihan untuk pengembangan diri." />
          </div>
        </Section>

        <Section title="Dosen Pengajar">
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="bg-gradient-to-br from-[#23272f] to-[#f15a24]/60 rounded-2xl p-8 shadow-xl border border-[#f15a24]/30 hover:scale-105 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute -top-6 -left-6 text-[#f15a24] opacity-20 text-[7rem] font-black select-none pointer-events-none">“</div>
              <p className="text-gray-100 italic z-10 relative">“Mahasiswa TI UIN Antasari sangat antusias dan kreatif dalam mengikuti perkembangan teknologi.”</p>
              <div className="mt-6 flex items-center gap-3 z-10 relative">
                <img src="/images/logo/HMJ.png" alt="Dosen" className="w-14 h-14 rounded-full border-2 border-[#f15a24] shadow" />
                <div>
                  <div className="font-bold text-white">Dr. Munsyi, M.T</div>
                  <div className="text-gray-400 text-sm">Sekjur Teknologi Informasi</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#f15a24]/60 to-[#23272f] rounded-2xl p-8 shadow-xl border border-[#f15a24]/30 hover:scale-105 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute -top-6 -left-6 text-[#f15a24] opacity-20 text-[7rem] font-black select-none pointer-events-none">“</div>
              <p className="text-gray-100 italic z-10 relative">“Lingkungan akademik di TI UIN Antasari sangat mendukung kolaborasi dan inovasi.”</p>
              <div className="mt-6 flex items-center gap-3 z-10 relative">
                <img src="/images/logo/kabinet.png" alt="Dosen" className="w-14 h-14 rounded-full border-2 border-[#f15a24] shadow" />
                <div>
                  <div className="font-bold text-white">Hanifah, S.T, M.T</div>
                  <div className="text-gray-400 text-sm">Staf Ahli Menteri Bidang Hubungan Antar Lembaga Pusats</div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Partner & Sponsor">
          <div className="flex flex-wrap gap-8 justify-center items-center mt-6">
            <img src="/svg/Geopark-Meratus.svg" alt="Partner" className="h-12 w-auto opacity-80" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-auto opacity-80" viewBox="0 0 32 32"><defs><linearGradient id="btc-c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#FFF" stopOpacity=".5"/><stop offset="100%" stopOpacity=".5"/></linearGradient><circle id="btc-b" cx="16" cy="15" r="15"/><filter id="btc-a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><path id="btc-e" d="M23.1889526,13.0201846 C23.5025526,10.9239385 21.9064911,9.79704615 19.7240911,9.04529231 L20.4320295,6.20566154 L18.7035372,5.77489231 L18.0143065,8.53969231 C17.5599065,8.42646154 17.0931988,8.31963077 16.6294449,8.21378462 L17.3235988,5.43076923 L15.5960911,5 L14.8876603,7.83864615 C14.5115372,7.75298462 14.1423065,7.66830769 13.7839065,7.5792 L13.7858757,7.57033846 L11.4021218,6.97513846 L10.9423065,8.82129231 C10.9423065,8.82129231 12.224768,9.1152 12.1976911,9.13341538 C12.8977526,9.30818462 13.0242757,9.77144615 13.0031065,10.1387077 L12.1967065,13.3736615 C12.2449526,13.3859692 12.3074757,13.4036923 12.3763988,13.4312615 C12.3187988,13.4169846 12.2572603,13.4012308 12.1937526,13.3859692 L11.0634142,17.9176615 C10.9777526,18.1303385 10.7606449,18.4493538 10.2712911,18.3282462 C10.2885218,18.3533538 9.01492185,18.0146462 9.01492185,18.0146462 L8.15682954,19.9932308 L10.4061834,20.5539692 C10.8246449,20.6588308 11.2347372,20.7686154 11.6384295,20.872 L10.9231065,23.7441231 L12.6496295,24.1748923 L13.3580603,21.3332923 C13.8296911,21.4612923 14.2875372,21.5794462 14.7355372,21.6907077 L14.029568,24.5190154 L15.7580603,24.9497846 L16.4733834,22.0830769 C19.4208295,22.6408615 21.6371988,22.4158769 22.5701218,19.7500308 C23.3218757,17.6035692 22.5327065,16.3654154 20.9819372,15.5580308 C22.1112911,15.2976 22.9619988,14.5547077 23.1889526,13.0201846 L23.1889526,13.0201846 Z M19.2396603,18.5581538 C18.7055065,20.7046154 15.0914757,19.5442462 13.9197834,19.2532923 L14.8689526,15.4482462 C16.0406449,15.7406769 19.7979372,16.3196308 19.2396603,18.5581538 Z M19.7743065,12.9891692 C19.2869218,14.9416615 16.2789218,13.9496615 15.303168,13.7064615 L16.1637218,10.2553846 C17.1394757,10.4985846 20.2818757,10.9524923 19.7743065,12.9891692 Z"/><filter id="btc-d" width="123.2%" height="117.5%" x="-11.6%" y="-6.3%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter></defs><g fill="none" fillRule="evenodd"><use fill="#000" filter="url(#btc-a)" xlinkHref="#btc-b"/><use fill="#F7931A" xlinkHref="#btc-b"/><use fill="url(#btc-c)" style={{mixBlendMode:'soft-light'}} xlinkHref="#btc-b"/><circle cx="16" cy="15" r="14.5" stroke="#000" strokeOpacity=".097"/><g fillRule="nonzero"><use fill="#000" filter="url(#btc-d)" xlinkHref="#btc-e"/><use fill="#FFF" fillRule="evenodd" xlinkHref="#btc-e"/></g></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="7.056000232696533 3 37.35095977783203 45" className="h-12 w-auto opacity-80">
              <g clipPath="url(#a)">
                <path fill="#002991" d="M38.914 13.35c0 5.574-5.144 12.15-12.927 12.15H18.49l-.368 2.322L16.373 39H7.056l5.605-36h15.095c5.083 0 9.082 2.833 10.555 6.77a9.687 9.687 0 0 1 .603 3.58z"></path>
                <path fill="#60CDFF" d="M44.284 23.7A12.894 12.894 0 0 1 31.53 34.5h-5.206L24.157 48H14.89l1.483-9 1.75-11.178.367-2.322h7.497c7.773 0 12.927-6.576 12.927-12.15 3.825 1.974 6.055 5.963 5.37 10.35z"></path>
                <path fill="#008CFF" d="M38.914 13.35C37.31 12.511 35.365 12 33.248 12h-12.64L18.49 25.5h7.497c7.773 0 12.927-6.576 12.927-12.15z"></path>
              </g>
            </svg>
            <img src="/svg/APT.svg" alt="Partner" className="h-12 w-auto opacity-80" />
            <img src="/svg/UIN-Antasari.svg" alt="Partner" className="h-12 w-auto opacity-80" />
          </div>
        </Section>

        <footer className="mt-24 py-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Himpunan Mahasiswa Teknologi Informasi UIN Antasari. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
