import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQCategory {
    title: string;
    items: FAQItem[];
}

const FAQ_DATA: FAQCategory[] = [
    {
        title: 'General',
        items: [
            {
                question: 'What is Scrunchies Villa?',
                answer: 'Scrunchies Villa is a handmade accessories brand specializing in premium silk scrunchies, hair bows, claw clips, resin jewelry, and curated gift sets. Every piece is crafted with love to elevate your everyday look.'
            },
            {
                question: 'Are your products handmade?',
                answer: 'Yes! Every single product is handcrafted in our small studio. We take pride in the quality and attention to detail that goes into each piece.'
            },
            {
                question: 'What materials do you use?',
                answer: 'We use high-grade Mulberry silk, premium satin, and sustainable fabrics for our scrunchies and bows. Our resin jewelry is made with eco-friendly resin and carefully selected embellishments.'
            },
        ],
    },
    {
        title: 'Orders & Payment',
        items: [
            {
                question: 'How do I place an order?',
                answer: 'You can browse our collection on the website and add items to your cart. At checkout, you\'ll be redirected to WhatsApp where you can confirm your order and arrange payment directly with us.'
            },
            {
                question: 'What payment methods do you accept?',
                answer: 'We accept UPI (GPay, PhonePe, Paytm), bank transfers, and cash on delivery for select locations. Payment details will be shared via WhatsApp after you place your order.'
            },
            {
                question: 'Can I modify or cancel my order?',
                answer: 'Yes, you can modify or cancel your order within 2 hours of placing it by messaging us on WhatsApp. After that, if the order has been dispatched, cancellation may not be possible.'
            },
        ],
    },
    {
        title: 'Shipping & Tracking',
        items: [
            {
                question: 'How long does shipping take?',
                answer: 'We ship within 2–3 business days of order confirmation. Delivery typically takes 5–7 business days depending on your location. For local orders, delivery can be as fast as 1–2 days.'
            },
            {
                question: 'Do you offer free shipping?',
                answer: 'Yes! We offer free shipping on all orders above ₹500. For orders below ₹500, a flat shipping fee of ₹49 applies.'
            },
            {
                question: 'How can I track my order?',
                answer: 'Once your order is dispatched, we\'ll share the tracking details with you via WhatsApp. You can use the tracking number to check your order status on the courier partner\'s website.'
            },
            {
                question: 'Do you ship internationally?',
                answer: 'Currently, we only ship within India. We are working on expanding to international shipping soon. Stay tuned by following us on Instagram!'
            },
        ],
    },
    {
        title: 'Returns & Exchange',
        items: [
            {
                question: 'What is your return policy?',
                answer: 'Since all our products are handmade, we do not accept returns unless the product is damaged or defective upon arrival. Please contact us within 24 hours of receiving your order with photos of the issue.'
            },
            {
                question: 'Can I exchange a product?',
                answer: 'We offer exchanges for damaged or defective products only. Please reach out to us on WhatsApp within 24 hours of delivery with clear photos, and we\'ll arrange a replacement.'
            },
            {
                question: 'What if I receive a damaged product?',
                answer: 'We\'re so sorry if that happens! Please message us immediately on WhatsApp with photos of the damaged item and packaging. We\'ll send you a replacement at no extra cost.'
            },
        ],
    },
    {
        title: 'Gift Cards',
        items: [
            {
                question: 'Do you sell gift cards?',
                answer: 'Yes! Our gift cards make the perfect present. They are available in various denominations and can be purchased through our website or by messaging us on WhatsApp.'
            },
            {
                question: 'How do gift cards work?',
                answer: 'Once purchased, you\'ll receive a unique gift card code via WhatsApp or email. The recipient can use this code to shop for any products on our store up to the card value.'
            },
            {
                question: 'Do gift cards expire?',
                answer: 'Our gift cards are valid for 6 months from the date of purchase. Any unused balance will remain available until the expiry date.'
            },
        ],
    },
    {
        title: 'Care Instructions',
        items: [
            {
                question: 'How do I care for my silk scrunchies?',
                answer: 'We recommend hand washing your silk scrunchies in cold water with a mild detergent. Gently squeeze out excess water (don\'t wring!) and lay flat to dry. Avoid direct sunlight to maintain the color.'
            },
            {
                question: 'How do I maintain resin jewelry?',
                answer: 'Keep your resin jewelry away from direct heat and prolonged sunlight. Wipe gently with a soft cloth after use. Avoid contact with perfumes, lotions, and water to preserve the finish.'
            },
        ],
    },
];

interface FAQPageProps {
    initialCategory?: number;
}

export const FAQPage: React.FC<FAQPageProps> = ({ initialCategory = 0 }) => {
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [openItems, setOpenItems] = useState<Set<string>>(new Set());

    const toggleItem = (key: string) => {
        setOpenItems(prev => {
            const next = new Set(prev);
            if (next.has(key)) {
                next.delete(key);
            } else {
                next.add(key);
            }
            return next;
        });
    };

    return (
        <div className="pt-36 pb-24 px-6 max-w-6xl mx-auto min-h-screen">
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-gray-900 mb-2">
                Frequently Asked Questions
            </h1>
            <p className="text-gray-400 mb-12 text-sm uppercase tracking-widest">Everything you need to know 💕</p>

            <div className="flex flex-col md:flex-row gap-10">
                {/* Sidebar */}
                <aside className="md:w-64 flex-shrink-0">
                    <nav className="md:sticky md:top-36 space-y-1">
                        {FAQ_DATA.map((category, index) => (
                            <button
                                key={category.title}
                                onClick={() => setActiveCategory(index)}
                                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-200 ${activeCategory === index
                                    ? 'bg-pink-50 text-pink-600 border-l-4 border-pink-400'
                                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                            >
                                {category.title}
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Content */}
                <main className="flex-1 min-w-0">
                    <h2 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
                        {FAQ_DATA[activeCategory].title}
                    </h2>

                    <div className="space-y-3">
                        {FAQ_DATA[activeCategory].items.map((item, index) => {
                            const key = `${activeCategory}-${index}`;
                            const isOpen = openItems.has(key);

                            return (
                                <div
                                    key={key}
                                    className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <button
                                        onClick={() => toggleItem(key)}
                                        className="w-full flex items-center justify-between px-6 py-5 text-left"
                                    >
                                        <span className="text-sm font-semibold text-gray-900 pr-4">{item.question}</span>
                                        <ChevronDown
                                            size={18}
                                            className={`flex-shrink-0 text-pink-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </main>
            </div>
        </div>
    );
};
