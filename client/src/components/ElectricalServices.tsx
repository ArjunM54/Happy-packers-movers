import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

export default function ElectricalServices() {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/electrical-services-visual.png"
                alt="Professional electrical services"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="inline-block mb-4 px-3 py-1 bg-sky-100 rounded-full">
              <span className="text-xs font-semibold text-sky-700 uppercase">Electrical Services</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              Electrical Services You Can Depend On
            </h2>

            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              We provide comprehensive electrical services for residential, commercial, and industrial requirements. Our professional team ensures safe, reliable, and high-quality electrical work.
            </p>

            {/* Service Areas */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Zap className="w-4 h-4 text-sky-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Electrical Installation</h4>
                  <p className="text-sm text-slate-600">Professional installation of electrical systems and fixtures.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Zap className="w-4 h-4 text-sky-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Wiring & Maintenance</h4>
                  <p className="text-sm text-slate-600">Expert wiring solutions and regular maintenance services.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Zap className="w-4 h-4 text-sky-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Lighting Solutions</h4>
                  <p className="text-sm text-slate-600">Modern lighting design and installation for any space.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Zap className="w-4 h-4 text-sky-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Residential & Commercial Work</h4>
                  <p className="text-sm text-slate-600">Complete electrical solutions for homes and businesses.</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-sky-600 hover:bg-sky-700 text-white btn-smooth"
              onClick={() => window.location.href = 'tel:+919894525335'}
            >
              Enquire About Electrical Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
