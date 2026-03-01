import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-noir text-cream">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-body text-xl font-light tracking-[0.15em] uppercase mb-4">
              Megan <span className="text-gold font-display italic font-medium">McGill</span>
            </h3>
            <p className="font-body text-cream/50 text-sm leading-relaxed mb-6">
              Orlando's Premier Hair Artist — 19 Years of Elevating Beauty
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/rootsandrowsorl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gold/30 flex items-center justify-center text-cream/60 hover:bg-gold hover:text-noir transition-all"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-gold/30 flex items-center justify-center text-cream/60 hover:bg-gold hover:text-noir transition-all"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-[11px] tracking-[0.2em] uppercase text-gold mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/services', label: 'Services & Pricing' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/booking', label: 'Book Now' },
                { to: '/contact', label: 'Contact' },
              ].map(link => (
                <Link key={link.to} to={link.to} className="font-body text-sm text-cream/50 hover:text-gold transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-[11px] tracking-[0.2em] uppercase text-gold mb-6">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-cream/50 font-body">
              <a href="tel:407-927-1927" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Phone size={14} /> 407-927-1927
              </a>
              <a href="mailto:rootsandrowsorl@gmail.com" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Mail size={14} /> rootsandrowsorl@gmail.com
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                1235 N. Orange Ave. St 201, Orlando, FL 32804
              </div>
              <a
                href="https://instagram.com/rootsandrowsorl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-gold transition-colors"
              >
                <Instagram size={14} /> @rootsandrowsorl
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gold/20 my-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/40 font-body">
          <p>&copy; {new Date().getFullYear()} Megan McGill Hair. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Art · Precision · Transformation</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
