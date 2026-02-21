import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLoginSuccess: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ email: '', password: '', fullName: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isLogin) {
            if (formData.email === 'user@example.com' && formData.password === 'password123') {
                alert("Successfully logged in! Welcome back, User.");
                onLoginSuccess();
                onClose();
            } else {
                alert("Invalid credentials. Please use the demo credentials provided below.");
            }
        } else {
            alert(`Account created for ${formData.email}! You can now log in.`);
            setIsLogin(true);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in" onClick={onClose} />
            <div className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-in zoom-in-95">
                <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-gray-50 rounded-full transition-colors">
                    <X size={20} />
                </button>

                <h2 className="text-2xl font-black text-center mb-2 uppercase tracking-tight">
                    {isLogin ? 'Welcome Back' : 'Join the Club'}
                </h2>
                <p className="text-center text-gray-500 mb-8 text-sm">
                    {isLogin ? 'Login to access your orders' : 'Sign up for exclusive offers'}
                </p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pink-300 transition-colors"
                            required
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pink-300 transition-colors"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pink-300 transition-colors"
                        required
                    />

                    <button type="submit" className="w-full bg-pink-500 text-white rounded-xl py-3 font-bold uppercase tracking-wide hover:bg-pink-600 transition-colors shadow-lg shadow-pink-200">
                        {isLogin ? 'Sign In' : 'Create Account'}
                    </button>
                </form>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg text-xs text-gray-500 text-center border border-gray-100">
                    <p className="font-bold text-gray-700 mb-1">Demo Credentials:</p>
                    <p>Email: user@example.com</p>
                    <p>Password: password123</p>
                </div>

                <div className="mt-6 text-center text-sm text-gray-500">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button onClick={() => setIsLogin(!isLogin)} className="text-pink-600 font-bold hover:underline">
                        {isLogin ? 'Sign Up' : 'Log In'}
                    </button>
                </div>
            </div>
        </div>
    );
};
