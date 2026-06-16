import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-800 bg-brand-sand relative">
      <Navbar />
      <CartDrawer />
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/1234567890?text=Hello%20Vaatsalya%20Baby%20Foods" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12.003 2.016C6.483 2.016 2.003 6.496 2.003 12.016c0 1.956.543 3.791 1.498 5.352L2 22l4.821-1.46c1.514.887 3.262 1.393 5.12 1.393 5.52 0 10.06-4.48 10.06-10.003h-1.014c0 4.96-4.04 9.003-9.004 9.003-1.684 0-3.263-.464-4.63-1.264l-.33-.196-3.155.955.972-3.076-.216-.343a8.956 8.956 0 01-1.396-4.832c0-4.964 4.045-9.006 9.008-9.006A9.014 9.014 0 0121 12.016h1.002c0-5.52-4.48-10-10-10z" />
          <path d="M16.985 14.195c-.244-.122-1.442-.71-1.666-.793-.223-.082-.387-.122-.55.122-.163.245-.63 .794-.772.955-.143.163-.284.183-.528.061-.244-.122-1.026-.378-1.955-1.205-.724-.645-1.213-1.443-1.356-1.688-.143-.244-.015-.377.107-.499.11-.11.244-.285.366-.427.123-.143.163-.245.244-.407.082-.163.041-.306-.02-.428-.061-.122-.55-1.325-.753-1.814-.199-.47-.4-.408-.55-.415l-.468-.008c-.163 0-.427.061-.652.306-.224.244-.855.836-.855 2.039s.876 2.365.998 2.528c.122.163 1.724 2.63 4.17 3.684 2.052.885 2.443.713 2.89.673.447-.041 1.442-.59 1.645-1.161.203-.571.203-1.06.143-1.16-.061-.102-.224-.163-.468-.285z" />
        </svg>
      </a>
    </div>
  );
}
