import React from 'react';
import FadeInSection from '@/components/shared/FadeInSection';
import TiltCard from '@/components/shared/TiltCard';
import SectionHeader from '@/components/shared/SectionHeader';
import Shape3D from '@/components/shared/Shape3D';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '@/lib/LanguageContext';

export default function Strategy() {
  const { t } = useLanguage();

  const visionAreas = [
    { title: t('strategy_theme1_title'), description: t('strategy_theme1_desc'), shape: 'gear' },
    { title: t('strategy_theme2_title'), description: t('strategy_theme2_desc'), shape: 'network' },
    { title: t('strategy_theme3_title'), description: t('strategy_theme3_desc'), shape: 'platform' },
    { title: t('strategy_theme4_title'), description: t('strategy_theme4_desc'), shape: 'fracture' },
    { title: t('strategy_theme5_title'), description: t('strategy_theme5_desc'), shape: 'shield' },
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
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <h1 className="animate-fade-in-up-delay-1 font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-paper leading-[1.08] mb-6">{t('strategy_title')}</h1>
          <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl text-paper/60 leading-relaxed max-w-2xl mx-auto">{t('strategy_desc')}</p>
        </div>
      </section>

      {/* Vision Blocks */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Where we see the decade heading" shape="wave" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-ink-900/10">
            {visionAreas.map((area, i) => (
              <FadeInSection key={area.title} delay={i * 80} className="border-r border-b border-ink-900/10">
                <TiltCard className="group card-hover p-7 h-full">
                  {/* Each theme has its own figure; it turns while the card is hovered. */}
                  <div className="tilt-lift flex items-start justify-between mb-4">
                    <div className="font-mono text-xs text-tiffany-700">{String(i + 1).padStart(2, '0')}</div>
                    <Shape3D shape={area.shape} size={58} speed={0.6} seed={i * 1.3} tilt={0.55} hoverSpin follow={false} bob={false} className="-mr-2 -mt-3 text-ink-900/35 transition-colors duration-500 group-hover:text-tiffany-700" />
                  </div>
                  <h4 className="tilt-lift font-display text-lg text-ink-900 mb-3 leading-snug transition-colors duration-300 group-hover:text-tiffany-700">{area.title}</h4>
                  <p className="text-sm text-ink-500 leading-relaxed">{area.description}</p>
                </TiltCard>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="relative isolate overflow-hidden bg-ink-950 py-20 sm:py-28">
        <Shape3D shape="lattice" size={170} speed={0.1} seed={0.9} className="absolute -z-10 hidden lg:block right-[3%] top-8 text-tiffany/40" />
        <Shape3D shape="geodesic" size={120} seed={2.6} speed={0.14} className="absolute -z-10 hidden lg:block left-[45%] bottom-8 text-paper/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeInSection>
              <h3 className="font-display text-2xl sm:text-3xl text-paper mb-2">{t('strategy_tech_title')}</h3>
              <p className="text-sm text-tiffany/80 mb-10">{t('strategy_tech_label')}</p>
              <div className="focus-list border-t border-paper/10">
                {techModels.map((item) => (
                  <div key={item} className="group flex items-center justify-between py-4 border-b border-paper/10 transition-colors duration-300 hover:border-paper/30">
                    <span className="inline-block text-paper/70 transition-[color,transform] duration-300 ease-out group-hover:translate-x-1.5 group-hover:text-paper">{item}</span>
                    <span className="h-1 w-1 rounded-full bg-tiffany opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </FadeInSection>
            <FadeInSection delay={100}>
              <h3 className="font-display text-2xl sm:text-3xl text-paper mb-2">{t('strategy_markets_title')}</h3>
              <p className="text-sm text-tiffany/80 mb-10">{t('strategy_markets_label')}</p>
              <div className="focus-list border-t border-paper/10">
                {markets.map((item) => (
                  <div key={item} className="group flex items-center justify-between py-4 border-b border-paper/10 transition-colors duration-300 hover:border-paper/30">
                    <span className="inline-block text-paper/70 transition-[color,transform] duration-300 ease-out group-hover:translate-x-1.5 group-hover:text-paper">{item}</span>
                    <span className="h-1 w-1 rounded-full bg-tiffany opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section className="relative isolate overflow-hidden bg-paper py-20 sm:py-28">
        <Shape3D shape="spiral" size={230} speed={0.1} seed={1.1} tilt={0.3} className="absolute -z-10 hidden xl:block left-[5%] top-24 text-tiffany-700/40" />
        <Shape3D shape="dodeca" size={160} speed={0.12} seed={3.3} className="absolute -z-10 hidden xl:block right-[6%] bottom-24 text-ink-900/20" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader align="center" title="Strategy in detail" />
          <Accordion type="single" collapsible className="border-t border-ink-900/10">
            {deepDive.map((item, i) => (
              <AccordionItem key={item.value} value={item.value} className="border-b border-ink-900/10">
                <AccordionTrigger className="text-left py-6 hover:no-underline group">
                  <span className="flex items-baseline gap-5">
                    <span className="font-mono text-xs text-tiffany-700 transition-transform duration-300 group-hover:-translate-y-0.5">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-display text-lg sm:text-xl text-ink-900 transition-colors duration-300 group-hover:text-tiffany-700">{item.title}</span>
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
