import React, { useState } from 'react';
import { ArrowRight, Sparkles, Loader2 } from 'lucide-react';
import { HeroContent } from '../types';
import { generateHeroCopy } from '../services/geminiService';

interface HeroProps {
  onViewChange?: (view: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewChange }) => {
  const [content, setContent] = useState<HeroContent>({
    headline: "THE SOFTEST CLOUDS FOR YOUR HAIR",
    subheadline: "Handmade silk scrunchies designed to protect your hair and elevate your look.",
    ctaText: "SHOP THE DROP"
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [vibe, setVibe] = useState("");

  const handleRewrite = async () => {
    if (!vibe) return;
    setIsLoading(true);
    const newContent = await generateHeroCopy(content, vibe);
    setContent(newContent);
    setIsLoading(false);
    setIsEditing(false);
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 selection:bg-pink-200">

      {/* Background Elements - Cohesive Image Layout */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">

        {/* 1. Silk Texture (Far Left) - Soft & Abstract */}
        <div className="absolute top-[10%] left-[-5%] w-[35vw] aspect-[3/4] rounded-[3rem] overflow-hidden opacity-40 shadow-2xl -rotate-12 animate-float-slow transition-transform hover:scale-105 duration-700">
          <img
            src="/hero-images/MA-58309399001_1.jpg" // Using available image as texture/detail shot
            alt="Silk scrunchie texture close-up"
            className="w-full h-full object-cover scale-150"
          />
          <div className="absolute inset-0 bg-rose-200/20 mix-blend-overlay" />
        </div>

        {/* 2. Lifestyle Shot (Far Right) - Clean & Focus */}
        <div className="absolute top-[5%] right-[-5%] w-[40vw] h-[85vh] rounded-[4rem] overflow-hidden opacity-90 shadow-2xl rotate-6 animate-float-delayed border-[6px] border-white ring-1 ring-pink-100/50">
          <img
            src="/hero-images/how-to-wear-a-scrunchie-232133-1502381594251-square-700-80.jpg" // Lifestyle shot
            alt="Girl wearing silk scrunchie"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent mix-blend-soft-light" />
        </div>

        {/* 3. Styled Flat Lay (Bottom Left/Center) - Product Focus */}
        <div className="absolute bottom-[-5%] left-[15%] w-[30vw] aspect-square rounded-[2.5rem] overflow-hidden opacity-80 shadow-xl rotate-[-8deg] animate-float border-[6px] border-white/80 ring-1 ring-white">
          <img
            src="/hero-images/Scrunchie.jpg" // Flat lay
            alt="Scrunchie collection flat lay"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Soft Glare/Light Leaks */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-pink-200/20 rounded-full blur-[80px]" />
      </div>

      {/* Content Card with Glassmorphism */}
      <div className="relative z-10 text-center max-w-4xl px-8 py-12 rounded-[3rem] bg-white/30 backdrop-blur-md border border-white/50 shadow-sm animate-in zoom-in-95 fade-in duration-1000 mt-10 mx-4">

        <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white/60 border border-white shadow-sm text-[10px] font-bold tracking-[0.25em] text-pink-900 uppercase">
          New Collection
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 text-gray-900 leading-[0.9] drop-shadow-sm">
          {content.headline}
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-10 tracking-wide font-medium max-w-xl mx-auto leading-relaxed drop-shadow-sm">
          {content.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          {/* Primary CTA - Soft Pastel */}
          <button onClick={() => onViewChange?.('shop')} className="bg-pink-300 text-pink-950 px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-pink-400 hover:scale-105 transition-all flex items-center gap-2 group rounded-full shadow-lg hover:shadow-xl hover:shadow-pink-200/50">
            {content.ctaText}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>


        </div>
      </div>

      {/* Gemini Edit Modal */}

    </section>
  );
};