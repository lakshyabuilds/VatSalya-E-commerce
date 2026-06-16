import { motion } from 'motion/react';
import { Heart, Leaf, ShieldCheck, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-brand-sand min-h-screen pt-12">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-stone-200 rounded-full text-xs font-bold tracking-widest text-brand-dark uppercase mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
          Our Story
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif font-bold text-brand-dark mb-6 leading-tight"
        >
          Rooted in <span className="italic text-brand-green">Ancient Wisdom.</span> <br/>
          Crafted with <span className="italic text-brand-orange">Modern Precision.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-stone-600 leading-relaxed font-sans max-w-2xl mx-auto"
        >
          We believe that the best nourishment for growing babies comes directly from nature. By combining the time-tested benefits of sprouted ragi with natural banana, we've created a wholesome blend that parents can trust.
        </motion.p>
      </section>

      {/* Origin Story */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-sm h-[400px] md:h-[600px]">
                <img 
                  src="/origin.jpeg" 
                  alt="Natural Sprouted Ragi" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-dark/10"></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">
                Why Sprouted Ragi?
              </h2>
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                <p>
                  For generations, ragi (finger millet) has been the cornerstone of a baby's first solid food journey in India. It is naturally rich in calcium and iron, essential for active growth.
                </p>
                <p>
                  However, we don't just use regular ragi. We use <strong>100% Sprouted Ragi</strong>. Sprouting is a traditional technique that naturally breaks down complex starches, neutralizing anti-nutrients. This modern precision means the ragi is significantly easier for tiny tummies to digest and absorb.
                </p>
                <p>
                  To make it perfectly palatable for babies, we blend it with <strong>Natural Banana Powder</strong>. This provides a deliciously mild, natural sweetness without ever needing to rely on refined sugars or artificial flavoring.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-24 bg-brand-dark text-brand-sand relative overflow-hidden">
        {/* Background blobs for mood */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 z-0"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Our Promise to Parents
            </h2>
            <p className="text-brand-beige/80 text-lg leading-relaxed">
              We maintain absolute transparency in every batch we prepare. No hidden ingredients, no confusing scientific names. Just wholesome nutrition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Leaf, title: "100% Natural Ingredients", desc: "Just sprouted ragi and natural banana powder. Nothing else." },
              { icon: ShieldCheck, title: "Zero Added Sugar or Salt", desc: "We never use refined sugars, salts, or artificial preservatives." },
              { icon: GraduationCap, title: "Doctor Recommended", desc: "Crafted to perfectly meet the nutritional needs of infants transitioning to solids." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green-light mb-6 shadow-sm">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-brand-beige/80 leading-relaxed text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-24 text-center bg-brand-sand">
        <div className="max-w-2xl mx-auto px-4">
          <Heart className="w-12 h-12 text-brand-orange mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">
            From our family to yours.
          </h2>
          <p className="text-stone-600 mb-10 leading-relaxed text-lg">
            We understand that feeding your baby is one of the most important responsibilities. We take that trust seriously, ensuring every spoonful is as pure as nature intended.
          </p>
        </div>
      </section>
    </div>
  );
}
