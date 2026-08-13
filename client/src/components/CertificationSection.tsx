import { useEffect, useRef, useState } from 'react';
import { Award, CheckCircle2, Heart } from 'lucide-react';

export default function CertificationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Main Content */}
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sky-600 to-blue-600 rounded-full mb-6 shadow-lg">
              <Award className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Trusted Service. Professional Commitment.
            </h2>

            <div className="mb-8 p-6 bg-white rounded-xl border-2 border-sky-200 shadow-sm">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <span className="text-xl font-bold text-primary">Certified & Trusted Service Provider</span>
              </div>
              <p className="text-slate-600 text-sm">Professional commitment to your satisfaction</p>
            </div>

            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              We believe in professional service, responsible handling and customer satisfaction. Our commitment to excellence is reflected in every move we make and every service we provide.
            </p>

            {/* Trust Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className={`card-premium p-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Professional Standards</h3>
                <p className="text-sm text-slate-600">We maintain the highest standards of professionalism in all our operations.</p>
              </div>

              <div className={`card-premium p-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Customer Care</h3>
                <p className="text-sm text-slate-600">Your satisfaction and peace of mind are our top priorities.</p>
              </div>

              <div className={`card-premium p-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Quality Assurance</h3>
                <p className="text-sm text-slate-600">Every service is delivered with quality and reliability guaranteed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
