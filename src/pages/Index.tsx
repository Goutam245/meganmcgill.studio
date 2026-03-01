import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Palette, Sparkles, Scissors, Leaf, Star, Instagram, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';

const marqueeRow1 = [
  'Balayage', 'Hair Color Transformation', 'Seamless Extensions', 'Brazilian Blowout',
  'Precision Cuts', 'Editorial Styling', 'Hand-Painted Highlights', 'Luxury Blowouts',
];
const marqueeRow2 = [
  "Orlando's Premier Hair Artist", '19 Years of Elevating Beauty',
  'Hollywood · New Zealand · Orlando', 'Art · Precision · Transformation',
  '1235 N. Orange Ave · Orlando FL', 'By Appointment Only',
];

const services = [
  {
    icon: Palette,
    title: 'Hair Color & Balayage',
    desc: 'Hand-painted color techniques tailored to your unique hair texture, skin tone, and lifestyle. From sun-kissed balayage to full color transformations.',
  },
  {
    icon: Sparkles,
    title: 'Hair Extensions',
    desc: 'Seamlessly blended extensions that add dramatic length and volume. Expertly matched and installed for the most natural look possible.',
  },
  {
    icon: Scissors,
    title: 'Cuts & Styling',
    desc: 'Precision haircuts sculpted to flatter your face shape and complement your daily routine. From classic bobs to flowing layers.',
  },
  {
    icon: Leaf,
    title: 'Treatments & Blowouts',
    desc: 'Transformative treatments including Brazilian Blowouts that eliminate frizz for up to 12 weeks. Luxury blowouts for any occasion.',
  },
];

const recentWork = [
  '/images/hair-1.jpg',
  '/images/hair-2.jpg',
  '/images/hair-3.jpg',
  '/images/hair-4.jpg',
  '/images/hair-5.jpg',
  '/images/hair-6.jpg',
  '/images/hair-7.jpg',
  '/images/hair-8.jpg',
  '/images/hair-9.jpg',
];

const testimonials = [
  {
    initials: 'SK',
    photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face',
    text: 'Megan completely transformed my hair. The balayage is exactly what I dreamed of — natural, sun-kissed perfection. I\'ve never had so many compliments!',
    name: 'Sarah K.',
    location: 'Orlando, FL',
    service: 'Balayage',
  },
  {
    initials: 'JM',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
    text: 'I\'ve been going to Megan for 3 years now. She is a true hair artist. My extensions blend seamlessly and look completely natural. Worth every penny.',
    name: 'Jessica M.',
    location: 'Winter Park, FL',
    service: 'Hair Extensions',
  },
  {
    initials: 'AR',
    photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
    text: 'Best hair experience of my entire life. Megan took my damaged, over-processed hair and turned it into something beautiful. She truly cares about her clients.',
    name: 'Amanda R.',
    location: 'Orlando, FL',
    service: 'Color Correction',
  },
  {
    initials: 'LT',
    photo: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&h=80&fit=crop&crop=face',
    text: 'The Brazilian Blowout Megan did completely changed my life. No more frizz for months! Her attention to detail and passion for her craft is unmatched.',
    name: 'Lauren T.',
    location: 'Lake Mary, FL',
    service: 'Brazilian Blowout',
  },
  {
    initials: 'MC',
    photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&h=80&fit=crop&crop=face',
    text: 'Megan is so talented and professional. She listened to exactly what I wanted and delivered something even better than I imagined. Highly recommend!',
    name: 'Michelle C.',
    location: 'Windermere, FL',
    service: 'Hair Color',
  },
  {
    initials: 'RT',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=face',
    text: 'I was nervous about going lighter but Megan made the whole process so comfortable. The result is stunning — she is a master of her craft.',
    name: 'Rachel T.',
    location: 'Dr. Phillips, FL',
    service: 'Highlights & Balayage',
  },
  {
    initials: 'KN',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=80&h=80&fit=crop&crop=face',
    text: 'Megan did my hair for my wedding and I cannot express how perfect it turned out. She is a genius with extensions and styling. I will never go anywhere else!',
    name: 'Kayla N.',
    location: 'Orlando, FL',
    service: 'Bridal Styling',
  },
];

const instagramImages = [
  '/images/hair-1.jpg',
  '/images/hair-4.jpg',
  '/images/hair-6.jpg',
  '/images/hair-7.jpg',
  '/images/hair-8.jpg',
  '/images/hair-9.jpg',
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroOffset, setHeroOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setHeroOffset(window.scrollY * 0.35);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Duplicate testimonials for seamless infinite scroll
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative h-screen flex items-center overflow-hidden bg-noir">
        <div
          ref={heroRef}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: 'url(/images/hair-5.jpg)',
            transform: `translateY(${heroOffset}px)`,
          }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(110deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.40) 100%)' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.7 }}
            className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-6"
          >
            Orlando's Premier Hair Artist
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-[clamp(3rem,10vw,6rem)] font-light text-cream leading-[1.05] mb-1"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.6), 0 4px 60px rgba(0,0,0,0.4)' }}
          >
            Art. Precision.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-display text-[clamp(3rem,10vw,6rem)] font-light leading-[1.05] mb-6"
          >
            <span className="gold-shimmer italic">Transformation.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="font-body text-cream/60 text-lg md:text-xl mb-10 max-w-xl"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.7)' }}
          >
            19 Years of Elevating Beauty — Hollywood to Orlando
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/booking"
              className="shimmer-btn bg-gold text-noir font-body text-[11px] tracking-[0.15em] uppercase px-8 py-4 hover:bg-[hsl(var(--gold-light))] transition-colors text-center"
            >
              Book a Consultation
            </Link>
            <Link
              to="/gallery"
              className="border border-gold/50 text-gold font-body text-[11px] tracking-[0.15em] uppercase px-8 py-4 hover:bg-gold/10 transition-colors text-center"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-cream/40 [writing-mode:vertical-lr]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold/0 to-gold/60 animate-scroll-pulse" />
        </motion.div>
      </section>

      {/* DUAL MARQUEE */}
      <section className="marquee-section relative overflow-hidden border-y border-gold/20"
        style={{ background: 'linear-gradient(180deg, #0A0806 0%, #0D0A07 50%, #0A0806 100%)' }}
      >
        {/* Subtle gold glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 60% 100% at 50% 50%, rgba(201,169,110,0.04) 0%, transparent 70%)',
        }} />

        {/* Row 1 — gold text, moves left */}
        <div className="flex items-center h-12 border-b border-gold/[0.08] relative">
          <div className="animate-marquee-left flex whitespace-nowrap">
            {[...Array(2)].map((_, setIdx) => (
              marqueeRow1.map((item, i) => (
                <span key={`r1-${setIdx}-${i}`} className="flex items-center">
                  <span className="font-body text-[10px] font-light tracking-[0.36em] uppercase text-gold px-7">
                    {item}
                  </span>
                  <span className="text-gold/50 text-[6px] flex-shrink-0">◆</span>
                </span>
              ))
            ))}
          </div>
        </div>

        {/* Row 2 — dim cream text, moves right */}
        <div className="flex items-center h-11 relative">
          <div className="animate-marquee-right flex whitespace-nowrap">
            {[...Array(2)].map((_, setIdx) => (
              marqueeRow2.map((item, i) => (
                <span key={`r2-${setIdx}-${i}`} className="flex items-center">
                  <span className="font-body text-[9px] font-light tracking-[0.32em] uppercase text-[#E8E0D4]/30 px-7">
                    {item}
                  </span>
                  <span className="text-gold/20 text-[6px] flex-shrink-0">◆</span>
                </span>
              ))
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-cream py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden rotate-[-1deg] shadow-[0_8px_32px_rgba(201,169,110,0.15)]">
                  <img
                    src="/images/megan-headshot.png"
                    alt="Megan McGill - Hair Artist"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-gold flex items-center justify-center">
                  <span className="font-display text-noir text-sm font-semibold leading-tight text-center">19<br/>Years</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-6">Meet the Artist</p>
                <blockquote className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-light italic text-foreground leading-snug mb-4">
                  "Beauty is not only seen by the naked eye — it is also felt within us."
                </blockquote>
                <p className="font-body text-sm text-muted-foreground mb-8">— Megan Essig</p>
                <p className="font-body text-muted-foreground leading-relaxed mb-8">
                  In Megan's 19 years of enhancing beauty in others, she has had the pleasure of working with various
                  models and actors on set and clients behind the chair in Hollywood CA, Auckland New Zealand,
                  Salt Lake City UT & now Orlando FL. Allow her experience and talent to transform your life.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Hair Extensions', 'Balayage', 'Hair Color', 'Cuts & Styling', 'Editorial'].map(s => (
                    <span key={s} className="font-body text-xs tracking-wider uppercase border border-gold/40 text-gold px-4 py-2 hover:bg-gold hover:text-noir transition-all cursor-default">
                      {s}
                    </span>
                  ))}
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.2em] uppercase text-gold hover:text-foreground transition-colors group"
                >
                  Learn More About Megan
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-dark-2 py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-4">Our Services</p>
              <h2 className="font-display text-[clamp(2.5rem,6vw,4rem)] font-light text-cream">
                Crafted for You
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <Link
                  to="/services"
                  className="service-card group block bg-[rgba(255,255,255,0.03)] border border-gold/[0.15] p-8 relative overflow-hidden"
                >
                  <div className="w-10 h-[2px] bg-gold mb-6 transition-all group-hover:w-full" style={{ transitionDuration: '400ms' }} />
                  <service.icon className="w-7 h-7 text-gold mb-5" />
                  <h3 className="font-heading text-lg text-cream mb-3">{service.title}</h3>
                  <p className="font-body text-sm text-cream/45 leading-relaxed mb-6">{service.desc}</p>
                  <span className="font-body text-[11px] tracking-[0.15em] uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1" style={{ transitionDuration: '400ms' }}>
                    Learn More <ArrowRight size={12} />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-noir py-20 border-y border-gold/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCounter end={19} suffix="+" label="Years Experience" />
            <AnimatedCounter end={500} suffix="+" label="Happy Clients" />
            <AnimatedCounter end={5} suffix=".0" prefix="★ " label="Star Rating" />
            <AnimatedCounter end={100} suffix="%" label="Passion & Precision" />
          </div>
        </div>
      </section>

      {/* RECENT WORK */}
      <section className="bg-cream py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-4">Portfolio</p>
              <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-foreground">
                Recent Work
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {recentWork.map((img, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <Link to="/gallery" className="gallery-item aspect-[3/4] overflow-hidden cursor-pointer block">
                  <img
                    src={img}
                    alt={`Hair transformation ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="gallery-overlay">
                    <span className="font-body text-[11px] tracking-[0.2em] uppercase text-cream">View Gallery</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center mt-12">
              <Link
                to="/gallery"
                className="shimmer-btn inline-block border border-foreground text-foreground font-body text-[11px] tracking-[0.15em] uppercase px-8 py-4 hover:bg-foreground hover:text-cream transition-colors"
              >
                View Full Gallery →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TESTIMONIALS — Auto-scrolling carousel */}
      <section className="bg-cream-2 py-28 lg:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-4">What Our Clients Say</p>
              <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-light italic text-foreground mb-4">
                Client Love
              </h2>
              <div className="w-12 h-px bg-gold mx-auto mb-6" />
              <p className="font-body text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
                Real words from real clients whose hair — and confidence — have been transformed by Megan's artistry.
              </p>
            </div>
          </ScrollReveal>
        </div>
        {/* Carousel wrapper with fade edges */}
        <div className="relative">
          <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-[120px] z-10" style={{ background: 'linear-gradient(to right, hsl(var(--cream-2)), transparent)' }} />
          <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-[120px] z-10" style={{ background: 'linear-gradient(to left, hsl(var(--cream-2)), transparent)' }} />
          <div className="flex gap-6 animate-carousel-scroll hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
            {doubledTestimonials.map((t, i) => (
              <div
                key={i}
                className="w-[340px] flex-shrink-0 bg-background p-8 border-t-[3px] border-t-gold shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Avatar */}
                <div className="relative mb-4">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover object-top border-2 border-gold/40"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="w-14 h-14 rounded-full items-center justify-center font-body text-base font-semibold text-noir hidden" style={{ background: 'linear-gradient(135deg, hsl(var(--gold)), #8B6914)' }}>
                    {t.initials}
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="text-gold fill-current" />
                  ))}
                </div>
                <p className="font-display text-[17px] italic text-foreground leading-[1.7] mb-5">
                  "{t.text}"
                </p>
                <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">
                  — {t.name}, {t.location}
                </p>
                <p className="font-body text-[11px] tracking-[0.1em] text-gold mt-1">
                  {t.service}
                </p>
              </div>
            ))}
          </div>
        </div>
        <p className="font-body text-[11px] tracking-[0.1em] text-muted-foreground/60 text-center mt-8">
          * Client photos are representative. Real reviews from Orlando area clients.
        </p>
      </section>

      {/* BEFORE & AFTER */}
      <section className="bg-dark-2 py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-4">Results</p>
              <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-cream">
                The Transformation
              </h2>
              <p className="font-body text-cream/50 mt-4">See the difference Megan's expertise makes</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { before: '/images/hair-6.jpg', after: '/images/hair-3.jpg', label: 'Extensions' },
              { before: '/images/hair-8.jpg', after: '/images/hair-4.jpg', label: 'Color Transformation' },
              { before: '/images/hair-5.jpg', after: '/images/hair-7.jpg', label: 'Balayage' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="relative">
                  <p className="font-body text-[11px] tracking-[0.2em] uppercase text-gold text-center mb-4">{item.label}</p>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img src={item.before} alt={`Before - ${item.label}`} className="w-full h-full object-cover" loading="lazy" />
                      <span className="absolute top-3 left-3 font-body text-[10px] tracking-[0.2em] uppercase bg-noir/70 text-cream px-3 py-1">Before</span>
                    </div>
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img src={item.after} alt={`After - ${item.label}`} className="w-full h-full object-cover" loading="lazy" />
                      <span className="absolute top-3 right-3 font-body text-[10px] tracking-[0.2em] uppercase bg-gold/90 text-noir px-3 py-1">After</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="bg-noir py-28 lg:py-36 relative">
        <div className="absolute inset-0 bg-[url('/images/hair-3.jpg')] bg-cover bg-center opacity-[0.08]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(2rem,6vw,3.25rem)] font-light text-cream mb-2">
              Ready for Your
            </h2>
            <h2 className="font-display text-[clamp(2rem,6vw,3.25rem)] font-light text-gold mb-6">
              Transformation?
            </h2>
            <p className="font-body text-cream/50 mb-10 max-w-xl mx-auto">
              $50 non-refundable deposit required for color & extension consultations. Paid via Zelle or Venmo.
            </p>
            <Link
              to="/booking"
              className="shimmer-btn inline-block bg-gold text-noir font-body text-[11px] tracking-[0.15em] uppercase px-10 py-5 hover:bg-[hsl(var(--gold-light))] transition-colors"
            >
              Book Your Appointment
            </Link>
            <p className="font-body text-cream/40 text-sm mt-6">
              Prefer to call? <a href="tel:407-927-1927" className="text-gold hover:underline">407-927-1927</a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* INSTAGRAM STRIP */}
      <section className="bg-cream py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-light text-foreground">
                Follow Along <span className="text-gold">@rootsandrowsorl</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {instagramImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <a
                  href="https://instagram.com/rootsandrowsorl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gallery-item aspect-square overflow-hidden block"
                >
                  <img
                    src={img}
                    alt={`Instagram ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="gallery-overlay !items-center !justify-center !pb-0">
                    <Instagram size={24} className="text-cream" />
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center mt-10">
              <a
                href="https://instagram.com/rootsandrowsorl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.2em] uppercase text-gold hover:text-foreground transition-colors"
              >
                Follow on Instagram <ArrowRight size={14} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Index;
