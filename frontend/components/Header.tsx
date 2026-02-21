import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, User } from 'lucide-react';
import { CartDrawer } from './CartDrawer';
import { AuthModal } from './AuthModal';
import { ProfileMenu } from './ProfileMenu';
import { ContactModal } from './ContactModal';
import { CartItem } from '../types';

interface HeaderProps {
  onViewChange: (view: string) => void;
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onViewChange, isLoggedIn, onLogin, onLogout, cartItems, onUpdateQuantity, onRemoveItem }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop All', action: () => onViewChange('shop') },
    { name: 'Scrunchies', action: () => onViewChange('scrunchies') },
    { name: 'Claws', action: () => onViewChange('claws') },
    { name: 'About', action: () => onViewChange('about') },
    { name: 'Contact', action: () => setIsContactOpen(true) },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-[#FDF2F0]/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div
            onClick={() => onViewChange('home')}
            className="flex-1 flex justify-center lg:justify-start lg:flex-none cursor-pointer lg:mr-10"
          >
            <img
              src="/logo/610572749_17922189327213348_6992264019861820971_n.png"
              alt="SV Logo"
              className="h-28 w-28 rounded-full object-cover hover:opacity-80 transition-opacity drop-shadow-sm"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={link.action}
                className="text-sm font-medium text-gray-500 hover:text-pink-500 transition-colors uppercase tracking-wide"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-6 text-gray-900">
            <div className="relative hidden lg:block">
              <button
                onClick={() => isLoggedIn ? setIsProfileMenuOpen(!isProfileMenuOpen) : setIsLoginOpen(true)}
                className="hover:text-pink-500 transition-colors"
              >
                <User size={20} className={isLoggedIn ? 'text-pink-600' : ''} />
              </button>

              {isProfileMenuOpen && (
                <ProfileMenu
                  onNavigate={(view) => { onViewChange(view); setIsProfileMenuOpen(false); }}
                  onLogout={() => { onLogout(); setIsProfileMenuOpen(false); }}
                  onClose={() => setIsProfileMenuOpen(false)}
                />
              )}
            </div>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 group hover:text-pink-500 transition-colors"
            >
              <ShoppingBag size={20} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#FDF2F0] border-t border-gray-100/50 p-6 lg:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 shadow-xl">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => { link.action(); setIsMobileMenuOpen(false); }}
                className="text-lg font-medium text-gray-900 hover:text-pink-500 uppercase text-left"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cartItems={cartItems} onUpdateQuantity={onUpdateQuantity} onRemoveItem={onRemoveItem} />
      <AuthModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={() => {
          setIsLoginOpen(false);
          onLogin();
        }}
      />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};