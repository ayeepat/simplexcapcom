import React, { useRef } from 'react';

/**
 * Card that leans a few degrees toward the pointer and carries a soft light
 * where the cursor is. Mouse only — touch and reduced-motion get a still card.
 * `data-spin-host` lets any hover-spin Shape3D inside wake up with it.
 */
export default function TiltCard({ children, className = '', max = 5, light = 'paper', ...rest }) {
  const ref = useRef(null);
  const frame = useRef(0);

  const allowed = () =>
    typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onPointerMove = (event) => {
    if (event.pointerType !== 'mouse' || !allowed()) return;
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty('--rx', `${((0.5 - y) * max).toFixed(2)}deg`);
      el.style.setProperty('--ry', `${((x - 0.5) * max).toFixed(2)}deg`);
      el.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
      el.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
    });
  };

  const onPointerLeave = () => {
    cancelAnimationFrame(frame.current);
    const el = ref.current;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <div
      ref={ref}
      data-spin-host=""
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`tilt-card ${light === 'ink' ? 'tilt-card--ink' : ''} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
