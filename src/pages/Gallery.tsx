import { useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const categories = ['All', 'Behind the Chair', 'Extensions', 'Beauty', 'Editorial', 'Commercial'];

const galleryImages = [
  // Behind the Chair (8 photos)
  { src: '/images/hair-1.jpg', category: 'Behind the Chair', title: 'Blonde Balayage' },
  { src: '/images/hair-2.jpg', category: 'Behind the Chair', title: 'Brunette Waves' },
  { src: '/images/hair-3.jpg', category: 'Behind the Chair', title: 'Sun-Kissed Highlights' },
  { src: '/images/hair-4.jpg', category: 'Behind the Chair', title: 'Balayage Perfection' },
  { src: '/images/hair-5.jpg', category: 'Behind the Chair', title: 'Color & Cut' },
  { src: '/images/hair-6.jpg', category: 'Behind the Chair', title: 'Color Transformation' },
  { src: '/images/hair-7.jpg', category: 'Behind the Chair', title: 'Warm Tones' },
  { src: '/images/hair-8.jpg', category: 'Behind the Chair', title: 'Root Shadow' },
  // Extensions (7 photos)
  { src: '/images/hair-7.jpg', category: 'Extensions', title: 'Length & Volume' },
  { src: '/images/hair-8.jpg', category: 'Extensions', title: 'Extension Blending' },
  { src: '/images/hair-9.jpg', category: 'Extensions', title: 'Seamless Extensions' },
  { src: '/images/hair-3.jpg', category: 'Extensions', title: 'Before & After' },
  { src: '/images/hair-1.jpg', category: 'Extensions', title: 'Tape-In Extensions' },
  { src: '/images/hair-4.jpg', category: 'Extensions', title: 'Hand-Tied Weft' },
  { src: '/images/hair-6.jpg', category: 'Extensions', title: 'Volume Boost' },
  // Beauty (6 photos)
  { src: '/images/hair-1.jpg', category: 'Beauty', title: 'Natural Glow' },
  { src: '/images/hair-4.jpg', category: 'Beauty', title: 'Classic Beauty' },
  { src: '/images/hair-2.jpg', category: 'Beauty', title: 'Styled Look' },
  { src: '/images/hair-5.jpg', category: 'Beauty', title: 'Golden Hour' },
  { src: '/images/hair-9.jpg', category: 'Beauty', title: 'Soft Waves' },
  { src: '/images/hair-3.jpg', category: 'Beauty', title: 'Sun-Kissed' },
  // Editorial (6 photos)
  { src: '/images/hair-5.jpg', category: 'Editorial', title: 'Editorial Shoot' },
  { src: '/images/hair-6.jpg', category: 'Editorial', title: 'Studio Session' },
  { src: '/images/hair-8.jpg', category: 'Editorial', title: 'Magazine Shoot' },
  { src: '/images/hair-2.jpg', category: 'Editorial', title: 'High Fashion' },
  { src: '/images/hair-7.jpg', category: 'Editorial', title: 'Vogue Inspired' },
  { src: '/images/hair-1.jpg', category: 'Editorial', title: 'Cover Story' },
  // Commercial (6 photos)
  { src: '/images/hair-9.jpg', category: 'Commercial', title: 'Brand Campaign' },
  { src: '/images/hair-7.jpg', category: 'Commercial', title: 'Commercial Shoot' },
  { src: '/images/hair-3.jpg', category: 'Commercial', title: 'Product Feature' },
  { src: '/images/hair-4.jpg', category: 'Commercial', title: 'Ad Campaign' },
  { src: '/images/hair-8.jpg', category: 'Commercial', title: 'Brand Collab' },
  { src: '/images/hair-5.jpg', category: 'Commercial', title: 'Lookbook' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [filterKey, setFilterKey] = useState(0);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const handleFilter = (cat: string) => {
    setActiveCategory(cat);
    setFilterKey(k => k + 1);
  };

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filtered.length);
    }
  }, [lightboxIndex, filtered.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
    }
  }, [lightboxIndex, filtered.length]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') goNext();
    if (e.key === 'ArrowLeft') goPrev();
  }, [goNext, goPrev]);

  return (
    <main className="pt-[68px]">
      {/* Hero with background photo */}
      <section className="relative h-[45vh] min-h-[320px] bg-noir overflow-hidden flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: 'url(/images/hair-2.jpg)' }}
        >
          <div className="absolute inset-0 bg-noir/55" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <ScrollReveal>
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold mb-3">Portfolio</p>
            <h1 className="font-display text-[clamp(3rem,8vw,5rem)] font-light text-cream">
              Gallery
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-cream border-b border-border sticky top-[68px] z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-3 overflow-x-auto no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`font-body text-[11px] tracking-[0.15em] uppercase px-6 py-2.5 whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold text-noir border border-gold'
                  : 'text-muted-foreground hover:text-foreground border border-gold/40 hover:border-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid - True Masonry */}
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div key={filterKey} className="columns-2 md:columns-3 gap-3 space-y-3">
            {filtered.map((img, i) => (
              <div
                key={`${img.src}-${img.title}-${filterKey}`}
                className="gallery-item break-inside-avoid cursor-pointer"
                onClick={() => openLightbox(i)}
                style={{
                  opacity: 0,
                  animation: `fadeInUp 0.5s ease ${i * 40}ms forwards`,
                }}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full object-cover block"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="text-center">
                    <p className="font-body text-[11px] tracking-[0.2em] uppercase text-gold">{img.title}</p>
                    <p className="font-body text-[10px] text-cream/50 mt-1">{img.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-noir/95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          ref={el => el?.focus()}
        >
          <button className="absolute top-6 right-6 text-cream/70 hover:text-gold transition-colors z-10" onClick={closeLightbox}>
            <X size={28} />
          </button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/50 hover:text-gold transition-colors z-10" onClick={(e) => { e.stopPropagation(); goPrev(); }}>
            <ChevronLeft size={36} />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/50 hover:text-gold transition-colors z-10" onClick={(e) => { e.stopPropagation(); goNext(); }}>
            <ChevronRight size={36} />
          </button>
          <img
            src={filtered[lightboxIndex].src}
            alt={filtered[lightboxIndex].title}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/50 font-body text-sm">
            {lightboxIndex + 1} / {filtered.length}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
};

export default Gallery;
