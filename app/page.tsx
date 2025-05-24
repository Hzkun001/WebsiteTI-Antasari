"use client";

import Image from "next/image";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Squares from "./components/Squares/Squares";
import CircularText from "./components/CircularText/CircularText";
import Silk from "./components/Silk/Silk";
import Navbar from "./components/Navbar";
import LogoWall from "./components/LogoWall";
import ClickSpark from "./components/ClickSpark/ClickSpark";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col items-center justify-center">
          
      <Navbar />
      {/* <SplashCursor  /> */}
      <div className="fixed inset-0 w-screen h-screen z-0">
        <Silk
          speed={5}
          scale={1}
          color="#D1B7B7"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      
      <div className="container mx-auto h-screen flex flex-col justify-center items-center z-10">
       <ClickSpark
            sparkColor='#fff'
            sparkSize={11}
            sparkRadius={20}
            sparkCount={8}
            duration={400}>
        <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto text-center gap-8">
          {/* CircularText dengan gambar di tengah */}
          <AnimatedContent
            distance={180}
            direction="vertical"
            reverse={false}
            config={{ tension: 30, friction: 15 }}
            initialOpacity={0.0}
            animateOpacity
            scale={1.0}
            threshold={0.4}
          >
          <div className="relative flex items-center justify-center w-40 h-40 mb-10 md:mb-20 mr-1">
            <Image src="/images/logo/kabinet.png" alt="Logo Himpunan" width={120} height={120} className=" mr-3 mt-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />
            <CircularText
              text="*KABINET*ARNANTA"
              onHover="speedUp"
              spinDuration={16}
              className="mx-auto text-[#ffffff] "
            />
          </div>
           </AnimatedContent>
          <AnimatedContent
            distance={120}
            direction="vertical"
            reverse={false}
            config={{ tension: 90, friction: 18 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold mt-15">Himpunan Mahasiswa <br className="block sm:hidden" /> Teknologi Informasi</h1>
              <RotatingText
                texts={['- Religius -', '- Sains - ', '- Teknologi -']}
                mainClassName="px-1 sm:px-2 md:px-3 bg-[#f15a24] text-white overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-xl md:text-2xl font-bold inline-flex transition-all"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </AnimatedContent>
          <div className="flex flex-col items-center gap-2">
            <SplitText
              text="Bersama membangun Kolaborasi dari HMTI"
              className="text-xl md:text-2xl font-semibold text-center text-white mt-15"
              delay={50}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.2}
              rootMargin="-50px"
            />
          </div>
          <div className="flex items-center justify-center mt-10 text-white">
             <LogoWall />
          </div>
        </div>
        </ClickSpark>
      </div>
    </div>
  );
}
