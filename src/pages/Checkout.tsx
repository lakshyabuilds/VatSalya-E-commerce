import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle } from 'lucide-react';

export default function Checkout() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate checkout process
    setTimeout(() => {
      setIsSubmitted(true);
      clearCart();
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-brand-sand px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 rounded-[2rem] shadow-sm max-w-md w-full text-center border border-stone-100"
        >
          <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-brand-green" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Order Confirmed!</h2>
          <p className="text-stone-600 mb-8 leading-relaxed">
            Thank you for choosing Vaatsalya. Your wholesome baby food is being prepared with care and will be shipped shortly.
          </p>
          <Link 
            to="/products"
            className="inline-block bg-brand-green text-white px-8 py-4 rounded-full font-bold hover:bg-brand-green-light transition-colors w-full"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-brand-sand px-4 text-center">
        <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Your Cart is Empty</h2>
        <p className="text-stone-600 mb-8">Please add some products to your cart before checking out.</p>
        <Link 
          to="/products"
          className="bg-brand-green text-white px-8 py-4 rounded-full font-bold hover:bg-brand-green-light transition-colors"
        >
          View Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-sand py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">
            Secure Checkout
          </h1>
          <p className="text-stone-600 text-lg">
            Complete your order and bring traditional wisdom home.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Section */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Shipping Details */}
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100">
                <h3 className="text-2xl font-serif font-bold text-brand-dark mb-6">Shipping Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-brand-dark mb-2">First Name</label>
                    <input required type="text" name="firstName" onChange={handleChange} className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-brand-sand/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-dark mb-2">Last Name</label>
                    <input required type="text" name="lastName" onChange={handleChange} className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-brand-sand/50" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-brand-dark mb-2">Email Address</label>
                    <input required type="email" name="email" onChange={handleChange} className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-brand-sand/50" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-brand-dark mb-2">Street Address</label>
                    <input required type="text" name="address" onChange={handleChange} className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-brand-sand/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-dark mb-2">City</label>
                    <input required type="text" name="city" onChange={handleChange} className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-brand-sand/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-dark mb-2">Zip Code</label>
                    <input required type="text" name="zip" onChange={handleChange} className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-brand-sand/50" />
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100">
                <h3 className="text-2xl font-serif font-bold text-brand-dark mb-6">Payment Method</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-brand-dark mb-2">Card Number</label>
                    <input required type="text" name="cardNumber" placeholder="0000 0000 0000 0000" onChange={handleChange} className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-brand-sand/50 font-mono" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-brand-dark mb-2">Expiry Date</label>
                      <input required type="text" name="expiryDate" placeholder="MM/YY" onChange={handleChange} className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-brand-sand/50 font-mono" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-brand-dark mb-2">CVV</label>
                      <input required type="text" name="cvv" placeholder="123" onChange={handleChange} className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-brand-sand/50 font-mono" />
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full bg-brand-green text-white font-bold py-5 rounded-full hover:bg-brand-green-light transition-colors text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300 flex items-center justify-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                Place Order (₹{totalPrice})
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-brand-dark text-white p-8 rounded-[2rem] sticky top-24 shadow-xl">
              <h3 className="text-2xl font-serif font-bold mb-8">Order Summary</h3>
              
              <div className="space-y-6 mb-8">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-white/10 overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm leading-tight text-white/90">{item.name}</h4>
                      <p className="text-brand-orange-light text-sm font-bold mt-1">Qty: {item.quantity}</p>
                    </div>
                    <div className="font-bold">
                      ₹{item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/20 pt-6 space-y-4">
                <div className="flex justify-between text-white/80">
                  <span>Subtotal</span>
                  <span className="font-bold">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Shipping</span>
                  <span className="font-bold text-brand-green-light">Free</span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-4 border-t border-white/20">
                  <span>Total</span>
                  <span className="text-brand-orange-light">₹{totalPrice}</span>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-3 bg-white/5 p-4 rounded-xl">
                <ShieldCheck className="w-5 h-5 text-brand-green-light flex-shrink-0" />
                <p className="text-xs text-white/70 leading-relaxed">
                  Your transaction is fully encrypted and secure. We maintain the highest standards of data protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
