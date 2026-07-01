import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const variants = {
  primary: 'bg-ink-900 text-paper hover:bg-tiffany-700 hover:text-paper',
  inverse: 'bg-paper text-ink-900 hover:bg-tiffany hover:text-ink-900',
  ghost: 'border border-ink-900/25 text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-paper',
  'ghost-inverse': 'border border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink-900',
};

/**
 * Editorial CTA — square-cornered, uppercase label, arrow that lifts on hover.
 * Replaces the generic rounded-full "pill" buttons used across the old design.
 */
export default function Cta({ to, href, onClick, type = 'button', children, variant = 'primary', className = '', disabled = false, ...rest }) {
  const classes = `group inline-flex items-center gap-3 px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.12em] transition-[color,background-color,border-color,transform] duration-300 active:scale-[0.97] disabled:opacity-40 disabled:pointer-events-none ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} {...rest}>
      {content}
    </button>
  );
}
