import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button
    {...props}
    className="bg-gradient-to-r from-[#f15a24] to-[#d94d1a] hover:from-[#d94d1a] hover:to-[#f15a24] text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed backdrop-blur-md border border-white/20"
  >
    {children}
  </button>
);

export default Button;
