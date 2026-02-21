import React from 'react';
import { X } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const whatsappNumber = '919876543210'; // Replace with your actual WhatsApp number (with country code, no +)
    const instagramUsername = 'scrunchies__vila'; // Replace with your actual Instagram username

    const handleWhatsApp = () => {
        const message = encodeURIComponent('Hi! I found you on Scrunchies Villa. I would like to know more!');
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    const handleInstagram = () => {
        window.open(`https://www.instagram.com/${instagramUsername}/`, '_blank');
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in" />

            {/* Modal */}
            <div
                className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-sm p-8 animate-scale-in"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X size={20} />
                </button>

                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-pink-50 mb-4">
                        <span className="text-2xl">💌</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 tracking-tight">Get in Touch</h2>
                    <p className="text-sm text-gray-500 mt-1">Reach us on your favourite platform</p>
                </div>

                {/* Options */}
                <div className="flex flex-col gap-4">
                    {/* WhatsApp */}
                    <button
                        onClick={handleWhatsApp}
                        className="group flex items-center gap-4 w-full p-4 rounded-2xl border-2 border-gray-100 hover:border-green-400 bg-white hover:bg-green-50/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-100/50"
                    >
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shadow-md shadow-green-200 group-hover:scale-110 transition-transform duration-300">
                            <svg viewBox="0 0 24 24" width="26" height="26" fill="white">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </div>
                        <div className="text-left">
                            <p className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">WhatsApp</p>
                            <p className="text-xs text-gray-400">Chat with us instantly</p>
                        </div>
                        <svg className="ml-auto w-5 h-5 text-gray-300 group-hover:text-green-500 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Instagram */}
                    <button
                        onClick={handleInstagram}
                        className="group flex items-center gap-4 w-full p-4 rounded-2xl border-2 border-gray-100 hover:border-pink-400 bg-white hover:bg-gradient-to-r hover:from-pink-50/50 hover:to-purple-50/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-100/50"
                    >
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400 flex items-center justify-center shadow-md shadow-pink-200 group-hover:scale-110 transition-transform duration-300">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </div>
                        <div className="text-left">
                            <p className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">Instagram</p>
                            <p className="text-xs text-gray-400">DM us on Insta</p>
                        </div>
                        <svg className="ml-auto w-5 h-5 text-gray-300 group-hover:text-pink-500 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Footer */}
                <p className="text-center text-[11px] text-gray-400 mt-6">We typically reply within a few hours ✨</p>
            </div>

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
        </div>
    );
};
