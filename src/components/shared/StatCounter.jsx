import React, { useEffect, useRef, useState } from 'react';

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
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
    }, delay);
    return () => clearTimeout(timer);
  }, [started, value, delay]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-tiffany mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-xs text-gray-500 font-medium tracking-wide">{label}</div>
    </div>
  );
}