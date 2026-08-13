import { useEffect, useRef, useState } from 'react';

const highlights = [
  {
    number: '01',
    title: 'Safe & Secure Moving',
    icon: '🛡️',
  },
  {
    number: '02',
    title: 'Professional Packing',
    icon: '📦',
  },
  {
    number: '03',
    title: 'Reliable Transportation',
    icon: '🚚',
  },
  {
    number: '04',
    title: 'Complete Service Support',
    icon: '✓',
  },
];

export default function QuickHighlights() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = Array.from({ length: highlights.length }, (_, i) => i);
            setVisibleCards(cards);
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`card-premium p-6 text-center transition-all duration-500 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl font-bold text-sky-600 mb-3">{highlight.number}</div>
              <h3 className="text-lg font-semibold text-primary mb-2">{highlight.title}</h3>
              <div className="text-3xl mb-3">{highlight.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
