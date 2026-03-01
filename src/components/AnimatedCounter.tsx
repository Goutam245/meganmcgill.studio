import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
  prefix?: string;
}

const AnimatedCounter = ({ end, suffix = '', label, prefix = '' }: CounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOut curve
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [started, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl lg:text-6xl font-light text-gold">
        {prefix}{count}{suffix}
      </div>
      <div className="font-body text-[11px] tracking-[0.2em] uppercase text-cream/50 mt-3">
        {label}
      </div>
    </div>
  );
};

export default AnimatedCounter;
