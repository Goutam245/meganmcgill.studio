import { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Clock, Car } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-[68px]">
      {/* Hero with background photo */}
      <section className="relative h-[45vh] min-h-[320px] bg-noir overflow-hidden flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hair-4.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-noir/30 to-noir/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 pb-12 w-full">
          <ScrollReveal>
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-3">Get in Touch</p>
            <h1 className="font-display text-[clamp(3rem,8vw,5rem)] font-light text-cream">
              Contact
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-cream py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <ScrollReveal>
              <div>
                <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-6">Reach Out</p>
                <h2 className="font-display text-3xl font-light text-foreground mb-8">
                  Let's Create Something Beautiful
                </h2>

                <div className="space-y-6 mb-12">
                  <a href="tel:407-927-1927" className="flex items-center gap-4 text-foreground hover:text-gold transition-colors group">
                    <div className="w-12 h-12 border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-noir transition-all">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="font-body text-[11px] tracking-wider uppercase text-muted-foreground">Phone</p>
                      <p className="font-body">407-927-1927</p>
                    </div>
                  </a>

                  <a href="mailto:rootsandrowsorl@gmail.com" className="flex items-center gap-4 text-foreground hover:text-gold transition-colors group">
                    <div className="w-12 h-12 border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-noir transition-all">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="font-body text-[11px] tracking-wider uppercase text-muted-foreground">Email</p>
                      <p className="font-body">rootsandrowsorl@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-foreground">
                    <div className="w-12 h-12 border border-gold/30 flex items-center justify-center">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="font-body text-[11px] tracking-wider uppercase text-muted-foreground">Studio</p>
                      <p className="font-body">1235 N. Orange Ave. St 201<br />Orlando, FL 32804</p>
                    </div>
                  </div>

                  <a href="https://instagram.com/rootsandrowsorl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-gold transition-colors group">
                    <div className="w-12 h-12 border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-noir transition-all">
                      <Instagram size={18} />
                    </div>
                    <div>
                      <p className="font-body text-[11px] tracking-wider uppercase text-muted-foreground">Instagram</p>
                      <p className="font-body">@rootsandrowsorl</p>
                    </div>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={200}>
              <div className="bg-noir p-8 lg:p-12">
                <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-6">Send a Message</p>
                {submitted ? (
                  <div className="text-center py-16">
                    <p className="font-display text-3xl text-cream mb-4">Thank You</p>
                    <p className="font-body text-cream/60">We'll be in touch soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="font-body text-[11px] tracking-wider uppercase text-cream/50 block mb-2">Name</label>
                      <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full bg-transparent border-b border-gold/30 text-cream font-body py-3 focus:border-gold outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="font-body text-[11px] tracking-wider uppercase text-cream/50 block mb-2">Email</label>
                      <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full bg-transparent border-b border-gold/30 text-cream font-body py-3 focus:border-gold outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="font-body text-[11px] tracking-wider uppercase text-cream/50 block mb-2">Phone</label>
                      <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full bg-transparent border-b border-gold/30 text-cream font-body py-3 focus:border-gold outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="font-body text-[11px] tracking-wider uppercase text-cream/50 block mb-2">Service Interest</label>
                      <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="w-full bg-transparent border-b border-gold/30 text-cream font-body py-3 focus:border-gold outline-none transition-colors">
                        <option value="" className="bg-noir">Select a service...</option>
                        <option value="balayage" className="bg-noir">Balayage / Color</option>
                        <option value="extensions" className="bg-noir">Hair Extensions</option>
                        <option value="haircut" className="bg-noir">Haircut</option>
                        <option value="blowout" className="bg-noir">Brazilian Blowout</option>
                        <option value="styling" className="bg-noir">Styling</option>
                        <option value="other" className="bg-noir">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-body text-[11px] tracking-wider uppercase text-cream/50 block mb-2">Message</label>
                      <textarea rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full bg-transparent border-b border-gold/30 text-cream font-body py-3 focus:border-gold outline-none transition-colors resize-none" />
                    </div>
                    <button type="submit" className="shimmer-btn w-full bg-gold text-noir font-body text-[11px] tracking-[0.15em] uppercase py-4 hover:bg-[hsl(var(--gold-light))] transition-colors mt-4">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="px-6 lg:px-20 max-w-6xl mx-auto -mt-4 mb-4">
        <div className="w-full h-[280px] md:h-[280px] rounded-lg overflow-hidden border border-gold/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5!2d-81.37924!3d28.56656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773f2dcb44f63%3A0x1!2s1235+N+Orange+Ave+%23201%2C+Orlando%2C+FL+32804!5e0!3m2!1sen!2sus!4v1"
            title="Megan McGill Hair Studio Location"
            className="w-full h-full border-0 block"
            style={{ filter: 'grayscale(85%) contrast(1.05) brightness(0.95)' }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <a
          href="https://maps.google.com/?q=1235+N+Orange+Ave+Suite+201+Orlando+FL+32804"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 font-body text-[11px] tracking-[0.2em] uppercase text-gold hover:text-foreground transition-colors border-b border-gold/40 pb-0.5"
        >
          📍 Open in Google Maps →
        </a>
      </section>

      {/* Find Us Info Cards */}
      <section className="bg-noir py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="text-center">
                <MapPin size={24} className="text-gold mx-auto mb-4" />
                <h3 className="font-heading text-lg text-cream mb-3">Studio Location</h3>
                <p className="font-body text-sm text-cream/50 leading-relaxed mb-4">
                  1235 N. Orange Ave. Suite 201<br />Orlando, FL 32804
                </p>
                <a
                  href="https://www.google.com/maps/search/1235+N+Orange+Ave+Suite+201+Orlando+FL+32804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[11px] tracking-[0.15em] uppercase text-gold hover:text-cream transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="text-center">
                <Clock size={24} className="text-gold mx-auto mb-4" />
                <h3 className="font-heading text-lg text-cream mb-3">Studio Hours</h3>
                <p className="font-body text-sm text-cream/50 leading-relaxed">
                  Mon–Fri: By Appointment<br />
                  Saturday: By Appointment<br />
                  Sunday: Closed
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="text-center">
                <Car size={24} className="text-gold mx-auto mb-4" />
                <h3 className="font-heading text-lg text-cream mb-3">Parking</h3>
                <p className="font-body text-sm text-cream/50 leading-relaxed">
                  Free street parking available<br />on N. Orange Ave.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
