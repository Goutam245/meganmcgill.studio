import ScrollReveal from '@/components/ScrollReveal';
import { Phone, Mail, Instagram, CreditCard, ClipboardList, HelpCircle } from 'lucide-react';

const steps = [
  { num: '①', title: 'Select Service', desc: 'Choose from our menu of services' },
  { num: '②', title: 'Choose Date & Time', desc: 'Pick your preferred appointment slot' },
  { num: '③', title: 'Pay Deposit', desc: '$50 deposit for color/extensions only' },
  { num: '④', title: 'Confirmation', desc: 'Receive email confirmation instantly' },
];

const Booking = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-noir py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-4">Appointments</p>
            <h1 className="font-display text-[clamp(3rem,8vw,5rem)] font-light text-cream mb-6">
              Book Your Appointment
            </h1>
            <p className="font-body text-cream/50 max-w-2xl mx-auto">
              Begin your transformation journey with a simple booking
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-cream py-16">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <div key={i} className="text-center relative">
                  <div className="text-gold font-display text-4xl mb-3">{s.num}</div>
                  <h3 className="font-heading text-sm text-foreground mb-1">{s.title}</h3>
                  <p className="font-body text-xs text-muted-foreground">{s.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-5 -right-3 w-6 h-px bg-gold/40" />
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Booking Widget */}
      <section className="bg-cream pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-dark rounded-lg p-6 md:p-10">
              <iframe
                src="https://squareup.com/appointments/buyer/widget/d0hzz9z30pa4vx/NHDCG02P47FKX"
                title="Book an Appointment with Megan McGill"
                className="w-full border-0 rounded-lg"
                style={{ height: '800px', display: 'block' }}
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Info Cards */}
      <section className="bg-cream-2 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal>
              <div className="bg-background p-8 border-t-[3px] border-t-gold">
                <CreditCard size={24} className="text-gold mb-4" />
                <h3 className="font-heading text-lg text-foreground mb-3">Payment Info</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  $50 non-refundable deposit required for color & extension consultations. Accepted via Zelle or Venmo.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="bg-background p-8 border-t-[3px] border-t-gold">
                <ClipboardList size={24} className="text-gold mb-4" />
                <h3 className="font-heading text-lg text-foreground mb-3">What to Expect</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Arrive with clean, dry hair. Consultation included with first visit. Allow 3-4 hours for color services.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-background p-8 border-t-[3px] border-t-gold">
                <HelpCircle size={24} className="text-gold mb-4" />
                <h3 className="font-heading text-lg text-foreground mb-3">Questions?</h3>
                <div className="space-y-2 font-body text-sm text-muted-foreground">
                  <a href="tel:407-927-1927" className="flex items-center gap-2 hover:text-gold transition-colors">
                    <Phone size={12} /> 407-927-1927
                  </a>
                  <a href="mailto:rootsandrowsorl@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors">
                    <Mail size={12} /> rootsandrowsorl@gmail.com
                  </a>
                  <a href="https://instagram.com/rootsandrowsorl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
                    <Instagram size={12} /> @rootsandrowsorl
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Booking;
