import React from 'react';
import FadeInSection from '@/components/shared/FadeInSection';
import SectionHeader from '@/components/shared/SectionHeader';
import GrowBar from '@/components/shared/GrowBar';
import Shape3D from '@/components/shared/Shape3D';
import { useLanguage } from '@/lib/LanguageContext';

const ipoData = [
  { year: '2019', total: 232, pct: 22 },
  { year: '2020', total: 480, pct: 46 },
  { year: '2021', total: 1035, pct: 100 },
  { year: '2022', total: 181, pct: 17 },
  { year: '2023', total: 154, pct: 15 },
  { year: '2024', total: 225, pct: 22 },
  { year: '2025', total: 347, pct: 34 },
  { year: '2026*', total: 190, pct: 18, current: true },
];

const assetReturns = [
  { labelKey: 'insights_tech_avg', value: 504, pct: 100, highlight: true },
  { labelKey: 'insights_sp500_avg', value: 298, pct: 59 },
  { labelKey: 'insights_realestate_avg', value: 75, pct: 15 },
  { labelKey: 'insights_bonds_avg', value: 22, pct: 4 },
];

const sectorAllocation = [
  { nameKey: 'insights_cybersecurity', value: 25 },
  { nameKey: 'insights_enterprise_software', value: 22 },
  { nameKey: 'insights_datacenters', value: 18 },
  { nameKey: 'insights_fintech', value: 15 },
  { nameKey: 'insights_ai_ml', value: 12 },
  { nameKey: 'insights_other', value: 8 },
];

export default function MarketInsights() {
  const { t } = useLanguage();
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-hero-md flex items-center">
        <div className="grain absolute inset-0 z-0">
          <img src="/images/marketinsights.webp" alt="Market Insights" className="w-full h-full object-cover animate-hero-zoom" fetchpriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/40" />
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <h1 className="animate-fade-in-up-delay-1 font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-paper leading-[1.08] mb-6">{t('insights_title')}</h1>
          <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl text-paper/60 leading-relaxed max-w-2xl mx-auto">{t('insights_desc')}</p>
        </div>
      </section>

      {/* IPO Chart */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeInSection>
              <h4 className="font-display text-2xl text-ink-900 mb-2">{t('insights_ipo_headline')}</h4>
              <p className="text-ink-500 mb-10 leading-relaxed">{t('insights_ipo_desc')}</p>
              <div className="focus-list space-y-4">
                {ipoData.map((item, i) => (
                  <div key={item.year} className="group flex items-center gap-4">
                    <span className="font-mono text-xs text-ink-500 w-10 transition-colors duration-300 group-hover:text-ink-900">{item.year}</span>
                    <div className="flex-1 bg-ink-900/5 h-8 relative overflow-hidden">
                      <GrowBar
                        pct={item.pct}
                        delay={i * 70}
                        className={`h-full flex items-center justify-end pr-3 transition-colors duration-300 ${item.current ? 'bg-tiffany-700' : 'bg-ink-900/70 group-hover:bg-ink-900'}`}
                      >
                        <span className="font-mono text-[11px] font-medium text-paper whitespace-nowrap">{item.total}</span>
                      </GrowBar>
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-mono text-[11px] text-ink-400 mt-6 uppercase tracking-wide">Source: StockAnalysis.com, July 2026 · *2026 = H1 (Jan–Jun)</p>
            </FadeInSection>

            <FadeInSection delay={100}>
              <h4 className="font-display text-2xl text-ink-900 mb-2">{t('insights_asset_title')}</h4>
              <p className="text-ink-500 mb-10 leading-relaxed">{t('insights_asset_subtitle')}</p>
              <div className="focus-list space-y-6">
                {assetReturns.map((item, i) => (
                  <div key={item.labelKey} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-ink-700">{t(item.labelKey)}</span>
                      <span className={`font-mono text-sm transition-transform duration-300 group-hover:-translate-y-0.5 ${item.highlight ? 'text-tiffany-700' : 'text-ink-500 group-hover:text-ink-900'}`}>+{item.value}%</span>
                    </div>
                    <div className="bg-ink-900/5 h-2 transition-[height] duration-300 group-hover:h-3">
                      <GrowBar pct={item.pct} delay={i * 110} className={`h-full ${item.highlight ? 'bg-tiffany-700' : 'bg-ink-900/40'}`} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-mono text-[11px] text-ink-400 mt-6 uppercase tracking-wide">Source: Nasdaq, S&P DJI, Nareit, Bloomberg · Total return, 2016–2025</p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Sector Allocation */}
      <section className="relative isolate overflow-hidden bg-ink-950 py-20 sm:py-28">
        {/* The target allocation below, as a disc cut into its six slices. */}
        <Shape3D shape="allocationDisc" size={240} speed={0.1} seed={0.7} tilt={0.85} className="absolute -z-10 hidden lg:block right-[3%] top-14 text-tiffany/40" />
        <Shape3D shape="sonar" size={180} seed={2.4} speed={0.1} tilt={0.9} className="absolute -z-10 hidden lg:block left-[4%] bottom-14 text-paper/25" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader align="center" invert title={t('insights_allocation_title')} />
          <div className="focus-list border-t border-paper/10">
            {sectorAllocation.map((sector, i) => (
              <FadeInSection key={sector.nameKey} delay={i * 60}>
                <div className="group py-5 border-b border-paper/10">
                  <div className="flex items-center justify-between gap-4 mb-2.5">
                    <span className="text-paper/80 transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-paper">{t(sector.nameKey)}</span>
                    <span className="font-mono text-sm text-tiffany flex-shrink-0">{sector.value}%</span>
                  </div>
                  <div className="bg-paper/10 h-1.5 transition-[height] duration-300 group-hover:h-2.5">
                    <GrowBar pct={sector.value * 4} className="h-full bg-tiffany" />
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Key Insight */}
      <section className="relative isolate overflow-hidden bg-paper py-20 sm:py-28">
        <Shape3D shape="ipoBars" size={200} speed={0.07} seed={1.6} tilt={0.3} className="absolute -z-10 hidden xl:block left-[5%] top-1/2 -translate-y-1/2 text-ink-900/20" />
        <Shape3D shape="candles" size={190} speed={0.1} seed={3.1} tilt={0.2} className="absolute -z-10 hidden xl:block right-[5%] top-1/2 -translate-y-1/2 text-tiffany-700/45" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink-900 leading-snug mb-6">
              {t('insights_quote')}
            </h3>
            <p className="text-ink-500 text-lg leading-relaxed mb-6">
              {t('insights_quote_desc')}
            </p>
            <p className="text-ink-400 text-sm leading-relaxed mb-6 max-w-2xl mx-auto">
              {t('insights_risk_note')}
            </p>
            <p className="font-mono text-[11px] text-ink-400 uppercase tracking-wide">{t('insights_source')}</p>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
