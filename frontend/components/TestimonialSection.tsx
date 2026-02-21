import React from 'react';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
    {
        id: 1,
        name: "Priya S.",
        text: "I've never felt a scrunchie this soft! It holds my thick hair perfectly without any headaches. Obsessed with the blush pink!",
        rating: 5
    },
    {
        id: 2,
        name: "Ananya M.",
        text: "The packaging was so cute, I didn't want to open it! The silk quality is top-notch. Definitely buying more for my bridesmaids.",
        rating: 5
    },
    {
        id: 3,
        name: "Sarah K.",
        text: "Finally, hair ties that don't rip my hair out. The XL size is perfect for my messy buns. Worth every rupee!",
        rating: 5
    }
];

export const TestimonialSection: React.FC = () => {
    return (
        <section className="py-24 bg-rose-50 border-y border-pink-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <Star className="w-8 h-8 text-pink-500 mx-auto mb-4 fill-current" />
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">Love Notes</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Join thousands of happy customers who have switched to damage-free styling.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {REVIEWS.map((review) => (
                        <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-pink-50 relative hover:shadow-md transition-shadow">
                            <Quote className="absolute top-6 right-6 text-pink-100 w-10 h-10" />
                            <div className="flex gap-1 mb-6 text-yellow-400">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6 font-medium italic">"{review.text}"</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 font-bold text-sm">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                                    <span className="text-pink-400 text-xs text-uppercase tracking-wider">Verified Buyer</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
