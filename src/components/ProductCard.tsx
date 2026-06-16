import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  key?: React.Key;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col h-full"
    >
      <Link to={`/products/${product.id}`} className="block relative aspect-square overflow-hidden bg-brand-sand">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur text-brand-dark border border-stone-200 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {product.age}
          </span>
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <p className="text-[10px] font-bold text-brand-orange uppercase tracking-wider mb-2">
            {product.category}
          </p>
          <Link to={`/products/${product.id}`}>
            <h3 className="font-serif text-xl font-bold text-brand-dark mb-2 leading-tight group-hover:text-brand-green transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-stone-500 text-sm line-clamp-2 mt-2 leading-relaxed">
             {product.description}
          </p>
        </div>
        
        <div className="mt-6 flex items-center justify-between pt-6 border-t border-stone-100">
          <p className="font-serif text-2xl font-bold text-brand-dark">
            ₹{product.price}
          </p>
          <button 
            onClick={handleAddToCart}
            className="flex items-center justify-center w-12 h-12 bg-brand-sand hover:bg-brand-green hover:text-white text-brand-dark rounded-full transition-all hover:-translate-y-0.5 duration-300"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
