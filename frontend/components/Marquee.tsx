import React from 'react';

interface MarqueeProps {
  text: string;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ text, className = "" }) => {
  const repeatedText = Array(10).fill(text).join(" • ");

  return (
    <div className={`overflow-hidden whitespace-nowrap py-3 ${className || 'bg-pink-100 text-pink-900'}`}>
      <div className="animate-marquee inline-block">
        <span className="text-sm font-bold tracking-widest uppercase px-4">
          {repeatedText}
        </span>
      </div>
    </div>
  );
};