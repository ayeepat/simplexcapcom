import React from 'react';
import FadeInSection from '@/components/shared/FadeInSection';
import SectionHeader from '@/components/shared/SectionHeader';
import Eyebrow from '@/components/shared/Eyebrow';
import { useLanguage } from '@/lib/LanguageContext';

const portfolioCompaniesData = [
  { name: 'VK (Mail.ru Group)', categoryKey: 'portfolio_cat_social', detailKey: 'portfolio_detail_vk' },
  { name: 'OCSiAl', categoryKey: 'portfolio_cat_nano', detailKey: 'portfolio_detail_ocsia' },
  { name: 'EPAM Systems', categoryKey: 'portfolio_cat_it', detailKey: 'portfolio_detail_epam' },
  { name: 'Softline', categoryKey: 'portfolio_cat_dist', detailKey: 'portfolio_detail_softline' },
  { name: 'DataArt', categoryKey: 'portfolio_cat_it', detailKey: 'portfolio_detail_dataart' },
  { name: 'Gett', categoryKey: 'portfolio_cat_mobility', detailKey: 'portfolio_detail_gett' },
  { name: 'MTS', categoryKey: 'portfolio_cat_telecom', detailKey: 'portfolio_detail_mts' },
  { name: 'NMG (National Media Group)', categoryKey: 'portfolio_cat_media', detailKey: 'portfolio_detail_nmg' },
];

const keyPatternsData = [
  { titleKey: 'portfolio_pattern1_title', descKey: 'portfolio_pattern1_desc' },
  { titleKey: 'portfolio_pattern2_title', descKey: 'portfolio_pattern2_desc' },
  { titleKey: 'portfolio_pattern3_title', descKey: 'portfolio_pattern3_desc' },
];

export default function Portfolio() {
  const { t } = useLanguage();
  const keyPatterns = keyPatternsData.map(p => ({ ...p, title: t(p.titleKey), description: t(p.descKey) }));
  const portfolioCompanies = portfolioCompaniesData.map(c => ({ ...c, category: t(c.categoryKey), detail: t(c.detailKey) }));

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-hero-md flex items-center">
        <div className="grain absolute inset-0 z-0">
          <img src="/images/portfolio.webp" alt="Portfolio" className="w-full h-full object-cover animate-hero-zoom" fetchpriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/40" />
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
          <div className="flex justify-center mb-6"><Eyebrow index="01" invert>{t('portfolio_label')}</Eyebrow></div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-paper leading-[1.08] mb-6">{t('portfolio_title')}</h1>
          <p className="text-lg sm:text-xl text-paper/60 leading-relaxed max-w-2xl mx-auto">{t('portfolio_desc')}</p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-paper py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader index="02" label="Selected Investments" title="Companies we've backed" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-ink-900/10">
            {portfolioCompanies.map((company, i) => (
              <FadeInSection key={company.name} delay={i * 60} className="border-r border-b border-ink-900/10 group hover:bg-ink-900 transition-colors duration-300">
                <div className="p-7 h-full flex flex-col">
                  <div className="font-display text-3xl text-ink-900 group-hover:text-paper mb-6 transition-colors">{company.name[0]}</div>
                  <h4 className="font-display text-lg text-ink-900 group-hover:text-paper mb-1.5 leading-snug transition-colors">{company.name}</h4>
                  <div className="font-mono text-[10px] text-tiffany-700 group-hover:text-tiffany uppercase tracking-[0.14em] mb-4 transition-colors">{company.category}</div>
                  <p className="text-sm text-ink-500 group-hover:text-paper/60 leading-relaxed transition-colors">{company.detail}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Key Patterns */}
      <section className="bg-paper-dim py-28 border-t border-ink-900/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader align="center" index="03" label={t('portfolio_patterns_label')} title="What we keep seeing" />
          <div className="border-t border-ink-900/10">
            {keyPatterns.map((pattern, i) => (
              <FadeInSection key={pattern.title} delay={i * 100}>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-8 py-9 border-b border-ink-900/10">
                  <div className="sm:col-span-1 font-mono text-xs text-tiffany-700">{String(i + 1).padStart(2, '0')}</div>
                  <div className="sm:col-span-4">
                    <h4 className="font-display text-xl text-ink-900 leading-snug">{pattern.title}</h4>
                  </div>
                  <div className="sm:col-span-7">
                    <p className="text-ink-500 leading-relaxed">{pattern.description}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
