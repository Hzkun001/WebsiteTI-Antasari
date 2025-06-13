import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  img: string;
  children: React.ReactNode;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, img, children }) => (
  <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
    <p className="text-gray-200 italic">{children}</p>
    <div className="mt-4 flex items-center gap-3">
      <img src={img} alt={name} className="w-12 h-12 rounded-full border-2 border-[#f15a24]" />
      <div>
        <div className="font-bold text-white">{name}</div>
        <div className="text-gray-400 text-sm">{role}</div>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
