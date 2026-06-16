import { useParams, Link } from 'react-router-dom';
import { products } from '../data';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Check, ShoppingCart, Info, Utensils, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const [activeTab, setActiveTab] = useState<'benefits' | 'ingredients' | 'preparation' | 'nutrition'>('benefits');
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif text-brand-dark mb-4">Product not found</h2>
        <Link to="/products" className="text-brand-green hover:text-brand-orange underline">
          Return to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const tabs = [
    { id: 'benefits', label: 'Benefits', icon: ShieldCheck },
    { id: 'ingredients', label: 'Ingredients', icon: Info },
    { id: 'preparation', label: 'Preparation', icon: Utensils },
    { id: 'nutrition', label: 'Nutrition', icon: Info },
  ] as const;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/products" className="inline-flex items-center gap-2 text-stone-500 hover:text-brand-green mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl overflow-hidden bg-brand-beige aspect-square relative"
          >
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-4">
               <span className="inline-block bg-brand-beige text-brand-green text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 border border-brand-green/20">
                Suitable for: {product.age}
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-brand-dark mb-4 leading-tight">
                {product.name}
              </h1>
              <p className="text-xl font-medium text-brand-orange mb-6">
                ₹{product.price}
              </p>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                {product.description}
              </p>
            </div>

            <ul className="space-y-3 mb-10">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-brand-green/10 flex flex-shrink-0 items-center justify-center text-brand-green">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-stone-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              {/* Quantity Selector */}
              <div className="flex items-center border border-stone-200 rounded-full bg-white px-4">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone-500 hover:text-brand-green text-xl transition-colors"
                >
                  -
                </button>
                <span className="w-8 text-center font-bold text-brand-dark">{quantity}</span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone-500 hover:text-brand-green text-xl transition-colors"
                >
                  +
                </button>
              </div>

              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-brand-green text-white px-8 py-4 rounded-full font-medium hover:bg-brand-green-light transition-colors flex justify-center items-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" /> Add to Cart
              </button>
            </div>
            <p className="text-xs text-stone-400 mt-6 text-center sm:text-left">
              *Refer to product label for precise information. Store in a cool, dry place. Keep the pack tightly sealed after opening.
            </p>
          </motion.div>
        </div>

        {/* Detailed Info Section */}
        <div className="bg-brand-sand rounded-[2rem] p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            {/* Tabs */}
            <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-12 border-b border-stone-200 pb-px">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 text-lg font-serif transition-colors whitespace-nowrap relative ${
                      activeTab === tab.id ? 'text-brand-green font-semibold' : 'text-stone-500 hover:text-brand-dark'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-green"
                      />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === 'benefits' && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-serif text-brand-dark mb-6">Why is this great for your baby?</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {product.benefits.map((benefit, i) => (
                           <li key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex items-start gap-4">
                             <div className="w-8 h-8 rounded-full bg-brand-orange-light/20 flex flex-shrink-0 items-center justify-center text-brand-orange">
                              <Check className="w-4 h-4" />
                            </div>
                            <span className="text-stone-700 font-medium">{benefit}</span>
                           </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeTab === 'ingredients' && (
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
                      <h3 className="text-2xl font-serif text-brand-dark mb-6">Carefully Selected Ingredients</h3>
                      <p className="text-lg text-stone-700 leading-relaxed font-medium">
                        {product.ingredients}
                      </p>
                      <div className="mt-8 pt-8 border-t border-stone-100">
                        <p className="text-sm text-stone-500 italic">
                          Our recipes combine traditional goodness with zero added sugar or salts to create products parents can trust.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'preparation' && (
                    <div>
                      <h3 className="text-2xl font-serif text-brand-dark mb-8">Preparation Instructions</h3>
                      <div className="space-y-6">
                        {product.preparation.map((step, i) => (
                          <div key={i} className="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                            <div className="font-serif text-2xl font-bold text-brand-green/30 w-8">
                              {i + 1}
                            </div>
                            <p className="text-stone-700 text-lg flex-1 pt-1">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'nutrition' && (
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
                       <h3 className="text-2xl font-serif text-brand-dark mb-8">Nutritional Value</h3>
                       <div className="overflow-x-auto">
                         <table className="w-full text-left border-collapse">
                           <thead>
                             <tr className="border-b-2 border-stone-100">
                               <th className="py-4 text-stone-500 font-medium uppercase tracking-wider text-sm w-1/2">Nutrient</th>
                               <th className="py-4 text-stone-500 font-medium uppercase tracking-wider text-sm text-right">Amount (approx)</th>
                             </tr>
                           </thead>
                           <tbody className="divide-y divide-stone-100">
                             {product.nutrition.map((item, i) => (
                               <tr key={i} className="hover:bg-brand-sand/50 transition-colors">
                                 <td className="py-4 font-medium text-brand-dark">{item.label}</td>
                                 <td className="py-4 text-brand-orange font-medium text-right">{item.value}</td>
                               </tr>
                             ))}
                           </tbody>
                         </table>
                         <p className="text-xs text-stone-400 mt-6">Values are approximate and may vary slightly based on natural ingredient variations.</p>
                       </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
