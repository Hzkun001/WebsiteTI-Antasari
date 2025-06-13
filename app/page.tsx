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
            <img src="/svg/Diginest.svg" alt="Partner" className="h-12 w-auto opacity-80" />
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
