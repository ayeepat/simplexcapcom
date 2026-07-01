import React from 'react';
import { Link } from 'react-router-dom';
import StatCounter from '@/components/shared/StatCounter';
import FadeInSection from '@/components/shared/FadeInSection';
import Eyebrow from '@/components/shared/Eyebrow';
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
    },
    {
      index: '02',
      title: t('home_card_portfolio_title'),
      description: t('home_card_portfolio_desc'),
      link: '/Portfolio',
    },
    {
      index: '03',
      title: t('home_card_team_title'),
      description: t('home_card_team_desc'),
      link: '/Team',
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
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-40 sm:pb-20">
          <div className="max-w-4xl">
            <div className="animate-fade-in-up mb-6">
              <Eyebrow index="01" invert>{t('home_hero_title')}</Eyebrow>
            </div>
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
            <div className="py-10 px-4 sm:px-6"><StatCounter prefix="$" value={500} suffix="M" label={t('home_stats_fum')} delay={0} /></div>
            <div className="py-10 px-4 sm:px-6"><StatCounter prefix="$" value={5} suffix="B+" label={t('home_stats_aum')} delay={100} /></div>
            <div className="py-10 px-4 sm:px-6"><StatCounter value={25} suffix="+" label={t('home_stats_exp')} delay={200} /></div>
            <div className="py-10 px-4 sm:px-6"><StatCounter value={50} suffix="+" label={t('home_stats_ipo')} delay={300} /></div>
            <div className="py-10 px-4 sm:px-6"><StatCounter value={10} suffix="x" label={t('home_stats_growth')} delay={400} /></div>
          </div>
        </div>
      </section>

      {/* Teaser Rows */}
      <section className="bg-paper py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-ink-900/10">
            {teaserCards.map((card, i) => (
              <FadeInSection key={card.title} delay={i * 100}>
                <Link
                  to={card.link}
                  onMouseEnter={() => prefetchRoute(card.link)}
                  onTouchStart={() => prefetchRoute(card.link)}
                  className="group grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-center py-10 border-b border-ink-900/10 transition-opacity active:opacity-60"
                >
                  <div className="sm:col-span-1">
                    <span className="font-mono text-sm text-tiffany-700">{card.index}</span>
                  </div>
                  <div className="sm:col-span-4">
                    <h3 className="font-display text-2xl sm:text-3xl text-ink-900 group-hover:text-tiffany-700 transition-colors">{card.title}</h3>
                  </div>
                  <div className="sm:col-span-6">
                    {card.link === '/Strategy' ? (
                      <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                        {card.description.split(' · ').map((theme) => (
                          <span key={theme} className="text-sm text-ink-500">{theme}</span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-ink-500 leading-relaxed">{card.description}</p>
                    )}
                  </div>
                  <div className="sm:col-span-1 flex sm:justify-end">
                    <span className="inline-flex w-9 h-9 rounded-full border border-ink-900/15 items-center justify-center text-ink-900 group-hover:bg-ink-900 group-hover:text-paper group-hover:border-ink-900 transition-all">
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
      <section className="bg-ink-950 py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <div className="font-display text-7xl text-tiffany leading-none mb-6">&ldquo;</div>
            <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-paper leading-snug mb-8">
              {t('home_quote')}
            </blockquote>
            <cite className="font-mono text-[11px] text-paper/40 uppercase tracking-[0.16em] not-italic">{t('home_quote_source')}</cite>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
