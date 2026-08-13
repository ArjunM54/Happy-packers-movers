import { useEffect, useRef, useState } from 'react';
import { Users, Lock, Zap, Briefcase, Headphones, MessageSquare } from 'lucide-react';

const features = [
  {
    title: 'Professional Service',
    description: 'Expert team with years of experience in moving and logistics.',
    icon: Users,
  },
  {
    title: 'Safe Handling',
    description: 'Your belongings are treated with utmost care and attention.',
    icon: Lock,
  },
  {
    title: 'Reliable Transportation',
    description: 'Well-maintained vehicles and timely delivery guaranteed.',
    icon: Zap,
  },
  {
    title: 'Complete Moving Solutions',
    description: 'From packing to unpacking, we handle everything for you.',
    icon: Briefcase,
  },
  {
    title: 'Customer Support',
    description: 'Available to assist you at every step of your move.',
    icon: Headphones,
  },
  {
    title: 'Transparent Communication',
    description: 'Clear pricing and honest communication throughout.',
    icon: MessageSquare,
  },
];

export default function WhyChooseUs() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(Array.from({ length: features.length }, (_, i) => i));
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
    <section id="why-us" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 bg-sky-100 rounded-full">
            <span className="text-xs font-semibold text-sky-700 uppercase">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose Happy Packers and Movers & Logistics?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We're committed to making your moving experience smooth, safe, and stress-free.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`card-premium p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                  visibleCards.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
