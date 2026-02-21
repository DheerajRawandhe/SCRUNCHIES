import React from 'react';
import { Instagram } from 'lucide-react';

interface FooterProps {
  onViewChange?: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onViewChange }) => {
  const handleNav = (view: string) => {
    onViewChange?.(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = "916265376564";
    const message = "Hi! I have a question about Scrunchies Villa.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer className="bg-gray-50 text-gray-900 pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-2">
          <img src="/logo/610572749_17922189327213348_6992264019861820971_n.png" alt="Scrunchies Villa" className="h-20 w-20 rounded-full object-cover mb-6" />
          <p className="text-gray-500 max-w-sm mb-8">
            Cute accessories for your everyday gravity-defying moments.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/scrunchies__vila?igsh=MW56YWxyaW56MTB6Zw==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-pink-100 hover:border-pink-100 hover:text-pink-600 transition-colors cursor-pointer text-gray-400">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400 mb-6">Shop</h4>
          <ul className="space-y-4 text-sm font-medium text-gray-600">
            <li><button onClick={() => handleNav('shop')} className="hover:text-pink-500 transition-colors">Shop All</button></li>
            <li><button onClick={() => handleNav('scrunchies')} className="hover:text-pink-500 transition-colors">Scrunchies</button></li>
            <li><button onClick={() => handleNav('claws')} className="hover:text-pink-500 transition-colors">Claws & Clips</button></li>

          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs text-gray-400 mb-6">Support</h4>
          <ul className="space-y-4 text-sm font-medium text-gray-600">
            <li><button onClick={() => handleNav('faq')} className="hover:text-pink-500 transition-colors">FAQ</button></li>
            <li><button onClick={() => handleNav('faq-shipping')} className="hover:text-pink-500 transition-colors">Shipping</button></li>
            <li><button onClick={handleWhatsAppContact} className="hover:text-pink-500 transition-colors">Contact</button></li>
            <li><button onClick={() => handleNav('about')} className="hover:text-pink-500 transition-colors">Privacy</button></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 uppercase tracking-wider">
        <p>&copy; 2026 Scrunchies Villa Inc.</p>
        <div className="flex items-center gap-6">
          <button onClick={() => handleNav('about')} className="hover:text-pink-500 cursor-pointer">Terms</button>
          <button onClick={() => handleNav('about')} className="hover:text-pink-500 cursor-pointer">Privacy</button>
        </div>
      </div>
    </footer>
  );
};