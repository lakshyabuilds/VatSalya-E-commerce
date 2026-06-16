import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-stone-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
               <div className="w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center font-serif text-xl italic">
                V
              </div>
              <span className="font-serif text-2xl font-semibold text-white tracking-tight">
                Vaatsalya<span className="text-brand-orange">.</span>
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-stone-400">
              Nourishing little beginnings with care and quality. We provide wholesome baby foods made with thoughtfully selected ingredients.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Explore</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-brand-orange transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-orange transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-brand-orange transition-colors">Products</Link></li>
              <li><Link to="/nutrition" className="hover:text-brand-orange transition-colors">Nutrition</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/faq" className="hover:text-brand-orange transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-brand-orange transition-colors">Contact Us</Link></li>
              <li><span className="cursor-pointer hover:text-brand-orange transition-colors">Privacy Policy</span></li>
              <li><span className="cursor-pointer hover:text-brand-orange transition-colors">Terms of Service</span></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-stone-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-500">
            © 2026 Vaatsalya Baby Food. All Rights Reserved.
          </p>
          <p className="text-xs text-stone-500 max-w-xl text-center md:text-right">
            Disclaimer: Breastfeeding is best for babies and should be continued for as long as possible. Complementary foods should be introduced at the appropriate age under professional guidance. Product information, ingredients, and nutritional values should always be verified from product packaging.
          </p>
        </div>
      </div>
    </footer>
  );
}
