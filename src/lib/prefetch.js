// Warms the route's JS chunk and hero image on hover/touch, before the click
// lands — turns the click -> chunk -> image waterfall into work done ahead of time.
const routeLoaders = {
  '/Fund': () => import('@/pages/Fund'),
  '/Strategy': () => import('@/pages/Strategy'),
  '/Portfolio': () => import('@/pages/Portfolio'),
  '/Team': () => import('@/pages/Team'),
  '/MarketInsights': () => import('@/pages/MarketInsights'),
  '/ForInvestors': () => import('@/pages/ForInvestors'),
  '/Contact': () => import('@/pages/Contact'),
};

const heroImages = {
  '/Fund': '/images/fund.webp',
  '/Strategy': '/images/strategy.webp',
  '/Portfolio': '/images/portfolio.webp',
  '/Team': '/images/team.webp',
  '/MarketInsights': '/images/marketinsights.webp',
  '/ForInvestors': '/images/forinvestors.webp',
  '/Contact': '/images/contact.webp',
};

const prefetched = new Set();

export function prefetchRoute(path) {
  if (prefetched.has(path)) return;
  prefetched.add(path);
  routeLoaders[path]?.();
  const src = heroImages[path];
  if (src) new Image().src = src;
}
