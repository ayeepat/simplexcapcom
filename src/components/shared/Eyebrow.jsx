import React from 'react';

/**
 * Small mono-caps label with a leader rule, used in place of the old
 * "uppercase tracking-widest tiffany" heading pattern. Optional index
 * (e.g. "01") gives sections a printed-report feel instead of icon badges.
 */
export default function Eyebrow({ index, children, invert = false, className = '' }) {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] ${
        invert ? 'text-paper/60' : 'text-ink-500'
      } ${className}`}
    >
      {index && <span className={invert ? 'text-tiffany' : 'text-tiffany-700'}>{index}</span>}
      <span className="h-px w-8 bg-current opacity-40" />
      <span>{children}</span>
    </div>
  );
}
