import React, { useEffect, useRef, useState } from 'react';

/** Chart bar that grows from zero to `pct`% of its track when scrolled into view. */
export default function GrowBar({ pct, className = '', delay = 0, children }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${className}`}
      style={{
        width: shown ? `${pct}%` : '0%',
        transition: `width 1.1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
