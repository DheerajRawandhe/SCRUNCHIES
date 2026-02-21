import React, { useState } from 'react';
import { User, CreditCard, LayoutDashboard, MapPin, Heart, Clock, Gift, Settings, Edit2, ChevronRight } from 'lucide-react';

export const ProfilePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const sidebarItems = [
        { id: 'overview', label: 'Overview', icon: LayoutDashboard },
        { id: 'personal', label: 'Personal Information', icon: User },
        { id: 'payments', label: 'Saved Payments', icon: CreditCard },
        { id: 'address', label: 'Address Book', icon: MapPin },
        { id: 'wishlist', label: 'Wishlist', icon: Heart },
        { id: 'orders', label: 'Order History', icon: Clock },
        { id: 'giftcards', label: 'Gift Card Balance', icon: Gift },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-24 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-8 uppercase tracking-wide">
                    <span>Home</span>
                    <ChevronRight size={12} />
                    <span>My Account</span>
                    <ChevronRight size={12} />
                    <span className="text-pink-600 font-bold">Overview</span>
                </div>

                <h1 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">My Account</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-80 flex-shrink-0">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-32">
                            {sidebarItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`w-full flex items-center gap-4 p-4 text-sm font-bold transition-all border-l-4 group ${activeTab === item.id
                                            ? 'border-rose-600 bg-rose-50 text-rose-700'
                                            : 'border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                >
                                    <item.icon size={20} className={activeTab === item.id ? 'text-rose-600' : 'text-gray-400 group-hover:text-gray-600'} />
                                    {item.label}
                                </button>
                            ))}

                            <div className="p-4 mt-4 border-t border-gray-100">
                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 text-white">
                                    <p className="text-xs font-medium text-gray-400 mb-1">VillaPoints Balance</p>
                                    <p className="text-2xl font-black mb-3">0</p>
                                    <button className="w-full text-center text-xs font-bold uppercase tracking-wider py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                                        View History
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 animate-in slide-in-from-right-4 duration-500">
                        {activeTab === 'overview' && (
                            <div className="space-y-8">
                                {/* Account Overview Header */}
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                    <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                                        <h2 className="text-xl font-bold text-gray-900">Account Overview</h2>
                                    </div>
                                </div>

                                {/* Personal Info Section */}
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                    <div className="p-1 bg-gradient-to-r from-rose-100 to-pink-50">
                                        <div className="px-6 py-4 flex justify-between items-center">
                                            <h3 className="font-bold text-rose-900">Personal Information</h3>
                                            <button className="flex items-center gap-2 px-4 py-2 bg-white shadow-sm border border-rose-100 rounded-lg text-xs font-bold uppercase tracking-wider text-rose-600 hover:bg-rose-50 hover:border-rose-200 transition-all hover:-translate-y-0.5">
                                                <Edit2 size={14} />
                                                Edit Details
                                            </button>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <div className="grid grid-cols-1 gap-y-6">
                                            <InfoField label="Name" value="Parth Pawar" />
                                            <InfoField label="Date of Birth" value="--" />
                                            <InfoField label="Anniversary Date" value="--" />
                                            <InfoField label="Phone Number" value="+91 8623985804" />
                                            <InfoField label="Email Address" value="parth14118@gmail.com" />
                                            <InfoField label="VillaPoints" value="0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab !== 'overview' && (
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Settings size={24} className="text-gray-400" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Coming Soon</h3>
                                <p className="text-gray-500">This section is under construction.</p>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

const InfoField = ({ label, value }: { label: string, value: string }) => (
    <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 group">
        <div className="sm:w-48 text-sm font-medium text-gray-400 flex-shrink-0 pt-1 group-hover:text-pink-500 transition-colors">{label}</div>
        <div className="flex-1 text-base font-bold text-gray-900 border-b border-gray-100 sm:border-none pb-2 sm:pb-0 w-full">{value}</div>
    </div>
);
