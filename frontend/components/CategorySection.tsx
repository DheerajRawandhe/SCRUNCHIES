import React from 'react';

const CATEGORIES = [
    {
        id: 1,
        name: "Classic Silk",
        image: "/hero-images/silk-scrunchie-size-guide-comparison_480x480.webp",
        description: "Everyday luxury in soft pastels",
        view: "scrunchies"
    },
    {
        id: 2,
        name: "Oversized XL",
        image: "/hero-images/c644ecesobo-sc146_1_.avif",
        description: "Maximum volume, zero damage",
        view: "scrunchies"
    },
    {
        id: 3,
        name: "Statement Bows",
        image: "/hero-images/51v+tfGg01L._AC_UF1000,1000_QL80_.jpg",
        description: "Feminine touches for any occasion",
        view: "bows"
    },
    {
        id: 4,
        name: "Gift Sets",
        image: "/products-images/IMG_20260110_113135.jpg.jpeg",
        description: "The perfect present for hair lovers",
        view: "gifts"
    }
];

interface CategorySectionProps {
    onViewChange?: (view: string) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ onViewChange }) => {
    const handleClick = (view: string) => {
        onViewChange?.(view);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-pink-500 font-bold uppercase tracking-widest text-xs mb-2 block">Shop by Category</span>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">Find Your Perfect Match</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {CATEGORIES.map((cat) => (
                        <div key={cat.id} className="group cursor-pointer" onClick={() => handleClick(cat.view)}>
                            <div className="relative aspect-[3/4] overflow-hidden rounded-full border-4 border-pink-50 shadow-sm transition-all duration-500 group-hover:border-pink-200 group-hover:shadow-xl">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                            </div>
                            <div className="text-center mt-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-pink-600 transition-colors">{cat.name}</h3>
                                <p className="text-sm text-gray-500">{cat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
