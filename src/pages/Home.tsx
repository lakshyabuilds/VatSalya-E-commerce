import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, ShieldCheck, HeartPulse, GraduationCap } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, testimonials } from '../data';

export default function Home() {
  const featuredProduct = products.find(p => p.id === 'ragi-banana-single');
  const bestsellerProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-beige py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-stone-200 rounded-full text-xs font-bold tracking-widest text-brand-dark uppercase mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                Traditional Wisdom. Modern Nutrition.
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-semibold text-brand-dark leading-[1.1] mb-6">
                Energy Support for <br/>
                <span className="italic text-brand-orange">active babies.</span>
              </h1>
              <p className="text-lg text-stone-600 mb-8 max-w-lg leading-relaxed">
                Premium, wholesome baby foods naturally sweetened with real banana powder. Grounded in tradition, precision-crafted for healthy growth.
              </p>
              
              <div className="flex items-center gap-6 mb-10 text-brand-dark font-sans font-bold">
                 <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    100% Natural
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    Zero Refined Sugar
                 </div>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4">
                <Link to="/products" className="w-full sm:w-auto justify-center bg-brand-green text-white px-8 py-4 rounded-full font-bold hover:bg-brand-green-light transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300">
                  Shop Our Collection
                </Link>
                <Link to="/about" className="w-full sm:w-auto text-center bg-transparent text-brand-dark border border-stone-300 px-8 py-4 rounded-full font-bold hover:bg-brand-beige transition-colors">
                  Explore The Science
                </Link>
              </div>

              <div className="mt-12 flex gap-8 items-center pt-8 border-t border-stone-200/60 max-w-md">
                <div>
                  <h4 className="font-serif text-3xl font-bold text-brand-dark mb-1">12k+</h4>
                  <p className="text-xs tracking-widest text-stone-500 uppercase font-bold">Happy Babies</p>
                </div>
                <div>
                  <h4 className="font-serif text-3xl font-bold text-brand-dark mb-1">100%</h4>
                  <p className="text-xs tracking-widest text-stone-500 uppercase font-bold">Ayurvedic Roots</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] lg:h-[700px] w-full"
            >
              <div className="absolute inset-0 bg-brand-green/5 rounded-full blur-3xl transform translate-x-12 translate-y-12"></div>
              <img 
                src="/hero.jpeg" 
                alt="Nutritious Bowl of Sprouted Ragi" 
                className="absolute inset-0 w-full h-full object-cover rounded-t-full rounded-bl-full shadow-2xl border-8 border-white"
              />
              {/* Trust Badge overlay */}
              <div className="absolute left-4 md:-left-12 top-4 md:top-1/4 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 animate-bounce-slow">
                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-orange text-white flex items-center justify-center">
                   <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
                 </div>
                 <div>
                   <p className="text-xs font-bold text-stone-500 uppercase">Certified</p>
                   <p className="font-serif font-bold text-brand-dark">Easy to Digest</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-sand relative z-10">
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
                <div className="w-14 h-14 mx-auto rounded-full bg-brand-beige flex items-center justify-center text-brand-green mb-6 shadow-sm">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-brand-dark">{feature.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product */}
      {featuredProduct && (
        <section className="py-24 bg-brand-green text-brand-sand">
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
                  <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
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

      {/* Bestsellers Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-semibold text-brand-dark mb-4">Our Products</h2>
              <p className="text-stone-600">Loved by parents, approved by babies.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestsellerProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-beige overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-brand-dark mb-4">
                Customer Stories
              </h2>
              <p className="text-stone-600">Real feedback from real parents.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <motion.div 
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm relative"
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

      {/* CTA */}
      <section className="py-24 bg-brand-dark text-center relative overflow-hidden">
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
