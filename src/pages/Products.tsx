import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import ProductCard from '../components/ProductCard';
import { products } from '../data';
import { Filter, CalendarHeart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedAge, setSelectedAge] = useState<string>('All');
  
  const categories = useMemo(() => ['All', ...Array.from(new Set(products.map(p => p.category)))], []);
  const ages = useMemo(() => ['All', ...Array.from(new Set(products.map(p => p.age)))], []);

  const filteredProducts = useMemo(() => {
    let filtered = products;
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    if (selectedAge !== 'All') {
      filtered = filtered.filter(p => p.age === selectedAge);
    }
    return filtered;
  }, [selectedCategory, selectedAge]);

  return (
    <div className="flex flex-col w-full bg-brand-sand min-h-screen">
      {/* Page Header */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-stone-200 rounded-full text-xs font-bold tracking-widest text-brand-dark uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-green"></span>
            100% Natural Blends
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-dark mb-6">
            Our Collection
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed font-sans max-w-xl mx-auto">
            Ayurvedic wisdom paired with modern precision to provide wholesome nutrition for your baby's active growth.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-6 mb-12 border-b border-stone-200 pb-8">
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full overflow-hidden">
              <div className="flex items-center gap-2 text-stone-500 font-bold whitespace-nowrap uppercase text-xs tracking-wider md:w-24 flex-shrink-0">
                <Filter className="w-4 h-4" />
                Category
              </div>
              
              <div className="flex gap-2 overflow-x-auto w-full pb-2 md:pb-0 hide-scrollbar justify-start">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-colors whitespace-nowrap flex-shrink-0 ${
                      selectedCategory === category 
                        ? 'bg-brand-green text-white shadow-md' 
                        : 'bg-white text-stone-600 border border-stone-200 hover:border-brand-green hover:text-brand-green'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="text-sm font-bold text-stone-400 hidden xl:block uppercase tracking-wider whitespace-nowrap flex-shrink-0 text-right w-24">
              {filteredProducts.length} Blends
            </div>
          </div>

          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full overflow-hidden">
              <div className="flex items-center gap-2 text-stone-500 font-bold whitespace-nowrap uppercase text-xs tracking-wider md:w-24 flex-shrink-0">
                <Filter className="w-4 h-4" />
                Age
              </div>
              
              <div className="flex gap-2 overflow-x-auto w-full pb-2 md:pb-0 hide-scrollbar justify-start">
                {ages.map((age) => (
                  <button
                    key={age}
                    onClick={() => setSelectedAge(age)}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-colors whitespace-nowrap flex-shrink-0 ${
                      selectedAge === age 
                        ? 'bg-brand-orange text-white shadow-md' 
                        : 'bg-white text-stone-600 border border-stone-200 hover:border-brand-orange hover:text-brand-orange'
                    }`}
                  >
                    {age}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="text-sm font-bold text-stone-400 xl:hidden uppercase tracking-wider whitespace-nowrap flex-shrink-0">
              {filteredProducts.length} Blends
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24">
          {filteredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-stone-500 font-bold">
            No blends found for this category.
          </div>
        )}

      </section>

      {/* Book Consult CTA Section */}
      <section className="py-24 bg-brand-dark text-center relative overflow-hidden">
        {/* Subtle background abstract shape */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/3 z-0"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-green/20 rounded-full blur-[100px] translate-y-1/3 translate-x-1/3 z-0"></div>
        
        <div className="max-w-3xl mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 bg-brand-sand/10 rounded-full flex items-center justify-center text-brand-orange mb-8 outline outline-1 outline-brand-orange/30 outline-offset-8">
             <CalendarHeart className="w-10 h-10" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Not sure where to <span className="italic text-brand-orange">begin?</span>
          </h2>
          <p className="text-brand-beige/80 mb-10 text-base md:text-lg leading-relaxed max-w-xl">
            Every child is unique. Book a free consultation with our pediatric nutrition experts to find the perfect blend for your baby's milestones.
          </p>
          <Link to="/contact" className="w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-brand-orange text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-brand-orange-light transition-all shadow-xl hover:-translate-y-1 duration-300">
             <CalendarHeart className="w-5 h-5" /> Book Free Consult
          </Link>
        </div>
      </section>
    </div>
  );
}
