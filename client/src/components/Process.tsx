import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Tell Us Your Requirement',
    description: 'Share your moving needs and preferences with our team.',
  },
  {
    number: '02',
    title: 'Get Your Quote',
    description: 'Receive a transparent and competitive quote for your move.',
  },
  {
    number: '03',
    title: 'Schedule Your Service',
    description: 'Choose a convenient date and time for your relocation.',
  },
  {
    number: '04',
    title: 'Professional Packing & Handling',
    description: 'Our team carefully packs and loads your belongings.',
  },
  {
    number: '05',
    title: 'Safe Delivery / Service Completion',
    description: 'Your items arrive safely at the destination on time.',
  },
];

export default function Process() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSteps(Array.from({ length: steps.length }, (_, i) => i));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 bg-sky-100 rounded-full">
            <span className="text-xs font-semibold text-sky-700 uppercase">Our Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            How Our Service Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A simple and transparent process designed for your convenience.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex gap-6 md:gap-8 mb-8 transition-all duration-500 ${
                visibleSteps.includes(index)
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Timeline Connector */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 h-24 bg-gradient-to-b from-sky-300 to-sky-100 mt-4"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pt-2 pb-8">
                <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
