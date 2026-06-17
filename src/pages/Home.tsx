import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, ShieldCheck, HeartPulse, GraduationCap, Play } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import HeroCarousel from '../components/HeroCarousel';
import { products, testimonials } from '../data';

export default function Home() {
  const featuredProduct = products.find(p => p.id === 'ragi-banana-single');
  const bestsellerProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Carousel */}
      <HeroCarousel />

      {/* 2. Our Products (Bestsellers) */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-serif font-semibold text-brand-dark mb-4">Our Products</h2>
              <p className="text-stone-600">Loved by parents, approved by babies.</p>
            </div>
            <Link to="/products" className="hidden sm:inline-flex items-center gap-2 text-brand-green font-bold hover:text-brand-orange transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {bestsellerProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-10 text-center sm:hidden">
             <Link to="/products" className="inline-flex items-center justify-center gap-2 w-full bg-brand-green text-white py-3 rounded-full font-bold">
               View All Products <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>

      {/* 3. Experts & Mothers Testimonials (Video) */}
      <section className="py-16 lg:py-24 bg-brand-sand overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-6">
                Backed by <span className="italic text-brand-orange">Experts & Mothers.</span>
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                Don't just take our word for it. Listen to what pediatric nutritionists and experienced mothers have to say about the power of sprouted ragi and banana.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
               <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-video bg-stone-900 flex items-center justify-center group cursor-pointer border border-stone-200">
                 {/* Video Placeholder Image */}
                 <img src="https://placehold.co/1280x720/1a1a1a/ffffff/webp?text=YouTube+Video+Placeholder" alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                 <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply"></div>
                 
                 {/* Play Button */}
                 <div className="relative z-10 w-20 h-20 bg-brand-green/90 rounded-full flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <Play className="w-8 h-8 fill-current ml-1" />
                 </div>
               </div>
               
               <div className="space-y-6">
                 <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                   <div className="flex items-center gap-4 mb-4">
                     <img src="https://placehold.co/100x100/e6e3da/2b3c2a/webp?text=Dr" alt="Doctor" className="w-16 h-16 rounded-full object-cover border-2 border-brand-green/20" />
                     <div>
                       <h4 className="font-bold text-brand-dark font-serif text-xl">Dr. Aditi Sharma</h4>
                       <p className="text-sm text-brand-orange font-medium">Pediatric Nutritionist</p>
                     </div>
                   </div>
                   <p className="text-stone-700 italic leading-relaxed">
                     "Sprouting grains drastically reduces anti-nutrients like phytic acid. This means the iron and calcium inherent in the ragi become much more bioavailable for the baby. Combining it with banana adds a natural prebiotic benefit."
                   </p>
                 </div>
               </div>
            </div>
        </div>
      </section>

      {/* 4. A Mother's First Choice */}
      <section className="py-16 lg:py-24 bg-brand-green/5 overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-dark mb-6 leading-tight">
                    Why we are a <br />
                    <span className="italic text-brand-green">Mother's First Choice.</span>
                  </h2>
                  <p className="text-stone-600 text-lg leading-relaxed mb-6">
                    Every mother wants the absolute best for her child. When it comes to their first foods, the transition from milk to solids is a critical milestone. Vaatsalya is crafted to make this journey safe, nourishing, and joyful.
                  </p>
                  <p className="text-stone-600 text-lg leading-relaxed">
                    Inspired by ancient Indian traditions and backed by modern nutritional science, our sprouted ragi blends provide the exact essential nutrients — like calcium, iron, and protein — that a 6-month-old needs to thrive, without any hidden sugars, preservatives, or artificial colors.
                  </p>
                </div>

                <ul className="space-y-4">
                  {[
                    "Gentle on a baby's developing digestive system.",
                    "Rich in natural calcium for strong bones and teeth.",
                    "100% free from toxins, chemicals, and preservatives.",
                    "Loved by babies for its natural, comforting taste.",
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center shrink-0 mt-1">
                        <HeartPulse className="w-3.5 h-3.5 text-brand-green" />
                      </div>
                      <span className="text-stone-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-brand-orange/10 mix-blend-multiply z-10" />
                <img 
                  src="/mom.jpeg" 
                  alt="Indian Mother wearing soft green feeding her 6-month-old baby boy with a spoon" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
            </div>
         </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="py-16 lg:py-24 bg-brand-beige relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">
              Ancient Wisdom. <span className="italic text-brand-orange">Modern Precision.</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              At Vaatsalya, we bridge traditional holistic healing with modern clinical reliability. We use 100% sprouted ragi for easy digestion and natural banana powder for sweetness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: 'No Added Sugar', desc: 'Naturally sweetened purely with real banana powder.' },
              { icon: GraduationCap, title: 'Sprouted Ragi', desc: 'Easier to digest and naturally nutrient dense for active growth.' },
              { icon: HeartPulse, title: 'Gentle Care', desc: 'Perfectly smooth texture for safe transition to solids.' },
              { icon: ShieldCheck, title: '100% Secure', desc: '100% natural ingredients. Zero artificial flavours, colors, or salts.' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-brand-sand flex items-center justify-center text-brand-green mb-6 shadow-sm">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-brand-dark">{feature.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Featured Product */}
      {featuredProduct && (
        <section className="py-16 lg:py-24 bg-brand-green text-brand-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-3xl overflow-hidden aspect-square relative"
              >
                <img 
                  src={featuredProduct.image} 
                  alt={featuredProduct.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
              
              <div className="space-y-8">
                <div>
                  <span className="text-brand-orange-light font-medium tracking-wide uppercase text-sm mb-3 block">
                    Featured Product
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6">
                    {featuredProduct.name}
                  </h2>
                  <p className="text-brand-sand/80 text-lg leading-relaxed mb-8">
                    {featuredProduct.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-xl">Benefits</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {featuredProduct.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-orange-light shrink-0" />
                        <span className="text-brand-sand/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 flex items-center gap-6">
                  <Link 
                    to={`/products/${featuredProduct.id}`}
                    className="bg-brand-orange text-white px-8 py-4 rounded-full font-medium hover:bg-brand-orange-light transition-colors flex items-center gap-2"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7. Customer Stories */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-brand-dark mb-4">
                Customer Stories
              </h2>
              <p className="text-stone-600">Real feedback from real parents.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, i) => (
                <motion.div 
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-brand-sand p-8 rounded-3xl shadow-sm relative"
                >
                  <div className="text-brand-orange text-4xl font-serif leading-none absolute top-6 left-6 opacity-20">"</div>
                  <p className="text-stone-700 italic mb-6 relative z-10 leading-relaxed pt-4">
                    "{testimonial.text}"
                  </p>
                  <div className="mt-auto">
                    <p className="font-semibold text-brand-dark">{testimonial.author}</p>
                    <p className="text-xs text-stone-500 uppercase tracking-widest mt-1">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
         </div>
      </section>

      {/* 8. CTA */}
      <section className="py-16 lg:py-24 bg-brand-dark text-center relative overflow-hidden">
        {/* Subtle background abstract shape */}
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-brand-green/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 z-0"></div>
        <div className="absolute bottom-0 left-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-brand-orange/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/2 z-0"></div>
        
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Nourishing your baby's <span className="italic text-brand-orange">holistic health.</span>
          </h2>
          <p className="text-brand-beige/80 mb-10 text-base md:text-lg leading-relaxed">
            Ensure your baby gets the healthiest start with our 100% natural sprouted ragi blend. Backed by science, grounded in tradition.
          </p>
          <Link to="/products" className="inline-block w-full sm:w-auto bg-brand-green text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-brand-green-light transition-all shadow-xl hover:-translate-y-1 duration-300">
            Book Free Consult or Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}
