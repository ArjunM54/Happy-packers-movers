import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Home, Building2, Package, Truck, Warehouse, Zap, Wrench, Shield, FileCheck } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'House Shifting',
    description: 'Reliable and organized household relocation with careful handling of your belongings.',
    icon: Home,
  },
  {
    id: 2,
    title: 'Office & Local Shifting',
    description: 'Professional relocation solutions for offices, shops and local business spaces.',
    icon: Building2,
  },
  {
    id: 3,
    title: 'Packing & Unpacking',
    description: 'Careful packing and systematic unpacking for a smoother moving experience.',
    icon: Package,
  },
  {
    id: 4,
    title: 'Car & Bike Transportation',
    description: 'Safe and convenient transportation solutions for cars and two-wheelers.',
    icon: Truck,
  },
  {
    id: 5,
    title: 'Storage & Warehouse',
    description: 'Secure storage solutions for belongings during your moving or relocation process.',
    icon: Warehouse,
  },
  {
    id: 6,
    title: 'Logistics Services',
    description: 'Dependable logistics and transportation support for different business and personal requirements.',
    icon: Zap,
  },
  {
    id: 7,
    title: 'A-Z Removals & Fittings',
    description: 'Complete removal and fitting assistance to make relocation easier from start to finish.',
    icon: Wrench,
  },
  {
    id: 8,
    title: 'Electrical Works',
    description: 'Professional electrical services for residential, commercial and other requirements.',
    icon: Zap,
  },
  {
    id: 9,
    title: 'Insurance Facility',
    description: 'Insurance-related support for added confidence during transportation and relocation.',
    icon: Shield,
  },
];

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(Array.from({ length: services.length }, (_, i) => i));
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
    <section id="services" ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 bg-sky-100 rounded-full">
            <span className="text-xs font-semibold text-sky-700 uppercase">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Professional Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Complete solutions for moving, logistics and electrical needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`card-premium p-6 flex flex-col transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                  visibleCards.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-sky-600" />
                </div>

                <h3 className="text-lg font-semibold text-primary mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow">{service.description}</p>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-sky-600 text-sky-600 hover:bg-sky-50 btn-smooth"
                  onClick={() => window.location.href = 'tel:+919894525335'}
                >
                  Enquire Now
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
