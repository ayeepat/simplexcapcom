import React, { useEffect, useMemo, useRef } from 'react';
import { GEOMETRIES } from '@/lib/three/geometries';

const CAMERA = 4.2;

/**
 * A wireframe solid drawn on canvas, turning slowly. Stroke colour comes from
 * the element's CSS `color`, so position and tint are set with utility classes.
 *
 * @param {Object} props
 * @param {keyof typeof GEOMETRIES} [props.shape]
 * @param {number} [props.size] rendered size in px
 * @param {number} [props.speed] radians per second around the vertical axis
 * @param {number} [props.seed] starting angle, so neighbouring shapes differ
 * @param {number} [props.tilt] fixed forward tilt in radians
 * @param {number} [props.wobble] how far the tilt rocks back and forth
 * @param {boolean} [props.follow] lean toward the pointer
 * @param {boolean} [props.hoverSpin] still until the nearest [data-spin-host] is hovered, then turns
 * @param {boolean} [props.bob] float up and down
 * @param {string} [props.className]
 */
export default function Shape3D({
  shape = 'tetra',
  size = 140,
  speed = 0.18,
  seed = 0,
  tilt = 0.5,
  wobble = 0.25,
  follow = true,
  hoverSpin = false,
  bob = true,
  className = '',
}) {
  const canvasRef = useRef(null);
  const geometry = useMemo(() => (GEOMETRIES[shape] || GEOMETRIES.tetra)(), [shape]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const { v: staticV, e, dots = [], frame: animate } = geometry;
    const scale = size / 2.9;
    const half = size / 2;

    let color = getComputedStyle(canvas).color;
    let frame = 0;
    let visible = false;
    let last = 0;
    let angle = seed;
    let spinRate = hoverSpin ? 0 : speed;
    let target = spinRate;
    let px = 0, py = 0, ex = 0, ey = 0;

    const draw = (time) => {
      const dt = last ? Math.min((time - last) / 1000, 0.05) : 0;
      last = time;
      spinRate += (target - spinRate) * 0.06;
      angle += spinRate * dt;
      ex += (px - ex) * 0.05;
      ey += (py - ey) * 0.05;

      const ay = angle + ex * 0.6;
      const ax = tilt + Math.sin(time / 4000 + seed) * wobble * (reduced ? 0 : 1) + ey * 0.4;
      const cy = Math.cos(ay), sy = Math.sin(ay), cx = Math.cos(ax), sx = Math.sin(ax);

      const v = animate && !reduced ? animate(time / 1000) : staticV;
      const p = v.map(([x, y, z]) => {
        const x1 = x * cy + z * sy;
        const z1 = -x * sy + z * cy;
        const y2 = y * cx - z1 * sx;
        const z2 = y * sx + z1 * cx;
        const k = CAMERA / (CAMERA - z2);
        return [half + x1 * k * scale, half - y2 * k * scale, z2];
      });

      ctx.clearRect(0, 0, size, size);
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = 1;
      ctx.lineCap = 'round';
      for (let i = 0; i < e.length; i++) {
        const a = p[e[i][0]];
        const b = p[e[i][1]];
        // Edges nearer the viewer are drawn stronger, which is what reads as depth.
        ctx.globalAlpha = 0.28 + (((a[2] + b[2]) / 2 + 1) / 2) * 0.72;
        ctx.beginPath();
        ctx.moveTo(a[0], a[1]);
        ctx.lineTo(b[0], b[1]);
        ctx.stroke();
      }
      for (let i = 0; i < dots.length; i++) {
        const d = p[dots[i]];
        ctx.globalAlpha = 0.45 + ((d[2] + 1) / 2) * 0.55;
        ctx.beginPath();
        ctx.arc(d[0], d[1], 1.6 + (d[2] + 1) * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const loop = (time) => {
      draw(time);
      const idle = hoverSpin && !animate && target === 0 && Math.abs(spinRate) < 0.002;
      frame = visible && !idle ? requestAnimationFrame(loop) : 0;
    };
    const start = () => {
      if (!frame && visible) {
        last = 0;
        frame = requestAnimationFrame(loop);
      }
    };

    draw(0);
    if (reduced) return;

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) color = getComputedStyle(canvas).color;
      start();
    });
    observer.observe(canvas);

    const onPointer = (event) => {
      px = event.clientX / window.innerWidth - 0.5;
      py = event.clientY / window.innerHeight - 0.5;
    };
    if (follow) window.addEventListener('pointermove', onPointer, { passive: true });

    // Hover-driven: spin up while the host card is hovered, then coast to a stop.
    const host = hoverSpin ? canvas.closest('[data-spin-host]') : null;
    const onEnter = () => {
      target = speed * 6;
      color = getComputedStyle(canvas).color;
      start();
    };
    const onLeave = () => {
      target = 0;
    };
    // Re-read the colour while hovering, so a card that inverts on hover recolours its shape.
    const onMove = () => {
      color = getComputedStyle(canvas).color;
    };
    if (host) {
      host.addEventListener('pointerenter', onEnter);
      host.addEventListener('pointerleave', onLeave);
      host.addEventListener('transitionend', onMove);
      host.addEventListener('focusin', onEnter);
      host.addEventListener('focusout', onLeave);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('pointermove', onPointer);
      if (host) {
        host.removeEventListener('pointerenter', onEnter);
        host.removeEventListener('pointerleave', onLeave);
        host.removeEventListener('transitionend', onMove);
        host.removeEventListener('focusin', onEnter);
        host.removeEventListener('focusout', onLeave);
      }
      if (frame) cancelAnimationFrame(frame);
    };
  }, [geometry, size, speed, seed, tilt, wobble, follow, hoverSpin]);

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none block ${bob ? 'shape-bob' : ''} ${className}`}
      style={{ width: size, height: size, animationDelay: `${-seed * 2}s` }}
    >
      <canvas ref={canvasRef} style={{ width: size, height: size }} className="block" />
    </span>
  );
}
