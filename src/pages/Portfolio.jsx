import React from 'react';
import FadeInSection from '@/components/shared/FadeInSection';
import { Badge } from '@/components/ui/badge';
import { Globe, Code, Rocket } from 'lucide-react';
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
  { icon: Globe, titleKey: 'portfolio_pattern1_title', descKey: 'portfolio_pattern1_desc' },
  { icon: Code, titleKey: 'portfolio_pattern2_title', descKey: 'portfolio_pattern2_desc' },
  { icon: Rocket, titleKey: 'portfolio_pattern3_title', descKey: 'portfolio_pattern3_desc' },
];

export default function Portfolio() {
  const { t } = useLanguage();
  const keyPatterns = keyPatternsData.map(p => ({ ...p, title: t(p.titleKey), description: t(p.descKey) }));
  const portfolioCompanies = portfolioCompaniesData.map(c => ({ ...c, category: t(c.categoryKey), detail: t(c.detailKey) }));

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/portfolio.jpg"
            alt="Portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-900/50" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <span className="inline-block text-tiffany text-sm font-semibold uppercase tracking-widest mb-4 animate-fade-in-up">{t('portfolio_label')}</span>
          <h1 className="animate-fade-in-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">{t('portfolio_title')}</h1>
          <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">{t('portfolio_desc')}</p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioCompanies.map((company, i) => (
              <FadeInSection key={company.name} delay={i * 60}>
                <div className="group bg-gray-50 rounded-2xl p-6 h-full hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-tiffany-50 flex items-center justify-center mb-4 shadow-sm transition-colors">
                    <span className="text-lg font-bold text-tiffany-700">{company.name[0]}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{company.name}</h4>
                  <Badge variant="secondary" className="mb-3 bg-tiffany-50 text-tiffany-700 border-0 text-xs">
                    {company.category}
                  </Badge>
                  <p className="text-sm text-gray-500 leading-relaxed">{company.detail}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Key Patterns */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h3 className="text-sm font-semibold text-tiffany uppercase tracking-widest mb-12 text-center">{t('portfolio_patterns_label')}</h3>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyPatterns.map((pattern, i) => (
              <FadeInSection key={pattern.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-tiffany-50 flex items-center justify-center mx-auto mb-5">
                    <pattern.icon className="w-7 h-7 text-tiffany-700" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{pattern.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{pattern.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}