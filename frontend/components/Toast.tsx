import React, { useEffect, useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';

interface ToastProps {
    message: string;
    isVisible: boolean;
    onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isVisible) {
            // Small delay to trigger animation
            setTimeout(() => setShow(true), 10);
            const timer = setTimeout(() => {
                setShow(false);
                setTimeout(onClose, 400);
            }, 2500);
            return () => clearTimeout(timer);
        } else {
            setShow(false);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] pointer-events-none">
            <div
                className={`pointer-events-auto flex items-center gap-3 bg-white/95 backdrop-blur-md border border-pink-100 rounded-2xl px-5 py-3.5 shadow-xl transition-all duration-400 ${show
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 -translate-y-4 scale-95'
                    }`}
                style={{ minWidth: '280px', maxWidth: '400px' }}
            >
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center">
                    <Heart size={18} className="text-pink-500 fill-pink-400" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-pink-500 mb-0.5">
                        Added to bag ♡
                    </p>
                    <p className="text-sm text-gray-700 font-medium truncate">
                        {message}
                    </p>
                </div>

                {/* Shopping bag icon */}
                <div className="flex-shrink-0">
                    <ShoppingBag size={16} className="text-pink-300" />
                </div>
            </div>
        </div>
    );
};
