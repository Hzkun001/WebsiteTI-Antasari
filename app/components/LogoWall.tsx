import React from "react";
import Image from "next/image";

const technologies = [
  
  "This-is-TI",
  "UIN-Antasari",
  "Teknologi-Informasi",
  "HMJ-TI",
  "Arnanta",
  "APT",
  "Antasari-Programming-Team",
  "Geopark-Meratus",
  "Diginest",
];

const LogoWall: React.FC = () => (
  <div className="relative overflow-x-hidden py-8">
    <div
      className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-20"
    ></div>
    <div
      className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-20"
    ></div>

    <div className="flex animate-scroll hover:animate-paused gap-12 md:gap-20 w-max">
      {technologies.map((tech) => (
        <div
          className="flex items-center gap-3 group transition-all duration-300 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20 shadow-lg hover:shadow-2xl hover:bg-white/20 hover:scale-105 relative overflow-hidden"
          key={tech}
        >
          <Image
            src={`/svg/${tech}.svg`}
            alt={tech}
            className="h-7 w-auto object-contain transition-transform group-hover:scale-125 group-hover:drop-shadow-glow opacity-70"
            width={30}
            height={30}
            loading="lazy"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <span className="text-lg font-semibold text-white drop-shadow-sm">
            {tech.charAt(0).toUpperCase() + tech.slice(1)}
          </span>
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-[#f15a24]/40 to-transparent rounded-full blur-sm opacity-0 group-hover:opacity-80 transition-all duration-300"></span>
        </div>
      ))}
    </div>
    <style>{`
      @keyframes scroll {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }
      .animate-scroll {
        animation: scroll 60s linear infinite;
      }
      @media (min-width: 768px) {
        .animate-scroll {
          animation-duration: 50s;
        }
      }
      .drop-shadow-glow {
        filter: drop-shadow(0 0 8px #f15a24) drop-shadow(0 0 16px #f15a24);
      }
      .animate-bounce-slow {
        animation: bounce 2.5s infinite;
      }
      .animate-bounce-fast {
        animation: bounce 0.7s infinite;
      }
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
      }
    `}</style>
  </div>
);

export default LogoWall;