import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const haircuts = [
  { service: "Women's Haircut", price: '$95', desc: 'Precision cut tailored to your face shape and lifestyle' },
  { service: 'Long Cut', price: '$135', desc: 'Expert shaping for longer lengths with texture and movement' },
  { service: "Men's Haircut", price: '$50', desc: 'Classic to modern cuts, clean and confident' },
  { service: 'Boys Cut', price: '$35', desc: 'Kid-friendly cuts, fun and easy to manage' },
  { service: 'Girls Cut', price: '$35', desc: 'Sweet styles perfect for little ones' },
];

const treatments = [
  { service: 'Brazilian Blowout', price: '$295+', desc: 'Smoothing treatment that eliminates frizz; price varies by length and density' },
  { service: 'Blowdry', price: '$75', desc: 'Professional blowout for a sleek, polished finish' },
];

const colorExtensions = [
  'Balayage / Hand-Painted Color',
  'Full Color / Color Transformation',
  'Highlights',
  'Hair Extensions',
];

const faqs = [
  {
    q: 'How long does a balayage appointment take?',
    a: 'Balayage typically takes 3-4 hours depending on length and desired result. This includes consultation, application, processing, toning, and styling.',
  },
  {
    q: 'What is the $50 consultation deposit for?',
    a: 'Since every client has unique hair needs, the deposit secures your consultation time slot. It\'s applied toward your service cost and ensures we can provide personalized attention to your hair goals.',
  },
  {
    q: 'Do you offer virtual consultations?',
    a: 'Yes! Virtual consultations are available for clients who want to discuss their hair goals before visiting the salon. Book through the appointments page or call directly.',
  },
  {
    q: 'How do I maintain my color between appointments?',
    a: 'Megan recommends sulfate-free shampoo, limiting heat styling, and using a color-safe conditioner. She\'ll provide personalized aftercare instructions at your appointment.',
  },
  {
    q: 'What extensions do you use?',
    a: 'Megan works with premium hand-tied and tape-in extensions. The brand and method are selected based on your hair type, lifestyle, and desired result for the most natural look.',
  },
];

const Services = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative bg-noir py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hair-4.jpg')] bg-cover bg-center opacity-[0.1]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-4">Services & Pricing</p>
            <h1 className="font-display text-[clamp(3rem,8vw,5rem)] font-light text-cream mb-6">
              Crafted for You
            </h1>
            <p className="font-body text-cream/50 max-w-2xl mx-auto">
              Every service, every detail — designed to elevate your natural beauty
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Haircuts */}
      <section className="relative bg-cream py-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-48 bg-[url('/images/hair-5.jpg')] bg-cover bg-center opacity-[0.06]" />
        <div className="relative max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-gold/30" />
              <h2 className="font-body text-[11px] tracking-[0.3em] uppercase text-gold">✂️ Haircuts</h2>
              <div className="h-px flex-1 bg-gold/30" />
            </div>
          </ScrollReveal>
          <div className="space-y-0">
            {haircuts.map((item, i) => (
              <ScrollReveal key={item.service} delay={i * 60}>
                <div className="service-row flex items-start justify-between py-6 border-b border-border px-4 -mx-4 cursor-default">
                  <div className="flex-1 pr-4">
                    <h3 className="font-heading text-lg text-foreground">{item.service}</h3>
                    <p className="font-body text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                  <span className="font-display text-2xl italic text-gold ml-4 flex-shrink-0">{item.price}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="relative bg-noir py-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-48 bg-[url('/images/hair-7.jpg')] bg-cover bg-center opacity-[0.06]" />
        <div className="relative max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-gold/30" />
              <h2 className="font-body text-[11px] tracking-[0.3em] uppercase text-gold">💆 Treatments & Styling</h2>
              <div className="h-px flex-1 bg-gold/30" />
            </div>
          </ScrollReveal>
          <div className="space-y-0">
            {treatments.map((item, i) => (
              <ScrollReveal key={item.service} delay={i * 60}>
                <div className="service-row flex items-start justify-between py-6 border-b border-gold/10 px-4 -mx-4">
                  <div className="flex-1 pr-4">
                    <h3 className="font-heading text-lg text-cream">{item.service}</h3>
                    <p className="font-body text-sm text-cream/50 mt-1">{item.desc}</p>
                  </div>
                  <span className="font-display text-2xl italic text-gold ml-4 flex-shrink-0">{item.price}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Color & Extensions */}
      <section className="bg-cream py-24">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-gold/30" />
              <h2 className="font-body text-[11px] tracking-[0.3em] uppercase text-gold">🎨 Color & Extensions</h2>
              <div className="h-px flex-1 bg-gold/30" />
            </div>
            <div className="bg-noir p-8 lg:p-12 text-center mb-12">
              <p className="font-display text-xl text-cream mb-4">Consultation Required</p>
              <p className="font-body text-sm text-cream/60 max-w-xl mx-auto mb-4">
                For all new clients inquiring about color & extensions: Each client has unique needs and hair types.
                A $50 non-refundable deposit is required for an in-person or virtual consultation before booking.
              </p>
              <p className="font-body text-xs text-gold">Deposits via Zelle or Venmo</p>
            </div>
            <div className="space-y-0">
              {colorExtensions.map(service => (
                <div key={service} className="service-row flex items-center justify-between py-5 border-b border-border px-4 -mx-4">
                  <h3 className="font-heading text-lg text-foreground">{service}</h3>
                  <span className="font-body text-sm text-muted-foreground italic">Custom quote after consultation</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center mt-16">
              <Link
                to="/booking"
                className="shimmer-btn inline-block bg-gold text-noir font-body text-[11px] tracking-[0.15em] uppercase px-10 py-5 hover:bg-[hsl(var(--gold-light))] transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-2 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-4">FAQ</p>
              <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-light text-foreground">
                Frequently Asked Questions
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="border-b border-border">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                  >
                    <span className="font-heading text-lg text-foreground pr-4">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-gold flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-all"
                    style={{
                      transitionDuration: '400ms',
                      maxHeight: openFaq === i ? '300px' : '0',
                      opacity: openFaq === i ? 1 : 0,
                    }}
                  >
                    <p className="font-body text-sm text-muted-foreground leading-relaxed pb-6">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
