
import React from 'react';

interface LogoProps {
  color?: string;
  textColor?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = () => {
  return (
    <div className="flex items-center group cursor-pointer">
      <img 
        src="/logo_allcance.png" 
        alt="Allcance Consultoria" 
        className="h-14 w-auto transform group-hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

export default Logo;
