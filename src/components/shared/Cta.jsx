import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useMagnetic } from '@/hooks/use-magnetic';

const variants = {
  primary: 'bg-ink-900 text-paper hover:bg-tiffany-700 hover:text-paper',
  inverse: 'bg-paper text-ink-900 hover:bg-tiffany hover:text-ink-900',
  ghost: 'border border-ink-900/25 text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-paper',
  'ghost-inverse': 'border border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink-900',
};

/**
 * Editorial CTA — square-cornered, uppercase label, arrow that lifts on hover.
 * Replaces the generic rounded-full "pill" buttons used across the old design.
 * Leans toward the pointer while hovered; a press sends a ring out from the click point.
 */
export default function Cta({ to, href, onClick, type = 'button', children, variant = 'primary', className = '', disabled = false, ...rest }) {
  const magnetic = useMagnetic();
  const [ripples, setRipples] = useState([]);

  const onPointerDown = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const ripple = { id: event.timeStamp, x: event.clientX - rect.left, y: event.clientY - rect.top };
    setRipples((list) => [...list.slice(-2), ripple]);
    rest.onPointerDown?.(event);
  };

  const shared = {
    ref: magnetic.ref,
    onPointerMove: magnetic.onPointerMove,
    onPointerLeave: magnetic.onPointerLeave,
    onPointerDown,
  };

  const classes = `group relative isolate overflow-hidden inline-flex items-center gap-3 px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.12em] transition-[color,background-color,border-color,transform,translate] duration-300 active:scale-[0.97] disabled:opacity-40 disabled:pointer-events-none ${variants[variant]} ${className}`;

  const content = (
    <>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="cta-ripple"
          style={{ left: r.x, top: r.y }}
          onAnimationEnd={() => setRipples((list) => list.filter((item) => item.id !== r.id))}
          aria-hidden="true"
        />
      ))}
      <span>{children}</span>
      <span className="relative block h-4 w-4 overflow-hidden" aria-hidden="true">
        <ArrowUpRight className="absolute inset-0 w-4 h-4 transition-transform duration-500 ease-out group-hover:translate-x-full group-hover:-translate-y-full" />
        <ArrowUpRight className="absolute inset-0 w-4 h-4 -translate-x-full translate-y-full transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes} {...rest} {...shared}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} {...rest} {...shared}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} {...rest} {...shared}>
      {content}
    </button>
  );
}
