import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function DisclaimerBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-ink-950 text-paper/70 font-mono text-[11px] tracking-wide py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <p className="leading-relaxed">
          <span className="text-tiffany">RISK DISCLOSURE —</span> Past performance is not indicative of future results. Investments involve risk of loss of principal.
        </p>
        <button onClick={() => setVisible(false)} className="text-paper/40 hover:text-paper flex-shrink-0" aria-label="Dismiss banner">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}