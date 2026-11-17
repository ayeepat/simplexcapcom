import React, { useEffect, useRef, useState } from 'react';

const DURATION = 1000;

export default function FadeInSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [visible, setVisible] = useState(prefersReducedMotion);
  // Once the entrance has finished, the reveal styles are dropped entirely so the
  // stagger delay and 1s duration no longer leak into hover transitions on the
  // same element (e.g. the portfolio cards' colour change).
  const [settled, setSettled] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!visible || settled) return;
    const timer = setTimeout(() => setSettled(true), delay + DURATION + 50);
    return () => clearTimeout(timer);
  }, [visible, settled, delay]);

  if (settled) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: `${DURATION}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {children}
    </div>
  );
}
