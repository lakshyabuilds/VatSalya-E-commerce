import { motion } from 'motion/react';

export default function Nutrition() {
  return (
    <div className="bg-brand-sand min-h-screen">
      {/* Header */}
      <section className="py-20 lg:py-24 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-brand-dark mb-6">
          The Science of <span className="italic text-brand-orange">First Bites</span>
        </h1>
        <p className="text-lg text-stone-600 leading-relaxed font-serif">
          Simple, wholesome ingredients for your baby's weaning journey.
        </p>
      </section>

      {/* Grid Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Ingredient List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 lg:p-16 rounded-[2.5rem] shadow-sm mb-12 border border-stone-100"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-green mb-4">What's Inside</h2>
            <h3 className="text-3xl font-serif text-brand-dark mb-8">Basic Ingredient List</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-brand-beige/40 p-8 rounded-3xl">
                <h4 className="text-xl font-bold text-brand-dark mb-3">1. 100% Sprouted Ragi</h4>
                <p className="text-stone-600 leading-relaxed">
                  The foundation of our blend. Sprouting unlocks nutrients and breaks down starches, making it incredibly easy for tiny stomachs to digest.
                </p>
              </div>
              <div className="bg-brand-beige/40 p-8 rounded-3xl">
                <h4 className="text-xl font-bold text-brand-dark mb-3">2. Natural Banana Powder</h4>
                <p className="text-stone-600 leading-relaxed">
                  Provides a deliciously natural, mild sweetness without the need for any added refined sugars or artificial flavoring.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-bold text-stone-500 uppercase tracking-wider">
              <span className="bg-brand-sand px-4 py-2 rounded-full border border-stone-200">No Added Sugar</span>
              <span className="bg-brand-sand px-4 py-2 rounded-full border border-stone-200">No Added Salt</span>
              <span className="bg-brand-sand px-4 py-2 rounded-full border border-stone-200">No Preservatives</span>
              <span className="bg-brand-sand px-4 py-2 rounded-full border border-stone-200">No Artificial Flavors</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[2.5rem] shadow-sm"
          >
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-4">Foundation</h2>
            <h3 className="text-3xl font-serif text-brand-dark mb-6">Complementary Feeding</h3>
             <p className="text-stone-600 leading-relaxed mb-4">
              Around six months of age, babies begin requiring additional foods alongside breast milk or formula.
            </p>
             <p className="text-stone-600 leading-relaxed mb-6">
              Introducing nutritious complementary foods helps support rapid growth and development while allowing babies to explore exciting new tastes and textures. It is a critical window for establishing healthy eating habits for life.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-10 rounded-[2.5rem] shadow-sm"
          >
             <h2 className="text-xs font-bold uppercase tracking-widest text-brand-green mb-4">Core Ingredient</h2>
            <h3 className="text-3xl font-serif text-brand-dark mb-6">Why Ragi?</h3>
             <p className="text-stone-600 leading-relaxed mb-4">
              Ragi (finger millet) has long been valued in traditional diets for its incredibly dense nutritional profile.
            </p>
            <ul className="space-y-3 text-stone-600">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                Naturally nutrient-rich grain
              </li>
               <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                Excellent source of sustained energy
              </li>
               <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                High in Calcium for bone development
              </li>
               <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                Easy on tiny digestive systems when sprouted
              </li>
            </ul>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-[#F6EDDF] p-10 lg:p-16 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1">
              <h2 className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-4">Natural Flavor</h2>
              <h3 className="text-3xl font-serif text-brand-dark mb-6">Why Banana?</h3>
              <p className="text-stone-700 leading-relaxed mb-4">
                Banana adds incredible natural taste and makes cereals infinitely more enjoyable for many babies beginning their solids journey. Its naturally pleasant flavor can help make the transition to solid foods easier.
              </p>
            </div>
             <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-8 border-white shadow-lg">
                <img src="https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=400&q=80" alt="Bananas" className="w-full h-full object-cover" />
             </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
