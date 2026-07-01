import React from 'react';
import FadeInSection from '@/components/shared/FadeInSection';
import SectionHeader from '@/components/shared/SectionHeader';
import Eyebrow from '@/components/shared/Eyebrow';
import { useLanguage } from '@/lib/LanguageContext';

const ipoData = [
  { year: '2019', total: 159, pct: 17 },
  { year: '2020', total: 218, pct: 23 },
  { year: '2021', total: 961, pct: 100 },
  { year: '2022', total: 89, pct: 9 },
  { year: '2023', total: 154, pct: 16 },
  { year: '2024', total: 225, pct: 23 },
  { year: '2025', total: 347, pct: 36 },
];

const assetReturns = [
  { labelKey: 'insights_tech_avg', value: 85, highlight: true },
  { labelKey: 'insights_sp500_avg', value: 48 },
  { labelKey: 'insights_realestate_avg', value: 28 },
  { labelKey: 'insights_bonds_avg', value: 12 },
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
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
          <div className="flex justify-center mb-6"><Eyebrow index="01" invert>{t('insights_label')}</Eyebrow></div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-paper leading-[1.08] mb-6">{t('insights_title')}</h1>
          <p className="text-lg sm:text-xl text-paper/60 leading-relaxed max-w-2xl mx-auto">{t('insights_desc')}</p>
        </div>
      </section>

      {/* IPO Chart */}
      <section className="bg-paper py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeInSection>
              <Eyebrow index="02" className="mb-3">{t('insights_us_ipo')}</Eyebrow>
              <h4 className="font-display text-2xl text-ink-900 mb-2">{t('insights_ipo_2025')}</h4>
              <p className="text-ink-500 mb-10 leading-relaxed">{t('insights_ipo_desc')}</p>
              <div className="space-y-4">
                {ipoData.map((item) => (
                  <div key={item.year} className="flex items-center gap-4">
                    <span className="font-mono text-xs text-ink-500 w-10">{item.year}</span>
                    <div className="flex-1 bg-ink-900/5 h-8 relative overflow-hidden">
                      <div
                        className={`h-full flex items-center justify-end pr-3 transition-all duration-700 ${item.year === '2025' ? 'bg-tiffany-700' : 'bg-ink-900/70'}`}
                        style={{ width: `${item.pct}%` }}
                      >
                        <span className="font-mono text-[11px] font-medium text-paper whitespace-nowrap">{item.total}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-mono text-[11px] text-ink-400 mt-6 uppercase tracking-wide">Source: PitchBook, 2025</p>
            </FadeInSection>

            <FadeInSection delay={100}>
              <Eyebrow index="03" className="mb-3">{t('insights_asset_returns')}</Eyebrow>
              <h4 className="font-display text-2xl text-ink-900 mb-2">{t('insights_asset_title')}</h4>
              <p className="text-ink-500 mb-10 leading-relaxed">{t('insights_asset_subtitle')}</p>
              <div className="space-y-6">
                {assetReturns.map((item) => (
                  <div key={item.labelKey}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-ink-700">{t(item.labelKey)}</span>
                      <span className={`font-mono text-sm ${item.highlight ? 'text-tiffany-700' : 'text-ink-500'}`}>{item.value}%</span>
                    </div>
                    <div className="bg-ink-900/5 h-2">
                      <div className={`h-full ${item.highlight ? 'bg-tiffany-700' : 'bg-ink-900/40'}`} style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-mono text-[11px] text-ink-400 mt-6 uppercase tracking-wide">Source: PitchBook, Bloomberg</p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Sector Allocation */}
      <section className="bg-ink-950 py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader align="center" invert index="04" label={t('insights_allocation')} title={t('insights_allocation_title')} />
          <div className="border-t border-paper/10">
            {sectorAllocation.map((sector, i) => (
              <FadeInSection key={sector.nameKey} delay={i * 60}>
                <div className="py-5 border-b border-paper/10">
                  <div className="flex items-center justify-between gap-4 mb-2.5">
                    <span className="text-paper/80">{t(sector.nameKey)}</span>
                    <span className="font-mono text-sm text-tiffany flex-shrink-0">{sector.value}%</span>
                  </div>
                  <div className="bg-paper/10 h-1.5">
                    <div className="h-full bg-tiffany" style={{ width: `${sector.value * 4}%` }} />
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Key Insight */}
      <section className="bg-paper py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <Eyebrow index="05" className="justify-center mb-8">Key Insight</Eyebrow>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink-900 leading-snug mb-6">
              {t('insights_quote')}
            </h3>
            <p className="text-ink-500 text-lg leading-relaxed mb-6">
              {t('insights_quote_desc')}
            </p>
            <p className="font-mono text-[11px] text-ink-400 uppercase tracking-wide">{t('insights_source')}</p>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
