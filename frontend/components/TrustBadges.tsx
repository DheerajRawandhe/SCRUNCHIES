import React from 'react';
import { Sun, Heart, Sparkles, Feather } from 'lucide-react';

const BADGES = [
    {
        icon: Feather,
        title: "100% Pure Silk",
        desc: "Grade 6A Mulberry silk for ultimate softness."
    },
    {
        icon: Heart,
        title: "Handmade & Hand stitched",
        desc: "Crafted with love in our small studio."
    },
    {
        icon: Sun,
        title: "Damage Free",
        desc: "No creases, no breakage, just pure comfort."
    },
    {
        icon: Sparkles,
        title: "Ethically Made",
        desc: "Sustainable fabrics and fair wages."
    }
];

export const TrustBadges: React.FC = () => {
    return (
        <section className="py-16 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {BADGES.map((badge, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            <div className="mb-4 p-4 rounded-full bg-pink-50 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                                <badge.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">{badge.title}</h3>
                            <p className="text-sm text-gray-500 leading-snug max-w-[200px]">{badge.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
