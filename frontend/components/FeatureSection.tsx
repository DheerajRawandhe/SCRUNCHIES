import React from 'react';

export const FeatureSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="relative h-[60vh] lg:h-auto bg-pink-100 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&w=2866&auto=format&fit=crop"
          alt="Feature"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-pink-500/10" />
      </div>

      <div className="bg-white flex flex-col justify-center px-8 py-20 lg:px-24">
        <span className="text-pink-500 font-mono text-xs mb-6 block tracking-widest uppercase">Handmade in Studio</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-none mb-8 text-gray-900">
          Gentle on hair. <br />
          <span className="text-pink-200">Heavy on style.</span>
        </h2>
        <div className="space-y-6 text-gray-500 text-lg font-light leading-relaxed max-w-md">
          <p>
            We believe accessories should be as kind to your hair as they are cute.
            Our signature silk blends prevent breakage while holding your style perfectly in place.
          </p>
          <p>
            Whether you're lounging at home or out on the town, Scrunchies Villa keeps you feeling light, airy, and effortlessly chic.
          </p>
        </div>

        <div className="mt-12">
          <button className="text-gray-900 border-b-2 border-pink-200 pb-1 uppercase text-sm font-bold tracking-widest hover:text-pink-500 hover:border-pink-500 transition-colors">
            Our Philosophy
          </button>
        </div>
      </div>
    </section>
  );
};