import React from 'react';
import FadeInSection from '@/components/shared/FadeInSection';
import TiltCard from '@/components/shared/TiltCard';
import Shape3D from '@/components/shared/Shape3D';
import SectionHeader from '@/components/shared/SectionHeader';
import { useLanguage } from '@/lib/LanguageContext';

const portfolioCompaniesData = [
  { name: 'VK (Mail.ru Group)', logo: '/images/logos/vk.svg', categoryKey: 'portfolio_cat_social', detailKey: 'portfolio_detail_vk', shape: 'hub' },
  { name: 'OCSiAl', logo: '/images/logos/ocsial.svg', categoryKey: 'portfolio_cat_nano', detailKey: 'portfolio_detail_ocsia', shape: 'nanotube' },
  { name: 'EPAM Systems', logo: '/images/logos/epam.png', categoryKey: 'portfolio_cat_it', detailKey: 'portfolio_detail_epam', shape: 'chip' },
  { name: 'Softline', logo: '/images/logos/softline.svg', categoryKey: 'portfolio_cat_dist', detailKey: 'portfolio_detail_softline', shape: 'cubeStack' },
  { name: 'DataArt', logo: '/images/logos/dataart.png', categoryKey: 'portfolio_cat_it', detailKey: 'portfolio_detail_dataart', shape: 'icosa' },
  { name: 'Gett', logo: '/images/logos/gett.png', categoryKey: 'portfolio_cat_mobility', detailKey: 'portfolio_detail_gett', shape: 'wheel' },
  { name: 'MTS', logo: '/images/logos/mts.svg', categoryKey: 'portfolio_cat_telecom', detailKey: 'portfolio_detail_mts', shape: 'antenna' },
  { name: 'NMG (National Media Group)', logo: '/images/logos/nmg.svg', categoryKey: 'portfolio_cat_media', detailKey: 'portfolio_detail_nmg', shape: 'signal' },
];

const keyPatternsData = [
  { titleKey: 'portfolio_pattern1_title', descKey: 'portfolio_pattern1_desc', shape: 'globe' },
  { titleKey: 'portfolio_pattern2_title', descKey: 'portfolio_pattern2_desc', shape: 'atom' },
  { titleKey: 'portfolio_pattern3_title', descKey: 'portfolio_pattern3_desc', shape: 'stella' },
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
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <h1 className="animate-fade-in-up-delay-1 font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-paper leading-[1.08] mb-6">{t('portfolio_title')}</h1>
          <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl text-paper/60 leading-relaxed max-w-2xl mx-auto">{t('portfolio_desc')}</p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Companies we've backed" shape="skyline" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-ink-900/10">
            {portfolioCompanies.map((company, i) => (
              <FadeInSection key={company.name} delay={i * 60} className="border-r border-b border-ink-900/10">
                <TiltCard light="ink" className="group p-7 h-full flex flex-col hover:bg-ink-900">
                  {/* Each company carries a figure from its own field; it turns while the card is hovered. */}
                  <div className="tilt-lift flex items-start justify-between mb-6">
                    {/* Logo sits on its own paper plate so brand colours read on both the light card and its dark hover state. */}
                    <div className="flex h-14 w-[148px] items-center justify-start bg-paper px-3.5 ring-1 ring-ink-900/10 transition-[box-shadow,transform] duration-500 group-hover:-translate-y-0.5 group-hover:ring-paper/0 group-hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)]">
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        loading="lazy"
                        decoding="async"
                        className="max-h-8 max-w-full object-contain grayscale opacity-75 transition-[filter,opacity] duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                      />
                    </div>
                    <Shape3D shape={company.shape} size={60} speed={0.6} seed={i * 0.9} tilt={0.5} hoverSpin follow={false} bob={false} className="-mr-2 -mt-2 text-ink-900/25 transition-colors duration-300 group-hover:text-tiffany" />
                  </div>
                  <h4 className="tilt-lift font-display text-lg text-ink-900 group-hover:text-paper mb-1.5 leading-snug transition-colors">{company.name}</h4>
                  <div className="font-mono text-[10px] text-tiffany-700 group-hover:text-tiffany uppercase tracking-[0.14em] mb-4 transition-colors">{company.category}</div>
                  <p className="text-sm text-ink-500 group-hover:text-paper/60 leading-relaxed transition-colors">{company.detail}</p>
                </TiltCard>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Key Patterns */}
      <section className="relative isolate overflow-hidden bg-paper-dim py-20 sm:py-28 border-t border-ink-900/10">
        {/* Graphene and a prism: the materials-science end of the portfolio. */}
        <Shape3D shape="hexgrid" size={220} speed={0.07} seed={2} tilt={0.7} className="absolute -z-10 hidden xl:block left-[2%] top-24 text-tiffany-700/40" />
        <Shape3D shape="prism" size={130} speed={0.14} seed={0.8} className="absolute -z-10 hidden xl:block right-[3%] bottom-20 text-ink-900/20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader align="center" title="What we keep seeing" />
          <div className="border-t border-ink-900/10">
            {keyPatterns.map((pattern, i) => (
              <FadeInSection key={pattern.title} delay={i * 100}>
                <div data-spin-host="" className="group relative grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-8 py-9 border-b border-ink-900/10 transition-colors duration-300 hover:border-ink-900/40">
                  <span className="pointer-events-none absolute -right-20 top-1/2 hidden -translate-y-1/2 opacity-0 transition-[opacity,transform] duration-700 ease-out group-hover:opacity-100 group-hover:-translate-x-3 xl:block" aria-hidden="true">
                    <Shape3D shape={pattern.shape} size={84} speed={0.5} seed={i * 1.4} hoverSpin follow={false} bob={false} className="text-tiffany-700" />
                  </span>
                  <div className="sm:col-span-1 font-mono text-xs text-tiffany-700 transition-transform duration-500 group-hover:translate-x-1">{String(i + 1).padStart(2, '0')}</div>
                  <div className="sm:col-span-4">
                    <h4 className="font-display text-xl text-ink-900 leading-snug transition-colors duration-300 group-hover:text-tiffany-700">{pattern.title}</h4>
                  </div>
                  <div className="sm:col-span-7">
                    <p className="text-ink-500 leading-relaxed transition-colors duration-300 group-hover:text-ink-700">{pattern.description}</p>
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
