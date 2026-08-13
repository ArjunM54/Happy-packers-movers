import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect shadow-md py-3'
          : 'bg-white py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <img src="/logo-icon.png" alt="Happy Packers Logo" className="w-10 h-10 object-contain bg-white rounded-md p-1" />
          <div className="hidden sm:block">
            <h1 className="text-sm font-bold text-primary leading-tight">Happy Packers</h1>
            <p className="text-xs text-slate-600">& Logistics</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-sky-600 text-sky-600 hover:bg-sky-50"
            onClick={() => window.location.href = 'tel:+919894525335'}
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
          <Button
            size="sm"
            className="bg-sky-600 hover:bg-sky-700 text-white"
            onClick={() => document.getElementById('quote-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Free Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top-2">
          <div className="container py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm font-medium text-slate-700 hover:text-sky-600 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 space-y-2 border-t border-slate-100">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-sky-600 text-sky-600 hover:bg-sky-50"
                onClick={() => window.location.href = 'tel:+919894525335'}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button
                size="sm"
                className="w-full bg-sky-600 hover:bg-sky-700 text-white"
                onClick={() => document.getElementById('quote-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
