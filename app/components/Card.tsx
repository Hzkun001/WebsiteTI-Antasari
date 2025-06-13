import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  desc: string;
  icon?: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, desc, icon }) => (
  <div className="w-full max-w-xs md:max-w-sm bg-gradient-to-br from-[#23272f] via-[#23272f]/90 to-[#f15a24]/40 border border-[#f15a24]/30 rounded-2xl shadow-xl p-7 md:p-8 hover:scale-105 hover:shadow-2xl hover:bg-[#f15a24]/10 transition-all duration-300 relative overflow-hidden group backdrop-blur-md">
    {icon && (
      <div className="absolute -top-6 -right-6 text-[4rem] opacity-10 group-hover:opacity-20 transition-all duration-300 pointer-events-none select-none">
        {icon}
      </div>
    )}
    <h3 className="text-xl font-bold mb-2 text-[#f15a24] flex items-center gap-2">
      {icon && <span className="text-2xl">{icon}</span>}
      {title}
    </h3>
    <p className="text-gray-100">{desc}</p>
  </div>
);

export default Card;
