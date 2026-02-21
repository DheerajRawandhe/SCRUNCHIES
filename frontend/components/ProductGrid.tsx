import React from 'react';
import { Product } from '../types';
import { MessageCircle, ShoppingBag } from 'lucide-react';

const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Premium Gift Set', price: 599, category: 'Gifts', image: "/products-images/IMG_20260110_113135.jpg.jpeg", isNew: true },
  { id: '2', name: 'Resin earrings and pendent set', price: 249, category: 'Jewelry', image: "/products-images/Resin-earings.jpeg", isNew: true },
  { id: '3', name: 'Bouquet', price: 199, category: 'Gifts', image: "/products-images/bouqet.jpeg", isNew: true },
  { id: '4', name: 'Silk Srunchie Pack', price: 299, category: 'Scrunchies', image: "/products-images/Snapchat-2083809739.jpg.jpeg" },
  { id: '5', name: 'Luxury Hair Bow', price: 149, category: 'Bows', image: "/products-images/Snapchat-452976067.jpg.jpeg", isNew: true },
  { id: '6', name: 'Satin Scrunchie XL', price: 199, category: 'Scrunchies', image: "/products-images/Snapchat-875984347.jpg.jpeg" },
  { id: '7', name: 'Classic Matte Claw Clip', price: 179, category: 'Claws', image: "/hero-images/c1648052d08c92e7cfb3348b10931d8f.jpg", isNew: true },
  { id: '8', name: 'Pearl Embellished Claw', price: 249, category: 'Claws', image: "/hero-images/51v+tfGg01L._AC_UF1000,1000_QL80_.jpg" },
  { id: '9', name: 'Mini Pastel Claw Set', price: 199, category: 'Claws', image: "/hero-images/images.jpg", isNew: true },
];

interface ProductGridProps {
  category?: string;
  onAddToCart?: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ category, onAddToCart }) => {
  const filteredProducts = category
    ? MOCK_PRODUCTS.filter(p => p.category === category || (category === 'Shop All'))
    : MOCK_PRODUCTS;

  const handleWhatsApp = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const phoneNumber = "916265376564";
    const message = `Hi! I'm interested in the ${product.name}. Is it available?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto bg-white">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-gray-900">{category && category !== 'Shop All' ? category : 'Sweet Arrivals'}</h2>
        <a href="#" className="text-sm font-bold border-b border-gray-300 pb-1 hover:border-pink-500 hover:text-pink-500 transition-colors uppercase hidden sm:block text-gray-500">
          View All Collection
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 mb-6 rounded-xl">
              {product.isNew && (
                <div className="absolute top-4 left-4 bg-white text-pink-500 text-[10px] font-bold px-3 py-1 uppercase tracking-wider z-10 rounded-full shadow-sm">
                  New
                </div>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Quick Add Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col gap-2">
                <button
                  onClick={(e) => handleWhatsApp(e, product)}
                  className="w-full bg-white text-gray-900 py-3 text-xs font-bold uppercase tracking-widest hover:bg-green-50 hover:text-green-700 shadow-lg rounded-lg flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle size={16} className="text-green-600" />
                  Chat to Buy
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart?.(product);
                  }}
                  className="w-full bg-pink-600 text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-pink-700 shadow-lg rounded-lg flex items-center justify-center gap-2 transition-all"
                >
                  <ShoppingBag size={16} />
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold uppercase tracking-tight mb-1 text-gray-900 group-hover:text-pink-500 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-400">{product.category}</p>
              </div>
              <span className="text-lg font-medium text-gray-900">
                {typeof product.price === 'number' ? `₹${product.price}` : product.price}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center sm:hidden">
        <a href="#" className="text-sm font-bold border-b border-gray-300 pb-1 uppercase text-gray-900">
          View All Collection
        </a>
      </div>
    </section>
  );
};