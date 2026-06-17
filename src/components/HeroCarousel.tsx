import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, HeartPulse, GraduationCap, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    tag: "Immediate Gain",
    title: "Instant Energy for Active Babies.",
    titleHighlight: "Active Growth",
    description: "Premium, wholesome baby foods naturally sweetened with real banana powder. Precision-crafted for quick nutrient absorption and healthy growth.",
    image: "/slide-one.jpeg", 
    benefits: [
      { icon: ShieldCheck, text: "100% Natural" },
      { icon: HeartPulse, text: "Instant Energy" }
    ]
  },
  {
    id: 2,
    tag: "Who is this for?",
    title: "Perfect for",
    titleHighlight: "6+ Month Olds.",
    description: "Carefully formulated for babies transitioning from milk to solid foods, ensuring a smooth, gag-free eating experience.",
    image: "/slide-two.jpeg",
    benefits: [
      { icon: GraduationCap, text: "Doctor Recommended" },
      { icon: ShieldCheck, text: "Safe Transition" }
    ]
  },
  {
    id: 3,
    tag: "Superior Benefit",
    title: "10x More",
    titleHighlight: "Bioavailable.",
    description: "Unlike regular ragi, our fully sprouted grains unlock essential nutrients, making calcium and iron extremely easy for tiny tummies to absorb.",
    image: "/slide-three.jpeg",
    benefits: [
      { icon: Leaf, text: "100% Sprouted" },
      { icon: HeartPulse, text: "Easy to Digest" }
    ]
  },
  {
    id: 4,
    tag: "The Result",
    title: "Strong Bones.",
    titleHighlight: "Happy Tummy.",
    description: "Watch your baby thrive with stronger bones, healthy weight gain, and peaceful sleep. True holistic wellness starts from within.",
    image: "/slide-four.jpeg",
    benefits: [
      { icon: HeartPulse, text: "Healthy Weight" },
      { icon: ShieldCheck, text: "Strong Immunity" }
    ]
  },
  {
    id: 5,
    tag: "Why & For Whom?",
    title: "Gentle on",
    titleHighlight: "Developing Digestion.",
    description: "Because a 6-month-old's gut is still developing, standard foods can cause gas or colic. Our blend is pre-digested through sprouting.",
    image: "/slide-five.jpeg",
    benefits: [
      { icon: Leaf, text: "Zero Colic" },
      { icon: HeartPulse, text: "No Tummy Aches" }
    ]
  },
  {
    id: 6,
    tag: "What is this?",
    title: "Just Sprouted Ragi",
    titleHighlight: "& Banana.",
    description: "No hidden chemicals, maltodextrin, milk solids, or refined sugars. Just two pure, organic ingredients stone-ground to perfection.",
    image: "/slide-six.jpeg",
    benefits: [
      { icon: ShieldCheck, text: "Zero Additives" },
      { icon: Leaf, text: "100% Organic" }
    ]
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500); // 3.5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-brand-beige">
      <div className="relative w-full aspect-video overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <img 
              src={slides[current].image} 
              alt={slides[current].title} 
              className="w-full h-full object-cover"
            />
            
            {/* Clickable Area for Shopping */}
            <Link to="/products" className="absolute inset-0 z-20">
              <span className="sr-only">Shop Our Collection</span>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-brand-orange' : 'w-4 bg-white/60 hover:bg-white'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
