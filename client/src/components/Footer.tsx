import { Phone, Mail, MapPin, MessageCircle, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/happy-logo.jpeg" 
                alt="Happy Packers Logo" 
                className="h-10 w-auto object-contain bg-white rounded p-1 flex-shrink-0" 
              />
              <div>
                <h3 className="font-bold text-sm leading-tight text-white">Happy packers and Movers</h3>
                <p className="text-xs text-sky-200">& Logistics</p>
              </div>
            </div>
            <p className="text-sm text-sky-100 leading-relaxed">
              Professional moving and logistics services for Coimbatore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-sky-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-sky-100 hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-sky-100 hover:text-white transition-colors">Services</a></li>
              <li><a href="#why-us" className="text-sky-100 hover:text-white transition-colors">Why Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-sky-100 hover:text-white transition-colors">House Shifting</a></li>
              <li><a href="#services" className="text-sky-100 hover:text-white transition-colors">Office Shifting</a></li>
              <li><a href="#services" className="text-sky-100 hover:text-white transition-colors">Logistics</a></li>
              <li><a href="#services" className="text-sky-100 hover:text-white transition-colors">Electrical Works</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+919894525335" className="text-sky-100 hover:text-white transition-colors block">
                    +91 9894525335
                  </a>
                  <a href="tel:+919715898568" className="text-sky-100 hover:text-white transition-colors block">
                    +91 9715898568
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:happypackersandmoversandlogistics@gmail.com" className="text-sky-100 hover:text-white transition-colors break-all">
                  happypackersandmoversandlogistics@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p className="text-sky-100">
                  Kurumbapalayam, Coimbatore - 641 107
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Instagram className="w-4 h-4 mt-0.5 flex-shrink-0 text-pink-400" />
                <a 
                  href="https://www.instagram.com/happypackersmovers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sky-100 hover:text-white transition-colors break-all"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-sky-400/30 pt-8">
          {/* Proprietor Info */}
          <div className="mb-6 pb-6 border-b border-sky-400/30">
            <p className="text-sm text-sky-100">
              <span className="font-semibold">Proprietor:</span> Anantharaj P
            </p>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-sky-100 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Happy Packers and Movers & Logistics. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/919894525335"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors text-sm font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/happypackersmovers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-90 rounded-lg transition-opacity text-sm font-medium text-white shadow-sm"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
