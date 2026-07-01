import React from 'react';
import FadeInSection from '@/components/shared/FadeInSection';
import SectionHeader from '@/components/shared/SectionHeader';
import Eyebrow from '@/components/shared/Eyebrow';
import Cta from '@/components/shared/Cta';
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
    { title: lang === 'ru' ? 'Доступ к сети' : 'Network Access', description: lang === 'ru' ? '25+ лет проприетарных отношений с основателями, со-инвесторами, биржами и стратегическими партнёрами по всему миру.' : '25+ years of proprietary relationships with founders, co-investors, exchanges, and strategic partners worldwide.' },
    { title: lang === 'ru' ? 'Дивиденды и капитализация' : 'Dividends & Capitalization', description: lang === 'ru' ? 'Активное участие в советах директоров, оптимизация выручки и устойчивый рост стоимости.' : 'Active board participation driving revenue optimization, operational efficiency, and sustainable value creation.' },
    { title: lang === 'ru' ? 'Международный рост' : 'International Growth', description: lang === 'ru' ? 'Стратегии выхода на глобальные рынки с поддержкой в регуляторных и партнёрских вопросах.' : 'Structured go-global strategies enabling portfolio companies to expand across markets with regulatory and partnership support.' },
    { title: lang === 'ru' ? 'Умные деньги' : 'Smart Money', description: lang === 'ru' ? 'Подбор управленцев, привлечение клиентов, M&A консультации и подготовка к IPO на биржах Лондона, Нью-Йорка и Москвы.' : 'Executive recruitment, customer introductions, M&A advisory, and comprehensive IPO preparation across London, NY, and Moscow exchanges.' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-hero-md flex items-center">
        <div className="grain absolute inset-0 z-0">
          <img src="/images/forinvestors.webp" alt="For Investors" className="w-full h-full object-cover animate-hero-zoom" fetchpriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/40" />
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
          <div className="flex justify-center mb-6"><Eyebrow index="01" invert>{t('investors_label')}</Eyebrow></div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-paper leading-[1.08] mb-6">{t('investors_title')}</h1>
          <p className="text-lg sm:text-xl text-paper/60 leading-relaxed max-w-2xl mx-auto">{t('investors_desc')}</p>
        </div>
      </section>

      {/* Value Add */}
      <section className="bg-paper py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader index="02" label={lang === 'ru' ? 'Добавленная стоимость' : 'Value Add'} title={lang === 'ru' ? 'Больше чем капитал' : 'More than capital'} />
          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-ink-900/10">
            {valueAddItems.map((item, i) => (
              <FadeInSection key={item.title} delay={i * 80} className="border-r border-b border-ink-900/10">
                <div className="p-8 h-full">
                  <div className="font-mono text-xs text-tiffany-700 mb-4">{String(i + 1).padStart(2, '0')}</div>
                  <h4 className="font-display text-xl text-ink-900 mb-3">{item.title}</h4>
                  <p className="text-ink-500 leading-relaxed">{item.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="bg-ink-950 py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <Eyebrow index="03" invert className="mb-4">{lang === 'ru' ? 'Начало работы' : 'Getting Started'}</Eyebrow>
            <h4 className="font-display text-3xl sm:text-4xl text-paper mb-12">{lang === 'ru' ? 'Следующие шаги' : 'Next Steps'}</h4>
            <div className="relative pl-10 mb-14">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-paper/15" />
              <div className="space-y-8">
                {(lang === 'ru' ? nextStepsRu : nextSteps).map((step, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-10 top-0.5 w-4 h-4 rounded-full border border-tiffany flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-tiffany" />
                    </div>
                    <p className="text-paper/70 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <Cta to="/Contact" variant="inverse">{lang === 'ru' ? 'Начать диалог' : 'Start the Conversation'}</Cta>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
