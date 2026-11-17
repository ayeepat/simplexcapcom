import React from 'react';
import { Link } from 'react-router-dom';
import StatCounter from '@/components/shared/StatCounter';
import FadeInSection from '@/components/shared/FadeInSection';
import Shape3D from '@/components/shared/Shape3D';
import Cta from '@/components/shared/Cta';
import { useLanguage } from '@/lib/LanguageContext';
import { prefetchRoute } from '@/lib/prefetch';

export default function Home() {
  const { t } = useLanguage();

  const teaserCards = [
    {
      index: '01',
      title: t('home_card_strategy_title'),
      description: t('home_card_strategy_desc'),
      link: '/Strategy',
      shape: 'wave',
    },
    {
      index: '02',
      title: t('home_card_portfolio_title'),
      description: t('home_card_portfolio_desc'),
      link: '/Portfolio',
      shape: 'skyline',
    },
    {
      index: '03',
      title: t('home_card_team_title'),
      description: t('home_card_team_desc'),
      link: '/Team',
      shape: 'helix',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-hero-xl flex items-end">
        <div className="grain absolute inset-0 z-0">
          <img
            src="/images/home.webp"
            alt="Simplex Capital - Tech Venture Capital & Strategic Technology Investments"
            className="w-full h-full object-cover animate-hero-zoom"
            fetchpriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/10" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-28 sm:pt-40 sm:pb-20">
          <div className="max-w-4xl">
            <h1 className="animate-fade-in-up-delay-1 font-display text-4xl sm:text-6xl lg:text-7xl font-medium text-paper leading-[1.03] tracking-tight mb-8">
              {t('home_hero_subtitle')}
            </h1>
            <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl text-paper/60 leading-relaxed mb-12 max-w-xl">
              {t('home_hero_desc')}
            </p>
            <div className="animate-fade-in-up-delay-3 flex flex-wrap gap-4">
              <Cta to="/Strategy" variant="inverse" onMouseEnter={() => prefetchRoute('/Strategy')}>{t('home_explore_strategy')}</Cta>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Ticker */}
      <section className="bg-paper border-b border-ink-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-y sm:divide-y-0 divide-ink-900/10">
            <div className="group card-hover py-10 px-4 sm:px-6"><StatCounter prefix="$" value={500} suffix="M" label={t('home_stats_fum')} delay={0} /></div>
            <div className="group card-hover py-10 px-4 sm:px-6"><StatCounter prefix="$" value={5} suffix="B+" label={t('home_stats_aum')} delay={100} /></div>
            <div className="group card-hover py-10 px-4 sm:px-6"><StatCounter value={25} suffix="+" label={t('home_stats_exp')} delay={200} /></div>
            <div className="group card-hover py-10 px-4 sm:px-6"><StatCounter value={50} suffix="+" label={t('home_stats_ipo')} delay={300} /></div>
            <div className="group card-hover py-10 px-4 sm:px-6"><StatCounter value={10} suffix="x" label={t('home_stats_growth')} delay={400} /></div>
          </div>
        </div>
      </section>

      {/* Teaser Rows */}
      <section className="relative isolate overflow-hidden bg-paper py-20 sm:py-28">
        {/* The 4-simplex: "simplex" one dimension up, turning through 4D. */}
        <Shape3D shape="pentachoron" size={230} speed={0.06} seed={0.5} className="absolute -z-10 hidden xl:block left-[2%] 2xl:left-[6%] top-20 text-tiffany-700/50" />
        <Shape3D shape="tesseract" size={170} speed={0.05} seed={1.9} className="absolute -z-10 hidden xl:block right-[2%] 2xl:right-[6%] bottom-16 text-ink-900/20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-ink-900/10">
            {teaserCards.map((card, i) => (
              <FadeInSection key={card.title} delay={i * 100}>
                <Link
                  to={card.link}
                  onMouseEnter={() => prefetchRoute(card.link)}
                  onTouchStart={() => prefetchRoute(card.link)}
                  data-spin-host="" className="group press relative grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-center py-10 border-b border-ink-900/10 transition-opacity active:opacity-60"
                >
                  {/* teal hairline draws along the row's base on hover */}
                  <span className="pointer-events-none absolute left-0 right-0 -bottom-px h-px origin-left scale-x-0 bg-tiffany-700 transition-transform duration-700 ease-out group-hover:scale-x-100" aria-hidden="true" />
                  <div className="sm:col-span-1">
                    <span className="font-mono text-sm text-tiffany-700">{card.index}</span>
                  </div>
                  <div className="sm:col-span-4">
                    <h3 className="font-display text-2xl sm:text-3xl text-ink-900 group-hover:text-tiffany-700 transition-[color,transform] duration-500 ease-out sm:group-hover:translate-x-2">{card.title}</h3>
                  </div>
                  <div className="sm:col-span-6">
                    {card.link === '/Strategy' ? (
                      <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                        {card.description.split(' · ').map((theme) => (
                          <span key={theme} className="text-sm text-ink-500 transition-colors duration-300 group-hover:text-ink-700 hover:!text-tiffany-700">{theme}</span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-ink-500 leading-relaxed">{card.description}</p>
                    )}
                  </div>
                  <span className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 opacity-0 transition-[opacity,transform] duration-700 ease-out group-hover:opacity-100 group-hover:-translate-x-2 lg:block" aria-hidden="true">
                    <Shape3D shape={card.shape} size={92} speed={0.5} seed={i * 1.7} hoverSpin follow={false} bob={false} className="text-tiffany-700" />
                  </span>
                  <div className="sm:col-span-1 flex sm:justify-end">
                    <span className="inline-flex w-9 h-9 rounded-full border border-ink-900/15 items-center justify-center text-ink-900 group-hover:bg-ink-900 group-hover:text-paper group-hover:border-ink-900 transition-all duration-300 group-active:scale-90">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Market Quote */}
      <section className="relative isolate overflow-hidden bg-ink-950 py-20 sm:py-28">
        <Shape3D shape="gyroscope" size={220} speed={0.05} seed={0.4} className="absolute -z-10 hidden md:block right-[6%] top-1/2 -translate-y-1/2 text-tiffany/45" />
        <Shape3D shape="cinquefoil" size={150} speed={0.12} seed={2.1} className="absolute -z-10 hidden md:block left-[5%] bottom-12 text-paper/20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <div className="font-display text-7xl text-tiffany leading-none mb-6">&ldquo;</div>
            <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-paper leading-snug mb-8 transition-colors duration-700 hover:text-paper/90">
              {t('home_quote')}
            </blockquote>
            <cite className="font-mono text-[11px] text-paper/40 uppercase tracking-[0.16em] not-italic">{t('home_quote_source')}</cite>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
