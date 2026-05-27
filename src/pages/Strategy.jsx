import React from 'react';
import FadeInSection from '@/components/shared/FadeInSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Brain, Shield, Globe, Zap, Lock, Monitor, Cloud, Cpu, CreditCard, Package, BarChart3, Truck, Database, Building, ShoppingCart } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Strategy() {
  const { t } = useLanguage();

  const visionAreas = [
    { icon: Brain, title: t('strategy_theme1_title'), description: t('strategy_theme1_desc') },
    { icon: Zap, title: t('strategy_theme2_title'), description: t('strategy_theme2_desc') },
    { icon: Globe, title: t('strategy_theme3_title'), description: t('strategy_theme3_desc') },
    { icon: Monitor, title: t('strategy_theme4_title'), description: t('strategy_theme4_desc') },
    { icon: Lock, title: t('strategy_theme5_title'), description: t('strategy_theme5_desc') },
  ];

  const techModels = [
    { icon: Globe, label: t('strategy_sharing_economy') },
    { icon: BarChart3, label: t('strategy_big_data') },
    { icon: Cloud, label: t('strategy_cloud') },
    { icon: Zap, label: t('strategy_smart_grid') },
    { icon: Monitor, label: t('strategy_it_outsourcing') },
    { icon: Cpu, label: t('strategy_enterprise_software') },
    { icon: Package, label: t('strategy_hardware') },
    { icon: CreditCard, label: t('strategy_payments') },
  ];

  const markets = [
    { icon: Building, label: t('strategy_b2b') },
    { icon: Cpu, label: t('strategy_iot') },
    { icon: Truck, label: t('strategy_logistics') },
    { icon: Database, label: t('strategy_datacenters') },
    { icon: CreditCard, label: t('strategy_fintech') },
    { icon: Shield, label: t('strategy_security') },
    { icon: ShoppingCart, label: t('strategy_marketplaces') },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/strategy.jpg"
            alt="Strategy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-900/50" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <span className="inline-block text-tiffany text-sm font-semibold uppercase tracking-widest mb-4 animate-fade-in-up">{t('strategy_label')}</span>
          <h1 className="animate-fade-in-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">{t('strategy_title')}</h1>
          <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">{t('strategy_desc')}</p>
        </div>
      </section>

      {/* Vision Blocks */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h3 className="text-sm font-semibold text-tiffany uppercase tracking-widest mb-12 text-center">{t('strategy_themes_label')}</h3>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visionAreas.map((area, i) => (
              <FadeInSection key={area.title} delay={i * 80}>
                <div className="bg-gray-50 rounded-2xl p-8 h-full hover:bg-tiffany-50 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 group-hover:bg-tiffany-100 transition-colors shadow-sm">
                    <area.icon className="w-6 h-6 text-tiffany-700" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{area.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{area.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeInSection>
              <div className="bg-white rounded-3xl p-8 sm:p-10 h-full">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-semibold text-tiffany uppercase tracking-widest">{t('strategy_tech_label')}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('strategy_tech_title')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {techModels.map((item) => (
                    <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-tiffany-50 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-tiffany-700" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
            <FadeInSection delay={100}>
              <div className="bg-white rounded-3xl p-8 sm:p-10 h-full">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-semibold text-tiffany uppercase tracking-widest">{t('strategy_markets_label')}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('strategy_markets_title')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {markets.map((item) => (
                    <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-tiffany-50 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-tiffany-700" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h3 className="text-sm font-semibold text-tiffany uppercase tracking-widest mb-8 text-center">{t('strategy_deepdive_label')}</h3>
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="exit" className="bg-gray-50 rounded-xl border-none px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                  {t('strategy_exit_title')}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {t('strategy_exit_desc')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="selection" className="bg-gray-50 rounded-xl border-none px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                  {t('strategy_selection_title')}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {t('strategy_selection_desc')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="risk" className="bg-gray-50 rounded-xl border-none px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                  {t('strategy_risk_title')}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {t('strategy_risk_desc')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="value" className="bg-gray-50 rounded-xl border-none px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                  {t('strategy_value_title')}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {t('strategy_value_desc')}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}