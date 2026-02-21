import React from 'react';
import { Sparkles, Heart, Sprout } from 'lucide-react';

export const AboutPage: React.FC = () => {
    return (
        <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-in slide-in-from-bottom-8 duration-700">
                <span className="inline-block p-4 rounded-full bg-rose-50 text-rose-500 mb-6 shadow-sm">
                    <Sparkles size={28} />
                </span>
                <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter">
                    Crafted with Love, <br />
                    <span className="text-rose-400">Worn with Pride.</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
                    Scrunchies Villa isn't just a brand; it's a celebration of everyday moments.
                    We believe accessories should be as kind to your hair as they are cute.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
                <div className="relative group">
                    <div className="absolute inset-0 bg-rose-200 rounded-[3rem] rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-50" />
                    <img
                        src="/hero-images/MA-58309399001_1.jpg"
                        alt="Our Studio Process"
                        className="relative rounded-[3rem] shadow-2xl w-full object-cover aspect-[4/5] z-10"
                    />
                </div>

                <div className="space-y-10">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mb-4">
                            <Heart size={24} fill="currentColor" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-900">Why We Started</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Frustrated by hair ties that snapped and pulled, we set out to create the perfect scrunchie.
                            One that holds tight during a workout but slides out effortlessly at night.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                            <Sprout size={24} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-900">Our Promise</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We use only the highest grade Mulberry silk and sustainable fabrics.
                            Every piece is handmade in our small studio, ensuring quality you can feel.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-rose-50 rounded-[3rem] p-12 text-center">
                <h2 className="text-3xl font-bold mb-6 text-rose-900">Join Our Journey</h2>
                <p className="text-rose-700 max-w-2xl mx-auto mb-8">
                    Follow us on social media for behind-the-scenes content, styling tips, and exclusive drops.
                </p>
                <a href="https://www.instagram.com/scrunchiesvilla/" target="_blank" rel="noopener noreferrer" className="inline-block bg-rose-500 text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-rose-600 transition-colors shadow-lg hover:shadow-rose-200">
                    Follow @ScrunchiesVilla
                </a>
            </div>
        </div>
    );
};
