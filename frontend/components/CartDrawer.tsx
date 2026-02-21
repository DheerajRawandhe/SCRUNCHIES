import React from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, MessageCircle } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItem[];
    onUpdateQuantity: (id: string, quantity: number) => void;
    onRemoveItem: (id: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) => {
    const subtotal = cartItems.reduce((sum, item) => {
        const price = typeof item.price === 'number' ? item.price : 0;
        return sum + price * item.quantity;
    }, 0);

    const shippingCharge = subtotal >= 500 ? 0 : 49;
    const total = subtotal + shippingCharge;

    const handleCheckout = () => {
        const phoneNumber = "916265376564";
        const itemLines = cartItems.map(
            (item) => `• ${item.name} × ${item.quantity} — ${typeof item.price === 'number' ? '₹' + item.price * item.quantity : item.price}`
        ).join('\n');
        const message = `Hi! I'd like to place an order 🛍️\n\n${itemLines}\n\nSubtotal: ₹${subtotal}\nShipping: ${shippingCharge === 0 ? 'Free 🎉' : '₹' + shippingCharge}\nTotal: ₹${total}\n\nPlease confirm availability and payment details. Thank you! 💕`;
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 animate-in fade-in"
                    onClick={onClose}
                />
            )}

            {/* Drawer */}
            <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold uppercase tracking-tight flex items-center gap-2">
                            <ShoppingBag size={20} />
                            Your Bag ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                        </h2>
                        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <X size={20} />
                        </button>
                    </div>

                    {cartItems.length === 0 ? (
                        <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                            <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mb-4 text-pink-300">
                                <ShoppingBag size={32} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Your bag is empty</h3>
                            <p className="text-gray-500 mb-8 max-w-xs">Looks like you haven't added any cute scrunchies yet.</p>
                            <button onClick={onClose} className="bg-gray-900 text-white px-8 py-3 text-sm font-bold uppercase tracking-widest rounded-full hover:bg-gray-800 transition-colors">
                                Start Shopping
                            </button>
                        </div>
                    ) : (
                        <>
                            {/* Cart Items */}
                            <div className="flex-1 overflow-y-auto space-y-4 pr-1 scrollbar-thin">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-4 bg-pink-50/40 rounded-xl p-3 border border-pink-100/50">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight truncate">{item.name}</h4>
                                            <p className="text-xs text-gray-400 mt-0.5">{item.category}</p>
                                            <p className="text-sm font-semibold text-pink-600 mt-1">
                                                {typeof item.price === 'number' ? `₹${item.price}` : item.price}
                                            </p>

                                            {/* Quantity Controls */}
                                            <div className="flex items-center gap-3 mt-2">
                                                <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                                                    <button
                                                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1.5 hover:bg-pink-50 transition-colors text-gray-500"
                                                    >
                                                        <Minus size={12} />
                                                    </button>
                                                    <span className="px-3 text-xs font-bold text-gray-900">{item.quantity}</span>
                                                    <button
                                                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1.5 hover:bg-pink-50 transition-colors text-gray-500"
                                                    >
                                                        <Plus size={12} />
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => onRemoveItem(item.id)}
                                                    className="p-1.5 text-gray-300 hover:text-red-400 transition-colors"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Order Summary & Checkout */}
                            <div className="border-t border-gray-100 pt-5 mt-4 space-y-3">
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Subtotal</span>
                                    <span className="font-medium text-gray-900">₹{subtotal}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Shipping</span>
                                    <span className={`font-medium ${shippingCharge === 0 ? 'text-green-600' : 'text-gray-900'}`}>
                                        {shippingCharge === 0 ? 'Free ✨' : `₹${shippingCharge}`}
                                    </span>
                                </div>
                                {shippingCharge > 0 && (
                                    <p className="text-[11px] text-pink-400 italic">
                                        Add ₹{500 - subtotal} more for free shipping 💕
                                    </p>
                                )}
                                <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t border-dashed border-gray-200">
                                    <span>Total</span>
                                    <span>₹{total}</span>
                                </div>

                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-green-600 text-white py-3.5 text-sm font-bold uppercase tracking-widest rounded-full hover:bg-green-700 transition-all flex items-center justify-center gap-2 mt-2 shadow-md hover:shadow-lg"
                                >
                                    <MessageCircle size={18} />
                                    Checkout via WhatsApp
                                </button>

                                <button
                                    onClick={onClose}
                                    className="w-full bg-gray-900 text-white py-3 text-sm font-bold uppercase tracking-widest rounded-full hover:bg-gray-800 transition-colors"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};
