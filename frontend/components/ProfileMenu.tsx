import React from 'react';
import { User, Clock, Gift, MapPin, MessageSquare, LogOut, Sparkles } from 'lucide-react';

interface ProfileMenuProps {
    onLogout: () => void;
    onNavigate: (view: string) => void;
    onClose: () => void;
}

export const ProfileMenu: React.FC<ProfileMenuProps> = ({ onLogout, onNavigate, onClose }) => {
    const menuItems = [
        { icon: Clock, label: 'Order History', action: () => onNavigate('profile') }, // Navigate to profile for history
        { icon: Gift, label: 'Gift Card Balance', action: () => onNavigate('profile') },
        { icon: MapPin, label: 'Track Order', action: () => onNavigate('track') },
        { icon: MessageSquare, label: 'Contact Us', action: () => onNavigate('contact') },
        { icon: LogOut, label: 'Log Out', action: onLogout },
    ];

    return (
        <div className="absolute top-full right-0 mt-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[60] animate-in fade-in slide-in-from-top-2 ring-1 ring-black/5">
            {/* Header */}
            <div className="bg-gradient-to-br from-rose-600 to-pink-500 p-6 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner">
                            <User size={24} className="text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl tracking-tight leading-tight">Parth</h3>
                            <span className="text-pink-100 text-xs font-medium">Verified Member</span>
                        </div>
                    </div>

                    <button className="w-full flex items-center justify-between bg-black/20 hover:bg-black/30 transition-colors px-4 py-3 rounded-xl backdrop-blur-sm border border-white/10 group cursor-pointer">
                        <div className="flex items-center gap-2">
                            <div className="p-1 bg-yellow-400 rounded-full text-yellow-900">
                                <Sparkles size={12} fill="currentColor" />
                            </div>
                            <span className="text-sm font-bold">View VillaPoints</span>
                        </div>
                        <span className="text-xs text-white/80 group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            {/* Menu Items */}
            <div className="p-3">
                {menuItems.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            item.action();
                            onClose();
                        }}
                        className="w-full flex items-center gap-4 p-4 text-gray-600 hover:bg-rose-50 hover:text-rose-600 rounded-xl transition-all duration-200 group text-left"
                    >
                        <item.icon size={20} className="text-gray-400 group-hover:text-rose-500 transition-colors" />
                        <span className="font-medium text-sm flex-1">{item.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};
