// Wireframe geometries for the background shapes. Each returns
// { v: [[x, y, z]], e: [[a, b]], dots?: [index] }, scaled to sit inside a unit sphere.
// Every shape is tied to the page it lives on — see the comment above each one.

const norm = ([x, y, z], r = 1) => {
  const l = Math.hypot(x, y, z) || 1;
  return [(x / l) * r, (y / l) * r, (z / l) * r];
};

const merge = (...parts) => {
  const v = [];
  const e = [];
  const dots = [];
  parts.forEach((p) => {
    const base = v.length;
    v.push(...p.v);
    e.push(...p.e.map(([a, b]) => [a + base, b + base]));
    (p.dots || []).forEach((d) => dots.push(d + base));
  });
  return { v, e, dots };
};

const box = ([cx, cy, cz], [sx, sy, sz]) => {
  const v = [];
  for (const x of [-1, 1]) for (const y of [-1, 1]) for (const z of [-1, 1]) v.push([cx + x * sx, cy + y * sy, cz + z * sz]);
  const e = [[0, 1], [0, 2], [0, 4], [1, 3], [1, 5], [2, 3], [2, 6], [3, 7], [4, 5], [4, 6], [5, 7], [6, 7]];
  return { v, e };
};

const ring = (radius, segments, { y = 0, tiltX = 0, tiltZ = 0 } = {}) => {
  const v = [];
  const e = [];
  for (let i = 0; i < segments; i++) {
    const a = (i / segments) * Math.PI * 2;
    let p = [Math.cos(a) * radius, y, Math.sin(a) * radius];
    // tilt about X then Z
    p = [p[0], p[1] * Math.cos(tiltX) - p[2] * Math.sin(tiltX), p[1] * Math.sin(tiltX) + p[2] * Math.cos(tiltX)];
    p = [p[0] * Math.cos(tiltZ) - p[1] * Math.sin(tiltZ), p[0] * Math.sin(tiltZ) + p[1] * Math.cos(tiltZ), p[2]];
    v.push(p);
    e.push([i, (i + 1) % segments]);
  }
  return { v, e };
};

const latLon = (lat, lon, r = 1) => {
  const phi = (lat * Math.PI) / 180;
  const lambda = (lon * Math.PI) / 180;
  return [Math.cos(phi) * Math.sin(lambda) * r, Math.sin(phi) * r, Math.cos(phi) * Math.cos(lambda) * r];
};

/* The simplex itself (the firm's name and logo). */
export const tetra = () => ({
  v: [[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]].map((p) => norm(p)),
  e: [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]],
});

export const octa = () => ({
  v: [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]],
  e: [[0, 2], [0, 3], [0, 4], [0, 5], [1, 2], [1, 3], [1, 4], [1, 5], [2, 4], [2, 5], [3, 4], [3, 5]],
});

export const cube = () => {
  const b = box([0, 0, 0], [0.58, 0.58, 0.58]);
  return b;
};

/* Icosahedron: twenty faces, the densest Platonic net — used for AI / networks. */
export const icosa = () => {
  const t = (1 + Math.sqrt(5)) / 2;
  const raw = [[-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0], [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t], [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]];
  const v = raw.map((p) => norm(p));
  const e = [];
  for (let i = 0; i < v.length; i++)
    for (let j = i + 1; j < v.length; j++) {
      const d = Math.hypot(v[i][0] - v[j][0], v[i][1] - v[j][1], v[i][2] - v[j][2]);
      if (d < 1.1) e.push([i, j]);
    }
  return { v, e };
};

/* Two founding partners: two interlocked tetrahedra (stella octangula). */
export const stella = () => {
  const a = tetra();
  const b = { v: a.v.map(([x, y, z]) => [-x, -y, -z]), e: a.e };
  return merge(a, b);
};

/* Elongated octahedron — a cut stone, for the investor page. */
export const gem = () => {
  const v = [[0, 1, 0], [0, -1, 0]];
  const e = [];
  const n = 6;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    v.push([Math.cos(a) * 0.62, 0.18, Math.sin(a) * 0.62]);
  }
  for (let i = 0; i < n; i++) {
    const k = i + 2;
    e.push([0, k], [1, k], [k, ((i + 1) % n) + 2]);
  }
  return { v, e };
};

/* "International Fund": a globe with latitude/longitude and an orbit ring. */
export const globe = ({ orbit = true } = {}) => {
  const parts = [];
  const lats = [-60, -30, 0, 30, 60];
  lats.forEach((lat) => {
    const r = Math.cos((lat * Math.PI) / 180) * 0.82;
    parts.push(ring(r, 36, { y: Math.sin((lat * Math.PI) / 180) * 0.82 }));
  });
  for (let m = 0; m < 6; m++) {
    const v = [];
    const e = [];
    const lon = (m / 6) * 180;
    for (let i = 0; i <= 24; i++) {
      v.push(latLon(-90 + (i / 24) * 360, lon, 0.82));
      if (i > 0) e.push([i - 1, i]);
    }
    parts.push({ v, e });
  }
  if (orbit) parts.push(ring(1.05, 48, { tiltX: 1.15, tiltZ: 0.35 }));
  return merge(...parts);
};

/* Contact: the globe with arcs from the Abu Dhabi office to London, New York and Moscow —
   the exchanges the team has taken companies public on. */
export const routes = () => {
  const sphere = globe({ orbit: false });
  const home = [24.45, 54.38];
  const cities = [[51.5, -0.12], [40.71, -74.0], [55.75, 37.62]];
  const R = 0.82;
  const toV = ([la, lo]) => latLon(la, lo, R);
  const arcs = cities.map((city) => {
    const a = toV(home);
    const b = toV(city);
    const v = [];
    const e = [];
    const steps = 24;
    const omega = Math.acos(Math.max(-1, Math.min(1, (a[0] * b[0] + a[1] * b[1] + a[2] * b[2]) / (R * R))));
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const s1 = Math.sin((1 - t) * omega) / Math.sin(omega);
      const s2 = Math.sin(t * omega) / Math.sin(omega);
      const p = [a[0] * s1 + b[0] * s2, a[1] * s1 + b[1] * s2, a[2] * s1 + b[2] * s2];
      v.push(norm(p, R * (1 + 0.22 * Math.sin(Math.PI * t))));
      if (i > 0) e.push([i - 1, i]);
    }
    return { v, e, dots: [steps] };
  });
  const office = { v: [toV(home)], e: [], dots: [0] };
  return merge(sphere, ...arcs, office);
};

/* Strategy / AI: a neural cloud — points on a sphere linked to their nearest neighbours. */
export const network = ({ count = 26, links = 3, seed = 7 } = {}) => {
  let s = seed;
  const rand = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  const v = [];
  for (let i = 0; i < count; i++) {
    // Fibonacci sphere with jitter, so the cloud is even but not crystalline.
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const a = i * 2.399963 + rand() * 0.6;
    const depth = 0.7 + rand() * 0.3;
    v.push([Math.cos(a) * r * depth, y * depth, Math.sin(a) * r * depth]);
  }
  const e = [];
  const seen = new Set();
  v.forEach((p, i) => {
    v.map((q, j) => [j, Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2])])
      .filter(([j]) => j !== i)
      .sort((x, y) => x[1] - y[1])
      .slice(0, links)
      .forEach(([j]) => {
        const key = i < j ? `${i}-${j}` : `${j}-${i}`;
        if (!seen.has(key)) {
          seen.add(key);
          e.push([i, j]);
        }
      });
  });
  return { v, e, dots: v.map((_, i) => i) };
};

/* Portfolio: eight companies, eight cubes in a 2×2×2 stack. */
export const cubeStack = () => {
  const parts = [];
  const s = 0.36;
  for (const x of [-1, 1]) for (const y of [-1, 1]) for (const z of [-1, 1]) parts.push(box([x * 0.4, y * 0.4, z * 0.4], [s * 0.82, s * 0.82, s * 0.82]));
  return merge(...parts);
};

/* Market Insights: the US IPO counts 2019–2026 as a row of 3D columns on a floor grid. */
export const ipoBars = () => {
  const pct = [22, 46, 100, 17, 15, 22, 34, 18];
  const parts = [];
  const w = 0.09;
  pct.forEach((p, i) => {
    const h = 0.12 + (p / 100) * 1.25;
    const x = -0.84 + i * 0.24;
    parts.push(box([x, -0.7 + h / 2, 0], [w, h / 2, w]));
  });
  // floor grid
  const floor = { v: [], e: [] };
  for (let i = 0; i <= 4; i++) {
    const t = -1 + i * 0.5;
    const base = floor.v.length;
    floor.v.push([t, -0.7, -0.5], [t, -0.7, 0.5]);
    floor.e.push([base, base + 1]);
  }
  for (let i = 0; i <= 2; i++) {
    const z = -0.5 + i * 0.5;
    const base = floor.v.length;
    floor.v.push([-1, -0.7, z], [1, -0.7, z]);
    floor.e.push([base, base + 1]);
  }
  return merge(floor, ...parts);
};

/* Market Insights: the target sector allocation as a wireframe disc cut into its slices
   (25 / 22 / 18 / 15 / 12 / 8). */
export const allocationDisc = () => {
  const shares = [25, 22, 18, 15, 12, 8];
  const R = 0.95;
  const h = 0.16;
  const parts = [];
  parts.push(ring(R, 72, { y: h }), ring(R, 72, { y: -h }));
  let acc = 0;
  shares.forEach((share) => {
    const a = (acc / 100) * Math.PI * 2;
    acc += share;
    const x = Math.cos(a) * R;
    const z = Math.sin(a) * R;
    parts.push({
      v: [[0, h, 0], [x, h, z], [0, -h, 0], [x, -h, z]],
      e: [[0, 1], [2, 3], [1, 3], [0, 2]],
    });
  });
  return merge(...parts);
};

/* For Investors: four next steps, four rising blocks. */
export const steps = () => {
  const parts = [];
  for (let i = 0; i < 4; i++) {
    const h = 0.28 + i * 0.28;
    parts.push(box([-0.66 + i * 0.44, -0.75 + h / 2, 0], [0.2, h / 2, 0.36]));
  }
  return merge(...parts);
};

/* Fund structure: Limited Partners → Fund → Portfolio, as three stacked planes. */
export const layers = () => {
  const parts = [];
  [-0.6, 0, 0.6].forEach((y, i) => {
    const s = i === 1 ? 0.62 : 0.8;
    parts.push({
      v: [[-s, y, -s], [s, y, -s], [s, y, s], [-s, y, s]],
      e: [[0, 1], [1, 2], [2, 3], [3, 0]],
    });
  });
  parts.push({ v: [[0, -0.6, 0], [0, 0.6, 0]], e: [[0, 1]], dots: [0, 1] });
  return merge(...parts);
};

/* Legal pages: a closed box inside a box. */
export const nested = () => merge(box([0, 0, 0], [0.6, 0.6, 0.6]), box([0, 0, 0], [0.3, 0.3, 0.3]));

/* "Intelligent Automation": a gear-like toothed ring. */
export const gear = () => {
  const v = [];
  const e = [];
  const teeth = 10;
  const n = teeth * 4;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const r = i % 4 < 2 ? 0.95 : 0.72;
    v.push([Math.cos(a) * r, 0.14, Math.sin(a) * r], [Math.cos(a) * r, -0.14, Math.sin(a) * r]);
  }
  for (let i = 0; i < n; i++) {
    const a = i * 2;
    const b = ((i + 1) % n) * 2;
    e.push([a, b], [a + 1, b + 1]);
    if (i % 2 === 0) e.push([a, a + 1]);
  }
  const hub = ring(0.3, 20, { y: 0 });
  return merge({ v, e }, hub);
};

/* "Platform Economy": a flat grid plane with a few raised nodes — a marketplace. */
export const platform = () => {
  const v = [];
  const e = [];
  const n = 4;
  for (let i = 0; i <= n; i++)
    for (let j = 0; j <= n; j++) v.push([-0.9 + (i / n) * 1.8, -0.3, -0.9 + (j / n) * 1.8]);
  for (let i = 0; i <= n; i++)
    for (let j = 0; j <= n; j++) {
      const k = i * (n + 1) + j;
      if (i < n) e.push([k, k + n + 1]);
      if (j < n) e.push([k, k + 1]);
    }
  const pins = [[1, 1], [3, 2], [2, 3]].map(([i, j]) => {
    const p = v[i * (n + 1) + j];
    return { v: [p, [p[0], 0.45, p[2]]], e: [[0, 1]], dots: [1] };
  });
  return merge({ v, e }, ...pins);
};

/* "Predictable Disruption": a cube with one corner breaking away. */
export const fracture = () => {
  const c = box([0, 0, 0], [0.55, 0.55, 0.55]);
  const shard = box([0.72, 0.72, 0.72], [0.16, 0.16, 0.16]);
  return merge(c, shard);
};

/* OCSiAl: a carbon nanotube — hexagonal rings stacked and offset. */
export const nanotube = () => {
  const parts = [];
  const rings = 6;
  const n = 8;
  const R = 0.5;
  const v = [];
  const e = [];
  for (let r = 0; r < rings; r++) {
    for (let i = 0; i < n; i++) {
      const a = ((i + (r % 2) * 0.5) / n) * Math.PI * 2;
      v.push([Math.cos(a) * R, -0.85 + (r / (rings - 1)) * 1.7, Math.sin(a) * R]);
    }
  }
  for (let r = 0; r < rings; r++)
    for (let i = 0; i < n; i++) {
      const k = r * n + i;
      e.push([k, r * n + ((i + 1) % n)]);
      if (r < rings - 1) {
        e.push([k, (r + 1) * n + i]);
      }
    }
  parts.push({ v, e });
  return merge(...parts);
};


/* ------------------------------------------------------------------
   Second set. Shapes with a `frame(t)` move on their own: the renderer
   asks for fresh vertices every frame (t in seconds).
   ------------------------------------------------------------------ */

const rot = ([x, y, z], ax, ay, az) => {
  let [a, b, c] = [x, y * Math.cos(ax) - z * Math.sin(ax), y * Math.sin(ax) + z * Math.cos(ax)];
  [a, c] = [a * Math.cos(ay) + c * Math.sin(ay), -a * Math.sin(ay) + c * Math.cos(ay)];
  [a, b] = [a * Math.cos(az) - b * Math.sin(az), a * Math.sin(az) + b * Math.cos(az)];
  return [a, b, c];
};

// Rotate a 4D point in the XW and ZW planes, then project to 3D by perspective along W.
const project4 = (pts, t, scale = 1) => {
  const a = t * 0.45;
  const b = t * 0.31;
  return pts.map(([x, y, z, w]) => {
    let x1 = x * Math.cos(a) - w * Math.sin(a);
    let w1 = x * Math.sin(a) + w * Math.cos(a);
    const z1 = z * Math.cos(b) - w1 * Math.sin(b);
    w1 = z * Math.sin(b) + w1 * Math.cos(b);
    const k = 2.4 / (2.4 - w1);
    return [x1 * k * scale, y * k * scale, z1 * k * scale];
  });
};

/* The 4-simplex (pentachoron): "simplex" one dimension further, turning through 4D. */
export const pentachoron = () => {
  const r5 = Math.sqrt(5);
  const raw = [[1, 1, 1, -1 / r5], [1, -1, -1, -1 / r5], [-1, 1, -1, -1 / r5], [-1, -1, 1, -1 / r5], [0, 0, 0, 4 / r5]].map((p) => p.map((c) => c / 1.9));
  const e = [];
  for (let i = 0; i < 5; i++) for (let j = i + 1; j < 5; j++) e.push([i, j]);
  return { v: project4(raw, 0), e, dots: [0, 1, 2, 3, 4], frame: (t) => project4(raw, t) };
};

/* Tesseract: a cube of cubes, turning through 4D. */
export const tesseract = () => {
  const raw = [];
  for (let i = 0; i < 16; i++) raw.push([i & 1 ? 1 : -1, i & 2 ? 1 : -1, i & 4 ? 1 : -1, i & 8 ? 1 : -1].map((c) => c * 0.5));
  const e = [];
  for (let i = 0; i < 16; i++) for (let b = 0; b < 4; b++) { const j = i ^ (1 << b); if (i < j) e.push([i, j]); }
  return { v: project4(raw, 0), e, frame: (t) => project4(raw, t) };
};

/* Torus knots: (2,3) trefoil and (2,5) cinquefoil, drawn as a tube. */
const knot = (p, q, R = 0.62, r = 0.26, segs = 220) => {
  const v = [];
  const e = [];
  for (let i = 0; i < segs; i++) {
    const t = (i / segs) * Math.PI * 2;
    const rr = R + r * Math.cos(q * t);
    v.push([rr * Math.cos(p * t), r * Math.sin(q * t) * 1.4, rr * Math.sin(p * t)]);
    e.push([i, (i + 1) % segs]);
  }
  // Second strand offset slightly, so the knot reads as a ribbon rather than a wire.
  const base = v.length;
  for (let i = 0; i < segs; i++) {
    const t = (i / segs) * Math.PI * 2 + 0.02;
    const rr = R + (r + 0.07) * Math.cos(q * t);
    v.push([rr * Math.cos(p * t), (r + 0.07) * Math.sin(q * t) * 1.4, rr * Math.sin(p * t)]);
    e.push([base + i, base + ((i + 1) % segs)]);
    if (i % 10 === 0) e.push([i, base + i]);
  }
  return { v, e };
};
export const trefoil = () => knot(2, 3);
export const cinquefoil = () => knot(2, 5, 0.6, 0.22, 300);

/* Torus. */
export const torus = (R = 0.66, r = 0.28, a = 28, b = 12) => {
  const v = [];
  const e = [];
  for (let i = 0; i < a; i++)
    for (let j = 0; j < b; j++) {
      const u = (i / a) * Math.PI * 2;
      const w = (j / b) * Math.PI * 2;
      v.push([(R + r * Math.cos(w)) * Math.cos(u), r * Math.sin(w), (R + r * Math.cos(w)) * Math.sin(u)]);
      const k = i * b + j;
      e.push([k, i * b + ((j + 1) % b)], [k, ((i + 1) % a) * b + j]);
    }
  return { v, e };
};

/* Gyroscope: three gimbal rings, each turning on its own axis around a still core. */
export const gyroscope = () => {
  const segs = 48;
  const radii = [0.95, 0.75, 0.55];
  const base = radii.map((r) => Array.from({ length: segs }, (_, i) => [Math.cos((i / segs) * Math.PI * 2) * r, Math.sin((i / segs) * Math.PI * 2) * r, 0]));
  const e = [];
  radii.forEach((_, k) => { for (let i = 0; i < segs; i++) e.push([k * segs + i, k * segs + ((i + 1) % segs)]); });
  const coreStart = segs * 3;
  const core = octa().v.map(([x, y, z]) => [x * 0.18, y * 0.18, z * 0.18]);
  octa().e.forEach(([a, b]) => e.push([coreStart + a, coreStart + b]));
  const frame = (t) => [
    ...base[0].map((p) => rot(p, t * 0.5, 0, 0)),
    ...base[1].map((p) => rot(p, Math.PI / 2, t * 0.8, 0)),
    ...base[2].map((p) => rot(p, t * 0.3, Math.PI / 3, t * 1.1)),
    ...core,
  ];
  return { v: frame(0), e, frame };
};

/* A rolling surface: where the decade is heading, as terrain that keeps moving. */
export const wave = () => {
  const n = 16;
  const e = [];
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) {
      const k = i * n + j;
      if (i < n - 1) e.push([k, k + n]);
      if (j < n - 1) e.push([k, k + 1]);
    }
  const frame = (t) => {
    const v = [];
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++) {
        const x = -1 + (i / (n - 1)) * 2;
        const z = -1 + (j / (n - 1)) * 2;
        v.push([x, 0.2 * Math.sin(x * 3 + t * 1.2) * Math.cos(z * 2.4 + t * 0.8) + 0.08 * Math.sin((x + z) * 5 - t * 1.6), z]);
      }
    return v;
  };
  return { v: frame(0), e, frame };
};

/* Double helix: the people, as DNA. */
export const helix = () => {
  const v = [];
  const e = [];
  const n = 60;
  for (let i = 0; i < n; i++) {
    const t = (i / (n - 1)) * Math.PI * 4;
    const y = -0.95 + (i / (n - 1)) * 1.9;
    v.push([Math.cos(t) * 0.42, y, Math.sin(t) * 0.42], [Math.cos(t + Math.PI) * 0.42, y, Math.sin(t + Math.PI) * 0.42]);
    const k = i * 2;
    if (i > 0) e.push([k - 2, k], [k - 1, k + 1]);
    if (i % 4 === 0) e.push([k, k + 1]);
  }
  return { v, e, dots: v.map((_, i) => i).filter((i) => (i >> 1) % 4 === 0) };
};

/* Conical spiral: growth, widening as it rises. */
export const spiral = () => {
  const v = [];
  const e = [];
  const n = 160;
  for (let i = 0; i < n; i++) {
    const t = (i / n) * Math.PI * 9;
    const r = 0.1 + (i / n) * 0.85;
    v.push([Math.cos(t) * r, -0.9 + (i / n) * 1.6, Math.sin(t) * r]);
    if (i) e.push([i - 1, i]);
  }
  return { v, e, dots: [n - 1] };
};

/* Möbius strip. */
export const mobius = () => {
  const v = [];
  const e = [];
  const a = 64;
  const b = 5;
  for (let i = 0; i < a; i++)
    for (let j = 0; j < b; j++) {
      const u = (i / a) * Math.PI * 2;
      const w = -0.32 + (j / (b - 1)) * 0.64;
      v.push([(0.75 + w * Math.cos(u / 2)) * Math.cos(u), w * Math.sin(u / 2), (0.75 + w * Math.cos(u / 2)) * Math.sin(u)]);
      const k = i * b + j;
      if (j < b - 1) e.push([k, k + 1]);
      if (i < a - 1) e.push([k, k + b]);
      else e.push([k, b - 1 - j]); // the half twist joins each edge to the opposite one
    }
  return { v, e };
};

/* Geodesic sphere: an icosahedron subdivided once. */
export const geodesic = () => {
  const ico = icosa();
  const faces = [];
  const n = ico.v.length;
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) for (let k = j + 1; k < n; k++) {
    const has = (a, b) => ico.e.some(([x, y]) => (x === a && y === b) || (x === b && y === a));
    if (has(i, j) && has(j, k) && has(i, k)) faces.push([i, j, k]);
  }
  const v = ico.v.map((p) => [...p]);
  const cache = new Map();
  const mid = (a, b) => {
    const key = a < b ? `${a}-${b}` : `${b}-${a}`;
    if (!cache.has(key)) { v.push(norm([(v[a][0] + v[b][0]) / 2, (v[a][1] + v[b][1]) / 2, (v[a][2] + v[b][2]) / 2])); cache.set(key, v.length - 1); }
    return cache.get(key);
  };
  const edges = new Set();
  const add = (a, b) => edges.add(a < b ? `${a}-${b}` : `${b}-${a}`);
  faces.forEach(([a, b, c]) => {
    const ab = mid(a, b), bc = mid(b, c), ca = mid(c, a);
    [[a, ab], [ab, b], [b, bc], [bc, c], [c, ca], [ca, a], [ab, bc], [bc, ca], [ca, ab]].forEach(([x, y]) => add(x, y));
  });
  return { v, e: [...edges].map((k) => k.split('-').map(Number)) };
};

/* Dodecahedron. */
export const dodeca = () => {
  const p = (1 + Math.sqrt(5)) / 2;
  const raw = [];
  for (const x of [-1, 1]) for (const y of [-1, 1]) for (const z of [-1, 1]) raw.push([x, y, z]);
  for (const a of [-1, 1]) for (const b of [-1, 1]) raw.push([0, a / p, b * p], [a / p, b * p, 0], [a * p, 0, b / p]);
  const v = raw.map((q) => norm(q));
  const e = [];
  for (let i = 0; i < v.length; i++) for (let j = i + 1; j < v.length; j++)
    if (Math.hypot(v[i][0] - v[j][0], v[i][1] - v[j][1], v[i][2] - v[j][2]) < 0.75) e.push([i, j]);
  return { v, e };
};

/* Crystal lattice: 3×3×3 nodes. */
export const lattice = () => {
  const v = [];
  const e = [];
  const idx = (i, j, k) => i * 9 + j * 3 + k;
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) for (let k = 0; k < 3; k++) {
    v.push([(i - 1) * 0.6, (j - 1) * 0.6, (k - 1) * 0.6]);
    if (i < 2) e.push([idx(i, j, k), idx(i + 1, j, k)]);
    if (j < 2) e.push([idx(i, j, k), idx(i, j + 1, k)]);
    if (k < 2) e.push([idx(i, j, k), idx(i, j, k + 1)]);
  }
  return { v, e, dots: v.map((_, i) => i) };
};

/* Skyline: a block of towers, for the companies built. */
export const skyline = () => {
  const heights = [0.9, 1.4, 0.7, 1.7, 1.1, 0.6, 1.25, 0.85, 1.5];
  const parts = [];
  heights.forEach((h, i) => {
    const x = (i % 3) - 1;
    const z = Math.floor(i / 3) - 1;
    parts.push(box([x * 0.42, -0.8 + h / 2, z * 0.42], [0.15, h / 2, 0.15]));
  });
  return merge(...parts);
};

/* Candlesticks: a short price history. */
export const candles = () => {
  const data = [[0.0, 0.25], [0.2, -0.05], [-0.05, 0.35], [0.3, 0.55], [0.5, 0.35], [0.35, 0.7], [0.65, 0.95]];
  const parts = [];
  data.forEach(([open, close], i) => {
    const x = -0.84 + i * 0.28;
    const lo = Math.min(open, close) - 0.12;
    const hi = Math.max(open, close) + 0.12;
    const yo = open - 0.55;
    const yc = close - 0.55;
    parts.push(box([x, (yo + yc) / 2, 0], [0.07, Math.abs(yc - yo) / 2 + 0.01, 0.07]));
    parts.push({ v: [[x, lo - 0.55, 0], [x, Math.min(yo, yc), 0], [x, Math.max(yo, yc), 0], [x, hi - 0.55, 0]], e: [[0, 1], [2, 3]] });
  });
  return merge(...parts);
};

/* Radar: concentric rings with a sweeping arm. */
export const sonar = () => {
  const parts = [0.3, 0.6, 0.9].map((r) => ring(r, 48));
  const fixed = merge(...parts, { v: [[-0.95, 0, 0], [0.95, 0, 0], [0, 0, -0.95], [0, 0, 0.95]], e: [[0, 1], [2, 3]] });
  const blips = [[0.5, 0.2], [-0.35, 0.6], [0.15, -0.72]];
  const base = fixed.v.length;
  const e = [...fixed.e, [base, base + 1]];
  const dots = blips.map((_, i) => base + 2 + i);
  const frame = (t) => {
    const a = t * 1.4;
    return [...fixed.v, [0, 0, 0], [Math.cos(a) * 0.95, 0, Math.sin(a) * 0.95], ...blips.map(([x, z]) => [x, 0, z])];
  };
  return { v: frame(0), e, dots, frame };
};

/* Coin stack: capital, compounding. */
export const coins = () => {
  const parts = [];
  for (let i = 0; i < 6; i++) {
    const y = -0.75 + i * 0.26;
    const dx = Math.sin(i * 1.7) * 0.06;
    const top = ring(0.62, 40, { y: y + 0.09 });
    const bottom = ring(0.62, 40, { y });
    [top, bottom].forEach((r) => { r.v = r.v.map(([x, yy, z]) => [x + dx, yy, z]); });
    const sides = { v: [], e: [] };
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2;
      sides.v.push([Math.cos(a) * 0.62 + dx, y, Math.sin(a) * 0.62], [Math.cos(a) * 0.62 + dx, y + 0.09, Math.sin(a) * 0.62]);
      sides.e.push([k * 2, k * 2 + 1]);
    }
    parts.push(top, bottom, sides);
  }
  return merge(...parts);
};

/* Triangular prism. */
export const prism = () => {
  const tri = [0, 1, 2].map((i) => [Math.cos((i / 3) * Math.PI * 2 + Math.PI / 2) * 0.7, Math.sin((i / 3) * Math.PI * 2 + Math.PI / 2) * 0.7]);
  const v = [...tri.map(([x, y]) => [x, y, -0.6]), ...tri.map(([x, y]) => [x, y, 0.6])];
  return { v, e: [[0, 1], [1, 2], [2, 0], [3, 4], [4, 5], [5, 3], [0, 3], [1, 4], [2, 5]] };
};

/* Hourglass: two cones meeting — the fund's ten-year term. */
export const hourglass = () => {
  const parts = [ring(0.7, 36, { y: 0.9 }), ring(0.7, 36, { y: -0.9 }), ring(0.08, 12, { y: 0 })];
  const struts = { v: [], e: [] };
  for (let k = 0; k < 10; k++) {
    const a = (k / 10) * Math.PI * 2;
    struts.v.push([Math.cos(a) * 0.7, 0.9, Math.sin(a) * 0.7], [Math.cos(a) * 0.08, 0, Math.sin(a) * 0.08], [Math.cos(a) * 0.7, -0.9, Math.sin(a) * 0.7]);
    struts.e.push([k * 3, k * 3 + 1], [k * 3 + 1, k * 3 + 2]);
  }
  return merge(...parts, struts);
};

/* Stepped pyramid. */
export const ziggurat = () => {
  const parts = [];
  for (let i = 0; i < 4; i++) {
    const s = 0.85 - i * 0.2;
    parts.push(box([0, -0.7 + i * 0.36 + 0.13, 0], [s, 0.13, s]));
  }
  return merge(...parts);
};

/* Atom: a nucleus and three electron orbits — deep tech. */
export const atom = () => {
  const orbits = [0, 1, 2].map((i) => {
    const r = ring(0.9, 60, { tiltX: Math.PI / 2 });
    r.v = r.v.map(([x, y, z]) => [x, y * 0.38, z]).map((p) => rot(p, 0, 0, (i * Math.PI) / 3));
    return r;
  });
  const n = octa();
  return merge(...orbits, { v: n.v.map(([x, y, z]) => [x * 0.14, y * 0.14, z * 0.14]), e: n.e });
};

/* Graphene: a honeycomb sheet, gently curved. */
export const hexgrid = () => {
  const v = [];
  const e = [];
  const key = new Map();
  const add = (x, z) => {
    const k = `${x.toFixed(3)},${z.toFixed(3)}`;
    if (!key.has(k)) { key.set(k, v.length); v.push([x, -0.15 * (x * x + z * z) + 0.15, z]); }
    return key.get(k);
  };
  const s = 0.2;
  for (let q = -3; q <= 3; q++) for (let r = -3; r <= 3; r++) {
    if (Math.abs(q + r) > 3) continue;
    const cx = s * 1.5 * q;
    const cz = s * Math.sqrt(3) * (r + q / 2);
    const ids = [0, 1, 2, 3, 4, 5].map((i) => add(cx + s * Math.cos((i * Math.PI) / 3), cz + s * Math.sin((i * Math.PI) / 3)));
    ids.forEach((id, i) => e.push([id, ids[(i + 1) % 6]]));
  }
  const seen = new Set();
  return { v, e: e.filter(([a, b]) => { const k = a < b ? `${a}-${b}` : `${b}-${a}`; if (seen.has(k)) return false; seen.add(k); return true; }) };
};

/* Funnel: selection, narrowing through rings. */
export const funnel = () => {
  const radii = [0.95, 0.78, 0.58, 0.38, 0.2, 0.12];
  const parts = radii.map((r, i) => ring(r, 36, { y: 0.8 - i * 0.32 }));
  const struts = { v: [], e: [] };
  for (let k = 0; k < 8; k++) {
    const a = (k / 8) * Math.PI * 2;
    radii.forEach((r, i) => struts.v.push([Math.cos(a) * r, 0.8 - i * 0.32, Math.sin(a) * r]));
    for (let i = 0; i < radii.length - 1; i++) struts.e.push([k * radii.length + i, k * radii.length + i + 1]);
  }
  return merge(...parts, struts);
};

/* Hub and spokes: distribution. */
export const hub = () => {
  const n = 9;
  const v = [[0, 0, 0]];
  const e = [];
  for (let i = 0; i < n; i++) {
    const p = norm([Math.cos(i * 2.399) * (1 - ((i + 0.5) / n) * 2 * 0), (i / (n - 1)) * 1.4 - 0.7, Math.sin(i * 2.399)], 0.85);
    v.push(p);
    e.push([0, i + 1]);
    if (i) e.push([i, i + 1]);
  }
  e.push([n, 1]);
  return { v, e, dots: v.map((_, i) => i) };
};

/* Chip: a die with pins — engineering. */
export const chip = () => {
  const parts = [box([0, 0, 0], [0.5, 0.08, 0.5]), box([0, 0.12, 0], [0.26, 0.04, 0.26])];
  const pins = { v: [], e: [] };
  for (let i = 0; i < 5; i++) {
    const t = -0.4 + i * 0.2;
    [[t, -0.5, t, -0.82], [t, 0.5, t, 0.82], [-0.5, t, -0.82, t], [0.5, t, 0.82, t]].forEach(([x1, z1, x2, z2]) => {
      const b = pins.v.length;
      pins.v.push([x1, 0, z1], [x2, 0, z2]);
      pins.e.push([b, b + 1]);
    });
  }
  return merge(...parts, pins);
};

/* Spoked wheel: mobility. */
export const wheel = () => {
  const parts = [ring(0.9, 48, { tiltX: Math.PI / 2 }), ring(0.78, 48, { tiltX: Math.PI / 2 }), ring(0.16, 16, { tiltX: Math.PI / 2 })];
  const spokes = { v: [], e: [] };
  for (let k = 0; k < 10; k++) {
    const a = (k / 10) * Math.PI * 2;
    spokes.v.push([Math.cos(a) * 0.16, Math.sin(a) * 0.16, 0], [Math.cos(a + 0.4) * 0.78, Math.sin(a + 0.4) * 0.78, 0]);
    spokes.e.push([k * 2, k * 2 + 1]);
  }
  return merge(...parts, spokes);
};

/* Lattice mast with signal rings: telecom. */
export const antenna = () => {
  const legs = [[-0.45, -0.45], [0.45, -0.45], [0, 0.45]];
  const v = [];
  const e = [];
  const levels = 6;
  for (let l = 0; l < levels; l++) {
    const k = 1 - l / levels;
    legs.forEach(([x, z]) => v.push([x * k, -0.9 + l * 0.3, z * k]));
  }
  for (let l = 0; l < levels; l++) for (let i = 0; i < 3; i++) {
    const a = l * 3 + i;
    e.push([a, l * 3 + ((i + 1) % 3)]);
    if (l < levels - 1) e.push([a, a + 3], [a, (l + 1) * 3 + ((i + 1) % 3)]);
  }
  const top = v.length;
  v.push([0, 0.75, 0]);
  [0, 1, 2].forEach((i) => e.push([(levels - 1) * 3 + i, top]));
  return merge({ v, e, dots: [top] }, ring(0.3, 30, { y: 0.75 }), ring(0.55, 30, { y: 0.75 }));
};

/* Broadcast: a point sending out rings — media. */
export const signal = () => {
  const arcs = [0.3, 0.55, 0.8].map((r) => {
    const v = [];
    const e = [];
    for (let i = 0; i <= 20; i++) {
      const a = -0.9 + (i / 20) * 1.8;
      v.push([Math.cos(a) * r - 0.5, Math.sin(a) * r, 0]);
      if (i) e.push([i - 1, i]);
    }
    return { v, e };
  });
  const mirrored = arcs.map((a) => ({ v: a.v.map(([x, y, z]) => [-x - 1 + 0.0, y, z]), e: a.e }));
  return merge(...arcs.map((a) => ({ v: a.v.map(([x, y, z]) => [x + 0.5, y, z]), e: a.e })), ...mirrored.map((a) => ({ v: a.v.map(([x, y, z]) => [x + 0.5, y, z]), e: a.e })), { v: [[0, 0, 0]], e: [], dots: [0] });
};

/* Shield: digital trust. */
export const shield = () => {
  const outline = (s, z) => {
    const v = [];
    const n = 30;
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const x = (t - 0.5) * 1.4 * s;
      const top = 0.75 * s;
      v.push([x, top - Math.abs(x) * 0.15, z]);
    }
    for (let i = 1; i < n; i++) {
      const t = 1 - i / n;
      const x = (t - 0.5) * 1.4 * s;
      v.push([x, 0.75 * s - 1.7 * s * (1 - Math.pow(Math.abs(x) / (0.7 * s), 1.6)) , z]);
    }
    return { v, e: v.map((_, i) => [i, (i + 1) % v.length]) };
  };
  const front = outline(1, 0.12);
  const back = outline(1, -0.12);
  const links = { v: [...front.v.filter((_, i) => i % 6 === 0), ...back.v.filter((_, i) => i % 6 === 0)], e: [] };
  const half = links.v.length / 2;
  for (let i = 0; i < half; i++) links.e.push([i, i + half]);
  return merge(front, back, links, outline(0.55, 0.12));
};

/* Classical columns under a pediment: legal support. */
export const pillars = () => {
  const parts = [box([0, -0.82, 0], [0.9, 0.06, 0.45]), box([0, 0.55, 0], [0.9, 0.06, 0.45])];
  [-0.65, -0.22, 0.22, 0.65].forEach((x) => {
    const c = ring(0.1, 14, { y: -0.76 });
    const d = ring(0.1, 14, { y: 0.49 });
    const s = { v: [[x - 0.1, -0.76, 0], [x - 0.1, 0.49, 0], [x + 0.1, -0.76, 0], [x + 0.1, 0.49, 0]], e: [[0, 1], [2, 3]] };
    parts.push(...[c, d].map((r) => ({ v: r.v.map(([a, b, z]) => [a + x, b, z]), e: r.e })), s);
  });
  parts.push({ v: [[-0.95, 0.61, 0], [0, 0.95, 0], [0.95, 0.61, 0]], e: [[0, 1], [1, 2], [0, 2]] });
  return merge(...parts);
};

/* Target: concentric rings and a crosshair — selection. */
export const target = () => merge(
  ...[0.25, 0.55, 0.85].map((r) => ring(r, 48, { tiltX: Math.PI / 2 })),
  { v: [[-1, 0, 0], [-0.15, 0, 0], [0.15, 0, 0], [1, 0, 0], [0, -1, 0], [0, -0.15, 0], [0, 0.15, 0], [0, 1, 0], [0, 0, 0]], e: [[0, 1], [2, 3], [4, 5], [6, 7]], dots: [8] },
);

/* Padlock: legal pages. */
export const padlock = () => {
  const body = box([0, -0.35, 0], [0.55, 0.42, 0.2]);
  const shackle = { v: [], e: [] };
  for (let i = 0; i <= 24; i++) {
    const a = (i / 24) * Math.PI;
    shackle.v.push([Math.cos(a) * 0.34, 0.07 + Math.sin(a) * 0.5, 0]);
    if (i) shackle.e.push([i - 1, i]);
  }
  const keyhole = ring(0.07, 12, { tiltX: Math.PI / 2 });
  return merge(body, shackle, { v: keyhole.v.map(([x, y, z]) => [x, y - 0.3, z + 0.21]), e: keyhole.e });
};

export const GEOMETRIES = {
  nanotube, pentachoron, tesseract, trefoil, cinquefoil, torus, gyroscope, wave, helix, spiral,
  mobius, geodesic, dodeca, lattice, skyline, candles, sonar, coins, prism, hourglass, ziggurat,
  atom, hexgrid, funnel, hub, chip, wheel, antenna, signal, shield, pillars, target, padlock,
  tetra, octa, cube, icosa, stella, gem, globe, routes, network, cubeStack,
  ipoBars, allocationDisc, steps, layers, nested, gear, platform, fracture,
};
