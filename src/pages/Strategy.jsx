import React from 'react';
import FadeInSection from '@/components/shared/FadeInSection';
import SectionHeader from '@/components/shared/SectionHeader';
import Eyebrow from '@/components/shared/Eyebrow';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '@/lib/LanguageContext';

export default function Strategy() {
  const { t } = useLanguage();

  const visionAreas = [
    { title: t('strategy_theme1_title'), description: t('strategy_theme1_desc') },
    { title: t('strategy_theme2_title'), description: t('strategy_theme2_desc') },
    { title: t('strategy_theme3_title'), description: t('strategy_theme3_desc') },
    { title: t('strategy_theme4_title'), description: t('strategy_theme4_desc') },
    { title: t('strategy_theme5_title'), description: t('strategy_theme5_desc') },
  ];

  const techModels = [
    t('strategy_sharing_economy'), t('strategy_big_data'), t('strategy_cloud'), t('strategy_smart_grid'),
    t('strategy_it_outsourcing'), t('strategy_enterprise_software'), t('strategy_hardware'), t('strategy_payments'),
  ];

  const markets = [
    t('strategy_b2b'), t('strategy_iot'), t('strategy_logistics'), t('strategy_datacenters'),
    t('strategy_fintech'), t('strategy_security'), t('strategy_marketplaces'),
  ];

  const deepDive = [
    { value: 'exit', title: t('strategy_exit_title'), desc: t('strategy_exit_desc') },
    { value: 'selection', title: t('strategy_selection_title'), desc: t('strategy_selection_desc') },
    { value: 'risk', title: t('strategy_risk_title'), desc: t('strategy_risk_desc') },
    { value: 'value', title: t('strategy_value_title'), desc: t('strategy_value_desc') },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-hero-md flex items-center">
        <div className="grain absolute inset-0 z-0">
          <img src="/images/strategy.webp" alt="Strategy" className="w-full h-full object-cover animate-hero-zoom" fetchpriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/40" />
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
          <div className="flex justify-center mb-6"><Eyebrow index="01" invert>{t('strategy_label')}</Eyebrow></div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-paper leading-[1.08] mb-6">{t('strategy_title')}</h1>
          <p className="text-lg sm:text-xl text-paper/60 leading-relaxed max-w-2xl mx-auto">{t('strategy_desc')}</p>
        </div>
      </section>

      {/* Vision Blocks */}
      <section className="bg-paper py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader index="02" label={t('strategy_themes_label')} title="Where we see the decade heading" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-ink-900/10">
            {visionAreas.map((area, i) => (
              <FadeInSection key={area.title} delay={i * 80} className="border-r border-b border-ink-900/10">
                <div className="p-7 h-full">
                  <div className="font-mono text-xs text-tiffany-700 mb-4">{String(i + 1).padStart(2, '0')}</div>
                  <h4 className="font-display text-lg text-ink-900 mb-3 leading-snug">{area.title}</h4>
                  <p className="text-sm text-ink-500 leading-relaxed">{area.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="bg-ink-950 py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeInSection>
              <Eyebrow index="03" invert className="mb-3">{t('strategy_tech_label')}</Eyebrow>
              <h3 className="font-display text-2xl sm:text-3xl text-paper mb-10">{t('strategy_tech_title')}</h3>
              <div className="border-t border-paper/10">
                {techModels.map((item) => (
                  <div key={item} className="flex items-center justify-between py-4 border-b border-paper/10">
                    <span className="text-paper/70">{item}</span>
                  </div>
                ))}
              </div>
            </FadeInSection>
            <FadeInSection delay={100}>
              <Eyebrow index="04" invert className="mb-3">{t('strategy_markets_label')}</Eyebrow>
              <h3 className="font-display text-2xl sm:text-3xl text-paper mb-10">{t('strategy_markets_title')}</h3>
              <div className="border-t border-paper/10">
                {markets.map((item) => (
                  <div key={item} className="flex items-center justify-between py-4 border-b border-paper/10">
                    <span className="text-paper/70">{item}</span>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section className="bg-paper py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader align="center" index="05" label={t('strategy_deepdive_label')} title="Strategy in detail" />
          <Accordion type="single" collapsible className="border-t border-ink-900/10">
            {deepDive.map((item, i) => (
              <AccordionItem key={item.value} value={item.value} className="border-b border-ink-900/10">
                <AccordionTrigger className="text-left py-6 hover:no-underline group">
                  <span className="flex items-baseline gap-5">
                    <span className="font-mono text-xs text-tiffany-700">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-display text-lg sm:text-xl text-ink-900">{item.title}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-ink-500 leading-relaxed pl-[3.25rem] pr-8">
                  {item.desc}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
