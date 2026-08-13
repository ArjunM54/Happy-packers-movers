import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Home Relocation",
    text: "The team at Happy Packers was exceptionally professional. They packed all our fragile items with great care and the delivery was on time without a single scratch. Highly recommended for long-distance moves!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sneha Reddy",
    role: "Office Shifting",
    text: "We used their services for relocating our entire office setup to a new IT park. The coordination was seamless, and the electrical team helped set up our workstations quickly. Excellent end-to-end service.",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Vehicle Transport",
    text: "I was worried about moving my car from Coimbatore to Bangalore, but Happy Packers handled it perfectly. Constant updates and very transparent pricing. Will definitely use them again.",
    rating: 4,
  },
  {
    id: 4,
    name: "Priya Menon",
    role: "Local Shifting",
    text: "Very polite staff and efficient packing. What usually takes a whole day was completed in just a few hours. The unpacking service saved us so much time and effort.",
    rating: 5,
  },
];

export default function Testimonials() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container">
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4 px-3 py-1 bg-sky-100 rounded-full">
            <span className="text-xs font-semibold text-sky-700 uppercase">Client Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-slate-600">
            Real experiences from people who trusted us with their moving and logistics needs.
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto px-4 sm:px-12"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-2xl h-full flex flex-col hover:shadow-lg transition-shadow duration-300 relative">
                    <Quote className="absolute top-6 right-6 w-10 h-10 text-sky-100" />
                    
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-slate-200 text-slate-200'}`}
                        />
                      ))}
                    </div>
                    
                    <p className="text-slate-700 italic flex-grow mb-6 relative z-10 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="mt-auto flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-primary flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary text-sm">{testimonial.name}</h4>
                        <p className="text-xs text-slate-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious className="-left-4 lg:-left-12 bg-white text-primary border-slate-200 hover:bg-sky-50 hover:text-sky-600 shadow-md" />
              <CarouselNext className="-right-4 lg:-right-12 bg-white text-primary border-slate-200 hover:bg-sky-50 hover:text-sky-600 shadow-md" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
