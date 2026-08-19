import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, X, CheckCircle } from 'lucide-react';

const certificates = [
  {
    src: '/gst_proof.png',
    alt: 'GST Registration Proof (Form REG-06)',
    title: 'Government GST Certificate',
    description: 'Official Goods and Services Tax registration certificate issued by the Government of India.',
  },
  {
    src: '/gst_owner.png',
    alt: 'GST Proprietor Details / Tax Office Copy',
    title: 'Proprietor & Registration Details',
    description: 'Document verifying business establishment details and authorized signatory registration.',
  },
];

export default function GstCertificates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  // Auto-play the slides every 6 seconds unless zoomed or interacted with
  useEffect(() => {
    const timer = setInterval(() => {
      if (!zoomImage) {
        setActiveIndex((prev) => (prev === 0 ? 1 : 0));
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [zoomImage]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 bg-green-50 rounded-full border border-green-200">
            <CheckCircle className="w-3.5 h-3.5 text-green-600" />
            <span className="text-xs font-semibold text-green-700 uppercase tracking-wider">Verified Business</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            GST Registration Certificates
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Authorized by the Govt. of India. Review our legal registration proofs and proprietor verification below.
          </p>
        </div>

        {/* Carousel & Document Wrapper */}
        <div className="relative max-w-3xl mx-auto">
          {/* Main Visual Display */}
          <div className="relative aspect-[4/3] md:aspect-[16/11] bg-white rounded-2xl shadow-lg border border-slate-200/80 overflow-hidden group">
            {/* The active slide image */}
            <div className="w-full h-full flex items-center justify-center p-3 sm:p-5 bg-slate-100/50">
              <img
                src={certificates[activeIndex].src}
                alt={certificates[activeIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-sm bg-white cursor-zoom-in transition-all duration-300 hover:scale-[1.01]"
                onClick={() => setZoomImage(certificates[activeIndex].src)}
              />
            </div>

            {/* Tap to Zoom Overlay Link */}
            <button
              onClick={() => setZoomImage(certificates[activeIndex].src)}
              className="absolute top-4 right-4 bg-primary/80 hover:bg-sky-600 text-white rounded-full p-2.5 shadow-md flex items-center gap-1.5 text-xs font-medium backdrop-blur-sm transition-all duration-200 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 hover:scale-105"
              aria-label="Zoom in Certificate"
            >
              <ZoomIn className="w-4 h-4" />
              <span className="hidden sm:inline">Click to Zoom</span>
            </button>

            {/* Left Nav Button */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-sky-600 hover:text-white text-slate-800 flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105 border border-slate-200 z-10"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Nav Button */}
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-sky-600 hover:text-white text-slate-800 flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105 border border-slate-200 z-10"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-0 inset-x-0 bg-slate-900/90 text-white p-3 sm:p-4 text-center backdrop-blur-sm">
              <h3 className="text-sm sm:text-base font-bold text-sky-400">
                {certificates[activeIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 mt-1 select-none">
                {certificates[activeIndex].description}
              </p>
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {certificates.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? 'bg-sky-600 w-8'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      {zoomImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-4"
          onClick={() => setZoomImage(null)}
        >
          {/* Top Bar inside Lightbox */}
          <div className="w-full max-w-5xl flex items-center justify-between text-white mb-3" onClick={(e) => e.stopPropagation()}>
            <span className="text-sm font-semibold tracking-wide text-slate-300">
              Tax Document Viewer
            </span>
            <button
              onClick={() => setZoomImage(null)}
              className="bg-red-600/90 hover:bg-red-700 text-white p-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-md flex items-center gap-1 text-xs"
            >
              <X className="w-5 h-5" />
              <span>Close View</span>
            </button>
          </div>

          {/* Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={zoomImage}
              alt="Zoomed tax certification doc"
              className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg border border-slate-800 bg-white"
            />
          </div>

          {/* Click anywhere to close caption */}
          <p className="text-slate-400 text-xs mt-3 select-none">
            Click outside the image to close the document view.
          </p>
        </div>
      )}
    </section>
  );
}
