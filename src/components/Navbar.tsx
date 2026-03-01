import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const leftLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
];

const rightLinks = [
  { to: '/gallery', label: 'Gallery' },
  { to: '/booking', label: 'Book Now', isBooking: true },
  { to: '/contact', label: 'Contact' },
];

const allLinks = [...leftLinks, ...rightLinks];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const showDarkBg = scrolled || !isHome;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          showDarkBg
            ? 'nav-scrolled'
            : 'bg-transparent border-b border-transparent'
        }`}
        style={{ height: '76px' }}
      >
        {/* Top gold accent line — only when scrolled */}
        <div
          className={`absolute top-0 left-0 right-0 h-px transition-opacity duration-500 ${
            showDarkBg ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(201,169,110,0.6) 30%, rgba(232,212,160,0.9) 50%, rgba(201,169,110,0.6) 70%, transparent 100%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-14 h-full flex items-center justify-between">
          {/* Left nav - desktop */}
          <div className="hidden lg:flex items-center gap-10 flex-1">
            {leftLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link-luxury font-body text-[10px] tracking-[0.28em] uppercase transition-colors duration-300 pb-[3px] ${
                  location.pathname === link.to
                    ? 'text-gold nav-link-active'
                    : 'text-[#E8E0D4]/80 hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Center logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-1.5">
            <span className="font-body text-[13px] tracking-[0.38em] uppercase text-[#E8E0D4] font-light">
              Megan
            </span>
            <span className="nav-logo-shimmer font-display text-[22px] italic font-normal">
              McGill
            </span>
          </Link>

          {/* Right nav - desktop */}
          <div className="hidden lg:flex items-center gap-10 flex-1 justify-end">
            {rightLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`${
                  link.isBooking
                    ? 'nav-book-btn font-body text-[10px] font-medium tracking-[0.28em] uppercase text-noir'
                    : `nav-link-luxury font-body text-[10px] tracking-[0.28em] uppercase transition-colors duration-300 pb-[3px] ${
                        location.pathname === link.to
                          ? 'text-gold nav-link-active'
                          : 'text-[#E8E0D4]/80 hover:text-gold'
                      }`
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-gold p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-[60] bg-[#080808] flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-cream"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            <nav className="flex flex-col items-center gap-6">
              {allLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.to}
                    className={`font-display text-4xl tracking-wider ${
                      location.pathname === link.to ? 'text-gold' : 'text-cream hover:text-gold'
                    } transition-colors`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
