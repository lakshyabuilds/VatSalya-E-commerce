import { Mail, Phone, Clock, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-brand-beige min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-brand-dark mb-6 leading-tight">
            Your journey begins with a <span className="italic text-brand-orange">conversation.</span>
          </h1>
          <p className="text-lg text-stone-600">
            Whether you have a question about our products, nutrition information, orders, or partnerships, our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Contact Details */}
          <div className="space-y-6">
            {[
              { icon: MapPin, title: 'Business Address', desc: 'Vaatsalya Baby Foods\nMaharashtra, India' },
              { icon: Phone, title: 'Call Us directly', desc: '+91 98765 43210' },
              { icon: Mail, title: 'Write to us', desc: 'care@vaatsalyafoods.com' },
              { icon: Clock, title: 'Business Hours', desc: 'Monday – Saturday\n9:00 AM – 6:00 PM' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl shadow-sm flex items-start gap-6 border border-stone-100">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex flex-shrink-0 items-center justify-center text-brand-green">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-brand-dark text-lg mb-1">{item.title}</h3>
                  <p className="text-stone-600 whitespace-pre-line text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
            
            {/* Embedded Map */}
            <div className="bg-white p-4 rounded-3xl shadow-sm border border-stone-100 h-[300px] overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.835467657904!2d72.88094621526437!3d19.071060357088924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c897f2ab7bc1%3A0x63351dff6e36d4df!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1689599557448!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '1.5rem' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-stone-100">
             <h3 className="text-2xl font-serif text-brand-dark mb-8">Send us a message</h3>
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                 <div>
                   <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">Full Name</label>
                   <input 
                    type="text" 
                    className="w-full bg-brand-sand border-none rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green transition-all"
                    placeholder="Your name"
                   />
                 </div>
                 <div>
                   <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">Phone Number</label>
                   <input 
                    type="tel" 
                    className="w-full bg-brand-sand border-none rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green transition-all"
                    placeholder="+91"
                   />
                 </div>
               </div>
               
               <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">Email Address</label>
                  <input 
                  type="email" 
                  className="w-full bg-brand-sand border-none rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green transition-all"
                  placeholder="you@example.com"
                  />
               </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">How can we help?</label>
                  <textarea 
                  rows={4}
                  className="w-full bg-brand-sand border-none rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green transition-all"
                  placeholder="Tell us a little about your query..."
                  />
               </div>

               <button type="submit" className="w-full bg-brand-green text-white py-4 rounded-xl font-medium hover:bg-brand-green-light transition-colors shadow-md shadow-brand-green/20 mt-4">
                 Send Message
               </button>
             </form>
          </div>

        </div>

      </div>
    </div>
  );
}
