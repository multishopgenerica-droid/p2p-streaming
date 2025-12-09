import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  pulsing?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  pulsing = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";
  
  const variants = {
    primary: "bg-[#FF6B00] text-black hover:bg-[#ff8533] focus:ring-[#FF6B00]",
    secondary: "bg-white text-black hover:bg-gray-200 focus:ring-white",
    outline: "bg-transparent border-2 border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-black focus:ring-[#FF6B00]"
  };

  const pulseClass = pulsing ? "animate-pulse-glow" : "";
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${pulseClass} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};