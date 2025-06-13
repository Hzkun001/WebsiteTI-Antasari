import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <section className="py-16 px-4 max-w-5xl mx-auto">
    <div className="flex flex-col items-center mb-8">
      <h2 className="text-3xl font-bold text-center text-white mb-2 tracking-tight drop-shadow-lg">
        {title}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#f15a24] to-transparent rounded-full mb-2" />
    </div>
    {children}
  </section>
);

export default Section;
