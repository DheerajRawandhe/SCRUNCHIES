import React from 'react';

export const StylingGuide: React.FC = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <span className="text-pink-500 font-bold uppercase tracking-widest text-xs mb-4 block">Style Guide</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                            From Messy Buns to <br />
                            <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">Power Ponies</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Scrunchies aren't just a 90s throwback—they're the ultimate hair accessory for any mood.
                            Whether you need to keep your hair out of your face for skincare or add a pop of color to your outfit,
                            we've got you covered.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-pink-100 flex-shrink-0 flex items-center justify-center text-pink-600 font-bold">1</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">The "I Woke Up Like This" Bun</h4>
                                    <p className="text-sm text-gray-500">Twist your hair up and secure with an XL scrunchie for instant volume.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-pink-100 flex-shrink-0 flex items-center justify-center text-pink-600 font-bold">2</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">The Low Effort Low Pony</h4>
                                    <p className="text-sm text-gray-500">Keep it chic and sleek with a silk scrunchie at the nape of your neck.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-pink-100 flex-shrink-0 flex items-center justify-center text-pink-600 font-bold">3</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">The Wrist Accessory</h4>
                                    <p className="text-sm text-gray-500">Always keep one on your wrist—it basically doubles as a cute bracelet.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="/hero-images/Satin-Hair-Scrunchies-Hand-Image.webp"
                                className="rounded-2xl w-full h-64 object-cover transform translate-y-8 shadow-lg"
                                alt="Style inspiration 1"
                            />
                            <img
                                src="/hero-images/The-Half-Ponytail_600x600.webp"
                                className="rounded-2xl w-full h-64 object-cover shadow-lg"
                                alt="Style inspiration 2"
                            />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-pink-100/50 to-orange-50/50 rounded-full blur-3xl opacity-70" />
                    </div>

                </div>
            </div>
        </section>
    );
};
