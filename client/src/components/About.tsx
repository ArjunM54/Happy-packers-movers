import { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
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

  const trustPoints = [
    'Careful Handling',
    'Reliable Service',
    'Customer-Focused Approach',
  ];

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/about-section-image.png"
                alt="Professional moving team"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="inline-block mb-4 px-3 py-1 bg-sky-100 rounded-full">
              <span className="text-xs font-semibold text-sky-700 uppercase">About Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              Moving People. Delivering Trust.
            </h2>

            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Happy Packers and Movers & Logistics is a professional service provider offering reliable relocation, logistics, transportation, storage and electrical solutions across all of India.
            </p>

            <div className="mb-8 p-4 bg-sky-50 rounded-lg border border-sky-100">
              <p className="text-sm font-semibold text-primary">
                Proprietor: <span className="text-sky-600">Anantharaj P</span>
              </p>
            </div>

            <p className="text-slate-700 mb-8 leading-relaxed">
              We focus on safe handling, professional service and customer convenience. Every move is treated with the utmost care and attention to detail, ensuring your belongings reach their destination safely.
            </p>

            {/* Trust Points */}
            <div className="space-y-4">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
