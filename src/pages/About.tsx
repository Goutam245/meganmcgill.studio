import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Sparkles, Palette, Scissors, Camera, Check, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useEffect, useRef, useState } from 'react';

const services = [
  { icon: Sparkles, label: 'Hair Extensions' },
  { icon: Palette, label: 'Balayage' },
  { icon: Palette, label: 'Hair Color' },
  { icon: Scissors, label: 'Hairstyles / Haircuts' },
  { icon: Camera, label: 'Editorial & Commercial Styling' },
];

const timeline = [
  { place: 'Hollywood, CA', desc: 'Working with models and actors on set for major productions' },
  { place: 'Auckland, New Zealand', desc: 'International experience styling for fashion industry' },
  { place: 'Salt Lake City, UT', desc: 'Building clientele and refining color techniques' },
  { place: 'Orlando, FL', desc: 'Home studio at 1235 N. Orange Ave — accepting new clients', current: true },
];

const specializations = [
  'Balayage & Hand-Painted Color',
  'Hair Extensions (Tape-In & Hand-Tied)',
  'Color Correction',
  'Brazilian Blowout Certified',
  'Editorial & Commercial Styling',
  'Bridal & Special Occasion',
];

const techniques = [
  'Foilayage',
  'Traditional Foil Highlights',
  'Shadow Root',
  'Color Melting',
  'Toning & Glazing',
  'Keratin Treatments',
];

const differenceBlocks = [
  {
    title: 'Personalized Consultation',
    text: 'Every appointment begins with a thorough consultation. Megan listens carefully to understand your vision, lifestyle, and hair history before touching a strand.',
  },
  {
    title: '19 Years of Mastery',
    text: 'With nearly two decades of experience from Hollywood sets to high-fashion editorials, Megan brings world-class expertise to every client chair.',
  },
  {
    title: 'Premium Products Only',
    text: 'Megan uses only top-tier professional color and extension brands, ensuring the healthiest possible results with maximum longevity.',
  },
  {
    title: 'Results That Last',
    text: "Megan's color and extension work is designed to grow out beautifully and last longer between appointments, saving you time and money long-term.",
  },
];

const About = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [timelineVisible, setTimelineVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimelineVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (timelineRef.current) observer.observe(timelineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="pt-[68px]">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] bg-noir overflow-hidden flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hair-5.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <ScrollReveal>
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-3">About</p>
            <h1 className="font-display text-[clamp(3rem,8vw,5rem)] font-light text-cream">
              Meet <span className="text-gold italic">Megan</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Bio */}
      <section className="bg-cream py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
            <ScrollReveal className="lg:col-span-2">
              <div className="relative">
                <div className="overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.35),0_0_0_1px_rgba(201,169,110,0.3)] -rotate-[1.5deg] hover:rotate-0 hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src="/images/megan-headshot.png"
                    alt="Megan McGill - Hair Artist"
                    className="w-full max-w-[420px] object-cover"
                    loading="lazy"
                  />
                </div>
                {/* 19 Years badge */}
                <div className="absolute -bottom-4 -right-4 bg-noir border border-gold/50 px-4 py-3 text-center">
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold leading-tight">19 Years</p>
                  <p className="font-body text-[9px] tracking-[0.15em] uppercase text-cream/70 leading-tight mt-0.5">Of Artistry</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150} className="lg:col-span-3">
              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-6">The Artist</p>
              <h2 className="font-display text-3xl lg:text-4xl font-light text-foreground mb-8">
                19 Years of Elevating Beauty
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                In Megan's 19 years of enhancing beauty in others, she has had the pleasure of working with
                various models and actors on set and clients behind the chair in Hollywood CA, Auckland New Zealand,
                Salt Lake City UT & now Orlando FL. Allow her experience and talent to transform your life.
              </p>
              <blockquote className="font-display text-2xl italic text-foreground border-l-2 border-gold pl-6 my-10">
                "Beauty is not only seen by the naked eye — it is also felt within us."
              </blockquote>

              {/* Services */}
              <div className="mt-12">
                <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-6">Specialties</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map(s => (
                    <div key={s.label} className="flex items-center gap-3 text-foreground">
                      <s.icon size={16} className="text-gold" />
                      <span className="font-body text-sm">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="mt-12 p-8 bg-noir text-cream">
                <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-6">Get in Touch</p>
                <div className="space-y-3 text-sm font-body">
                  <a href="tel:407-927-1927" className="flex items-center gap-3 text-cream/70 hover:text-gold transition-colors">
                    <Phone size={14} /> 407-927-1927
                  </a>
                  <a href="mailto:rootsandrowsorl@gmail.com" className="flex items-center gap-3 text-cream/70 hover:text-gold transition-colors">
                    <Mail size={14} /> rootsandrowsorl@gmail.com
                  </a>
                  <div className="flex items-start gap-3 text-cream/70">
                    <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                    1235 N. Orange Ave. St 201, Orlando, FL 32804
                  </div>
                  <a href="https://instagram.com/rootsandrowsorl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-cream/70 hover:text-gold transition-colors">
                    <Instagram size={14} /> @rootsandrowsorl
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-dark-2 py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-4">Career</p>
              <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-light text-cream">
                A Journey in Beauty
              </h2>
            </div>
          </ScrollReveal>

          <div ref={timelineRef} className="relative">
            {/* Line */}
            <div className="hidden lg:block absolute top-6 left-0 right-0 h-[2px] bg-gold/20">
              <div
                className={`h-full bg-gold transition-all ease-out ${timelineVisible ? 'w-full' : 'w-0'}`}
                style={{ transitionDuration: '1500ms' }}
              />
            </div>
            <div className="lg:hidden absolute top-0 bottom-0 left-6 w-[2px] bg-gold/20">
              <div
                className={`w-full bg-gold transition-all ease-out ${timelineVisible ? 'h-full' : 'h-0'}`}
                style={{ transitionDuration: '1500ms' }}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {timeline.map((item, i) => (
                <div
                  key={item.place}
                  className="relative pl-14 lg:pl-0 lg:pt-14"
                  style={{
                    opacity: timelineVisible ? 1 : 0,
                    transform: timelineVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.5s ease ${i * 200 + 400}ms`,
                  }}
                >
                  {/* Dot */}
                  <div className={`absolute lg:top-[18px] lg:left-1/2 lg:-translate-x-1/2 top-0 left-4 w-[14px] h-[14px] rounded-full border-2 shadow-[0_0_0_4px_rgba(201,169,110,0.2)] ${
                    item.current ? 'bg-gold border-gold' : 'bg-dark-2 border-gold'
                  }`} />
                  <h3 className="font-display text-xl text-cream mb-2">
                    {item.place}
                    {item.current && <span className="text-gold text-sm ml-2">(NOW)</span>}
                  </h3>
                  <p className="font-body text-sm text-cream/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-noir py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-light text-cream">
                Skills & Expertise
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-6">Specializations</p>
                <div className="space-y-3">
                  {specializations.map(s => (
                    <div key={s} className="flex items-center gap-3 text-cream/70 font-body text-sm">
                      <Check size={14} className="text-gold flex-shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div>
                <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-6">Techniques</p>
                <div className="space-y-3">
                  {techniques.map(t => (
                    <div key={t} className="flex items-center gap-3 text-cream/70 font-body text-sm">
                      <Check size={14} className="text-gold flex-shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Megan McGill Difference */}
      <section className="bg-dark py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-4">Why Clients Choose Megan</p>
              <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-light text-cream">
                The Megan McGill Difference
              </h2>
              <p className="font-body text-cream/50 mt-4">What sets her apart</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differenceBlocks.map((block, i) => (
              <ScrollReveal key={block.title} delay={i * 100}>
                <div className="border border-gold/10 p-9 hover:border-gold/50 transition-colors duration-400">
                  <span className="text-gold text-lg">✦</span>
                  <h3 className="font-heading text-xl text-cream mt-3 mb-4">{block.title}</h3>
                  <p className="font-body text-sm text-cream/50 leading-relaxed">{block.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="bg-cream py-24 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-light text-foreground mb-3">
              Follow the Transformation
            </h2>
            <p className="font-body text-muted-foreground mb-8">@rootsandrowsorl on Instagram</p>
            <a
              href="https://www.instagram.com/rootsandrowsorl"
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn inline-flex items-center gap-2 bg-gold text-noir font-body text-[11px] tracking-[0.15em] uppercase px-8 py-4 hover:bg-[hsl(var(--gold-light))] transition-colors"
            >
              Follow on Instagram <ArrowRight size={14} />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default About;
