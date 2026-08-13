import { useEffect, useRef, useState } from 'react';
import { MapView } from '@/components/Map';
import { MapPin } from 'lucide-react';

export default function CoverageMap() {
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

  const handleMapReady = (map: google.maps.Map) => {
    // Array of major service locations
    const locations = [
      { name: 'Coimbatore', lat: 11.0168, lng: 76.9558 },
      { name: 'Chennai', lat: 13.0827, lng: 80.2707 },
      { name: 'Bangalore', lat: 12.9716, lng: 77.5946 },
      { name: 'Mumbai', lat: 19.0760, lng: 72.8777 },
      { name: 'Delhi', lat: 28.7041, lng: 77.1025 },
      { name: 'Hyderabad', lat: 17.3850, lng: 78.4867 },
      { name: 'Pune', lat: 18.5204, lng: 73.8567 },
    ];

    locations.forEach((loc) => {
      new google.maps.marker.AdvancedMarkerElement({
        map,
        position: { lat: loc.lat, lng: loc.lng },
        title: loc.name,
      });
    });
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        <div className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4 px-3 py-1 bg-sky-100 rounded-full">
            <span className="text-xs font-semibold text-sky-700 uppercase">Our Coverage</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Service Coverage Across India
          </h2>
          <p className="text-slate-600">
            We provide our premier packers and movers, as well as logistics services, spanning major hubs and covering destinations pan-India.
          </p>
        </div>

        <div className={`bg-white p-2 md:p-4 rounded-2xl shadow-xl border border-slate-100 overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative rounded-xl overflow-hidden">
            <MapView
              initialCenter={{ lat: 20.5937, lng: 78.9629 }} // Center of India
              initialZoom={5}
              onMapReady={handleMapReady}
              className="h-[400px] md:h-[600px] w-full"
            />
            
            {/* Overlay Info Card */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-slate-100 max-w-xs hidden sm:block">
              <h3 className="font-semibold text-primary flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-sky-600" />
                Nationwide Reach
              </h3>
              <p className="text-sm text-slate-600">
                From our base in Coimbatore, our reliable fleet network connects all major metropolitan cities and their surrounding regions seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
