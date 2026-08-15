import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const floatingCards = [
    { label: 'Safe Moving', delay: 0 },
    { label: 'Professional Service', delay: 100 },
    { label: 'End-to-End Support', delay: 200 },
  ];

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-sky-50 rounded-full border border-sky-100">
              <div className="w-2 h-2 bg-sky-600 rounded-full" />
              <span className="text-xs font-semibold text-sky-700 uppercase tracking-wide">Professional Packers & Movers in Coimbatore</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Packers and Movers in <span className="text-sky-600">Coimbatore</span>
            </h1>

            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              Happy Packers and Movers & Logistics provides reliable packing, house shifting, office relocation and logistics services from Coimbatore to destinations across India.
            </p>
            <p className="text-base text-slate-600 mb-8 leading-relaxed">
              From careful packing and loading to transportation and delivery, our moving solutions are designed for homes, offices and businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-sky-600 hover:bg-sky-700 text-white btn-smooth"
                onClick={() => document.getElementById('quote-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-sky-600 text-sky-600 hover:bg-sky-50 btn-smooth"
                onClick={() => window.location.href = 'tel:+919894525335'}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us Now
              </Button>
            </div>

            <div className="flex justify-center sm:justify-start">
              <button
                onClick={() => window.open('https://wa.me/919894525335', '_blank')}
                className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-primary">Trusted Moving & Logistics Service</p>
                  <p className="text-sm text-slate-600">Serving Coimbatore and customers across India</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
              <img
                src="/hero-moving-composition.png"
                alt="Packers and movers in Coimbatore providing house shifting and logistics services across India"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <div className="space-y-4">
              {floatingCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-lg border border-slate-100 animate-float"
                  style={{ animationDelay: `${card.delay}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 001.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-semibold text-primary">{card.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
