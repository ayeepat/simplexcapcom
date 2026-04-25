import React from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '@/components/shared/FadeInSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Network, TrendingUp, Globe, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const nextSteps = [
  'Review our Investment Strategy and Pipeline',
  'Schedule an introductory call with our Investor Relations team',
  'Receive detailed fund documentation and data room access',
  'Complete qualification and subscription process',
];

const nextStepsRu = [
  'Ознакомьтесь с нашей инвестиционной стратегией и пайплайном',
  'Запланируйте вводный звонок с командой по работе с инвесторами',
  'Получите подробную документацию фонда и доступ к Data Room',
  'Завершите квалификацию и процесс подписки',
];

export default function ForInvestors() {
  const { t, lang } = useLanguage();

  const valueAddItems = [
    { icon: Network, title: lang === 'ru' ? 'Доступ к сети' : 'Network Access', description: lang === 'ru' ? '25+ лет проприетарных отношений с основателями, со-инвесторами, биржами и стратегическими партнёрами по всему миру.' : '25+ years of proprietary relationships with founders, co-investors, exchanges, and strategic partners worldwide.' },
    { icon: TrendingUp, title: lang === 'ru' ? 'Дивиденды и капитализация' : 'Dividends & Capitalization', description: lang === 'ru' ? 'Активное участие в советах директоров, оптимизация выручки и устойчивый рост стоимости.' : 'Active board participation driving revenue optimization, operational efficiency, and sustainable value creation.' },
    { icon: Globe, title: lang === 'ru' ? 'Международный рост' : 'International Growth', description: lang === 'ru' ? 'Стратегии выхода на глобальные рынки с поддержкой в регуляторных и партнёрских вопросах.' : 'Structured go-global strategies enabling portfolio companies to expand across markets with regulatory and partnership support.' },
    { icon: Lightbulb, title: lang === 'ru' ? 'Умные деньги' : 'Smart Money', description: lang === 'ru' ? 'Подбор управленцев, привлечение клиентов, M&A консультации и подготовка к IPO на биржах Лондона, Нью-Йорка и Москвы.' : 'Executive recruitment, customer introductions, M&A advisory, and comprehensive IPO preparation across London, NY, and Moscow exchanges.' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/forinvestors.jpg"
            alt="For Investors"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-900/50" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <span className="inline-block text-tiffany text-sm font-semibold uppercase tracking-widest mb-4 animate-fade-in-up">{t('investors_label')}</span>
          <h1 className="animate-fade-in-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">{t('investors_title')}</h1>
          <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">{t('investors_desc')}</p>
        </div>
      </section>

      {/* Value Add */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h3 className="text-sm font-semibold text-tiffany uppercase tracking-widest mb-4 text-center">{lang === 'ru' ? 'Добавленная стоимость' : 'Value Add'}</h3>
            <h4 className="text-3xl font-bold text-gray-900 mb-12 text-center">{lang === 'ru' ? 'Больше чем капитал' : 'More Than Capital'}</h4>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {valueAddItems.map((item, i) => (
              <FadeInSection key={item.title} delay={i * 80}>
                <div className="bg-gray-50 rounded-2xl p-8 h-full shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-tiffany-50 flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-tiffany-700" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 text-white">
              <h3 className="text-sm font-semibold text-tiffany uppercase tracking-widest mb-4">{lang === 'ru' ? 'Начало работы' : 'Getting Started'}</h3>
              <h4 className="text-3xl font-bold mb-8">{lang === 'ru' ? 'Следующие шаги' : 'Next Steps'}</h4>
              <div className="space-y-4 mb-10">
                {(lang === 'ru' ? nextStepsRu : nextSteps).map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-tiffany/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-tiffany font-bold text-sm">{i + 1}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
              <Link to="/Contact">
                <Button size="lg" className="bg-tiffany hover:bg-tiffany-dark text-white rounded-full px-8">
                  {lang === 'ru' ? 'Начать диалог' : 'Start the Conversation'} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}