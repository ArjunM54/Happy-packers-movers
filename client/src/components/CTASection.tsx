import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="quote-section" className="py-16 md:py-24 bg-gradient-to-r from-sky-600 to-blue-600">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Planning Your Next Move?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Let our team help you move with confidence.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-white text-sky-600 hover:bg-sky-50 btn-smooth font-semibold"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Free Quote
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 btn-smooth font-semibold"
            onClick={() => window.location.href = 'tel:+919894525335'}
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 btn-smooth font-semibold"
            onClick={() => window.open('https://wa.me/919894525335', '_blank')}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp Us
          </Button>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white border border-white/20">
            <Phone className="w-6 h-6 mx-auto mb-3" />
            <p className="text-sm font-semibold mb-2">Phone</p>
            <a href="tel:+919894525335" className="text-sky-100 hover:text-white transition-colors">
              +91 9894525335
            </a>
            <br />
            <a href="tel:+919715898568" className="text-sky-100 hover:text-white transition-colors">
              +91 9715898568
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white border border-white/20">
            <MessageCircle className="w-6 h-6 mx-auto mb-3" />
            <p className="text-sm font-semibold mb-2">WhatsApp</p>
            <a href="https://wa.me/919894525335" target="_blank" rel="noopener noreferrer" className="text-sky-100 hover:text-white transition-colors">
              +91 9894525335
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white border border-white/20">
            <Mail className="w-6 h-6 mx-auto mb-3" />
            <p className="text-sm font-semibold mb-2">Email</p>
            <a href="mailto:happypackersandmoversandlogistics@gmail.com" className="text-sky-100 hover:text-white transition-colors break-all text-xs">
              happypackersandmoversandlogistics@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
