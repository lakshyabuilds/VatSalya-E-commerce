import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-brand-sand shadow-2xl z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-stone-200">
              <h2 className="text-2xl font-serif font-bold text-brand-dark flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-brand-green" />
                Your Cart
              </h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-stone-500 hover:bg-stone-200 hover:text-brand-dark transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-stone-500 gap-4">
                  <ShoppingBag className="w-16 h-16 text-stone-300" />
                  <p className="text-lg">Your cart is feeling a little light.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-brand-green font-bold underline hover:text-brand-orange transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-white p-4 rounded-2xl border border-stone-100 shadow-sm relative">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-white border border-stone-200 rounded-full flex items-center justify-center text-stone-400 hover:text-red-500 hover:border-red-500 transition-colors shadow-sm"
                    >
                      <X className="w-3 h-3" />
                    </button>
                    
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                    
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-brand-dark text-sm leading-tight mb-1">{item.name}</h3>
                        <p className="text-brand-orange font-bold">₹{item.price}</p>
                      </div>
                      
                      <div className="flex items-center gap-3 bg-brand-sand w-max rounded-full px-2 py-1 mt-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-stone-500 hover:text-brand-green"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-bold text-brand-dark min-w-[1rem] text-center">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-stone-500 hover:text-brand-green"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 bg-white border-t border-stone-200">
                <div className="flex justify-between items-center mb-4 text-lg">
                  <span className="text-stone-600">Subtotal</span>
                  <span className="font-serif text-2xl font-bold text-brand-dark">₹{totalPrice}</span>
                </div>
                <p className="text-xs text-stone-500 mb-6 flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                    <Check className="w-3 h-3" />
                  </span>
                  Taxes included. Free shipping on all orders.
                </p>
                <Link 
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full flex items-center justify-center bg-brand-green text-white font-bold py-4 rounded-full hover:bg-brand-green-light transition-colors"
                >
                  Proceed to Secure Checkout
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Check({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
