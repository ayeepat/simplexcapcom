import { useCallback, useRef } from 'react';

/** Pulls the element a few pixels toward the pointer while hovered. */
export function useMagnetic(strength = 0.18, limit = 6) {
  const ref = useRef(null);

  const onPointerMove = useCallback(
    (event) => {
      const el = ref.current;
      if (!el || event.pointerType !== 'mouse') return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const rect = el.getBoundingClientRect();
      const clamp = (n) => Math.max(-limit, Math.min(limit, n));
      const dx = clamp((event.clientX - (rect.left + rect.width / 2)) * strength);
      const dy = clamp((event.clientY - (rect.top + rect.height / 2)) * strength);
      el.style.translate = `${dx.toFixed(1)}px ${dy.toFixed(1)}px`;
    },
    [strength, limit]
  );

  const onPointerLeave = useCallback(() => {
    if (ref.current) ref.current.style.translate = '0px 0px';
  }, []);

  return { ref, onPointerMove, onPointerLeave };
}
