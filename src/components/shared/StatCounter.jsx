import React, { useEffect, useRef, useState } from 'react';

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

/**
 * @param {Object} props
 * @param {number} props.value
 * @param {string} [props.suffix]
 * @param {string} [props.prefix]
 * @param {string} props.label
 * @param {number} [props.delay]
 */
export default function StatCounter({ value, suffix = '', prefix = '', label, delay = 0 }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(value);
      return;
    }
    const duration = 1500;
    let frame = 0;
    let startTime = 0;
    // Counts on a decelerating curve so the figure settles instead of stopping dead.
    const tick = (now) => {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.round(easeOutCubic(progress) * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    const timer = setTimeout(() => { frame = requestAnimationFrame(tick); }, delay);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [started, value, delay]);

  return (
    <div ref={ref}>
      <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-ink-900 tabular-nums mb-2 transition-[color,transform] duration-500 ease-out group-hover:text-tiffany-700 group-hover:-translate-y-0.5">
        {prefix}{count}{suffix}
      </div>
      <div className="font-mono text-[11px] text-ink-500 uppercase tracking-[0.16em] leading-snug">{label}</div>
    </div>
  );
}
