import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { ProductGrid } from './components/ProductGrid';
import { FeatureSection } from './components/FeatureSection';
import { Footer } from './components/Footer';
import { TrustBadges } from './components/TrustBadges';
import { CategorySection } from './components/CategorySection';
import { StylingGuide } from './components/StylingGuide';
import { TestimonialSection } from './components/TestimonialSection';
import { ProfilePage } from './components/ProfilePage';
import { AboutPage } from './components/AboutPage';
import { FAQPage } from './components/FAQPage';
import { Toast } from './components/Toast';
import { Product, CartItem } from './types';

function App() {
  const [view, setView] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleAddToCart = useCallback((product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        quantity: 1,
      }];
    });

    // Show toast
    setToastMessage(product.name);
    setIsToastVisible(true);
  }, []);

  const handleUpdateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  }, []);

  const handleRemoveItem = useCallback((id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-pink-100 selection:text-pink-900">
      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />

      <Header
        onViewChange={setView}
        isLoggedIn={isLoggedIn}
        onLogin={() => setIsLoggedIn(true)}
        onLogout={() => { setIsLoggedIn(false); setView('home'); }}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {view === 'home' && (
        <main>
          <Hero onViewChange={setView} />
          <TrustBadges />
          <CategorySection onViewChange={setView} />
          <Marquee
            text="FREE SHIPPING ON ORDERS OVER $50 • HANDMADE WITH LOVE • SHOP NEW ARRIVALS"
            className="bg-pink-50 text-pink-900"
          />
          <ProductGrid onAddToCart={handleAddToCart} />
          <StylingGuide />
          <FeatureSection />
          <TestimonialSection />
          <Marquee
            text="ELEVATE YOUR HAIR GAME • SCRUNCHIES VILLA • ELEVATE YOUR HAIR GAME • SCRUNCHIES VILLA"
            className="bg-gray-900 text-white"
          />
        </main>
      )}

      {view === 'shop' && <main className="pt-32 min-h-screen px-6"><ProductGrid onAddToCart={handleAddToCart} /></main>}

      {view === 'scrunchies' && <main className="pt-32 min-h-screen px-6"><ProductGrid category="Scrunchies" onAddToCart={handleAddToCart} /></main>}

      {view === 'claws' && <main className="pt-32 min-h-screen px-6"><ProductGrid category="Claws" onAddToCart={handleAddToCart} /></main>}

      {view === 'bows' && <main className="pt-32 min-h-screen px-6"><ProductGrid category="Bows" onAddToCart={handleAddToCart} /></main>}

      {view === 'gifts' && <main className="pt-32 min-h-screen px-6"><ProductGrid category="Gifts" onAddToCart={handleAddToCart} /></main>}

      {view === 'about' && <AboutPage />}

      {view === 'faq' && <FAQPage />}

      {view === 'faq-shipping' && <FAQPage initialCategory={2} />}

      {view === 'profile' && <ProfilePage />}

      <Footer onViewChange={setView} />
    </div>
  );
}

export default App;