import React from 'react';
import FadeInSection from '@/components/shared/FadeInSection';
import { TrendingUp } from 'lucide-react';
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
  { labelKey: 'insights_tech_avg', value: 85, color: '#81D8D0' },
  { labelKey: 'insights_sp500_avg', value: 48, color: '#9CA3AF' },
  { labelKey: 'insights_realestate_avg', value: 28, color: '#D1D5DB' },
  { labelKey: 'insights_bonds_avg', value: 12, color: '#E5E7EB' },
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
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/marketinsights.jpg"
            alt="Market Insights"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-900/50" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <span className="inline-block text-tiffany text-sm font-semibold uppercase tracking-widest mb-4 animate-fade-in-up">{t('insights_label')}</span>
          <h1 className="animate-fade-in-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">{t('insights_title')}</h1>
          <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">{t('insights_desc')}</p>
        </div>
      </section>

      {/* IPO Chart */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeInSection>
              <div>
                <h3 className="text-sm font-semibold text-tiffany uppercase tracking-widest mb-2">{t('insights_us_ipo')}</h3>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{t('insights_ipo_2025')}</h4>
                <p className="text-gray-500 mb-8 leading-relaxed">{t('insights_ipo_desc')}</p>
                <div className="space-y-3">
                  {ipoData.map((item) => (
                    <div key={item.year} className="flex items-center gap-4">
                      <span className="text-sm font-medium text-gray-500 w-10">{item.year}</span>
                      <div className="flex-1 bg-gray-100 rounded-full h-8 relative overflow-hidden">
                        <div
                          className="h-full rounded-full flex items-center justify-end pr-3 transition-all duration-700"
                          style={{ width: `${item.pct}%`, backgroundColor: item.year === '2025' ? '#81D8D0' : item.year === '2021' ? '#6BC0C0' : '#B5E8E3' }}
                        >
                          <span className="text-xs font-bold text-white whitespace-nowrap">{item.total}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-6">Source: PitchBook, 2025</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={100}>
              <div>
                <h3 className="text-sm font-semibold text-tiffany uppercase tracking-widest mb-2">{t('insights_asset_returns')}</h3>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{t('insights_asset_title')}</h4>
                <p className="text-gray-500 mb-8 leading-relaxed">{t('insights_asset_subtitle')}</p>
                <div className="space-y-5">
                  {assetReturns.map((item) => (
                    <div key={item.labelKey}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{t(item.labelKey)}</span>
                        <span className="text-sm font-bold" style={{ color: item.color === '#81D8D0' ? '#4A9490' : '#6B7280' }}>
                          {item.value}%
                        </span>
                      </div>
                      <div className="bg-gray-100 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${item.value}%`, backgroundColor: item.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-6">Source: PitchBook, Bloomberg</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Sector Allocation */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h3 className="text-sm font-semibold text-tiffany uppercase tracking-widest mb-4 text-center">{t('insights_allocation')}</h3>
            <h4 className="text-3xl font-bold text-gray-900 mb-12 text-center">{t('insights_allocation_title')}</h4>
          </FadeInSection>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {sectorAllocation.map((sector, i) => (
                <FadeInSection key={sector.nameKey} delay={i * 60}>
                  <div className="bg-white rounded-xl p-5 flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-tiffany-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-tiffany-700 font-bold text-sm">{sector.value}%</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-900">{t(sector.nameKey)}</span>
                        <span className="text-gray-500 text-sm">{sector.value}%</span>
                      </div>
                      <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div className="h-full rounded-full bg-tiffany" style={{ width: `${sector.value * 4}%` }} />
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Insight */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 sm:p-14">
              <div className="w-14 h-14 rounded-2xl bg-tiffany/20 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-7 h-7 text-tiffany" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-relaxed mb-4">
                {t('insights_quote')}
              </h3>
              <p className="text-gray-400 text-lg">
                {t('insights_quote_desc')}
              </p>
              <p className="text-gray-500 text-xs mt-6">{t('insights_source')}</p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}